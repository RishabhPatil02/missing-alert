package com.mars.missingalert.controller;

import com.mars.missingalert.exception.AlertNotFoundException;
import com.mars.missingalert.model.Alert;
import com.mars.missingalert.model.User;
import com.mars.missingalert.repository.AlertRepository;
import com.mars.missingalert.repository.UserRepository;
import com.mars.missingalert.service.EmailService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class AlertController {

    private AlertRepository alertRepository;
    private UserRepository userRepository;

    private final EmailService emailService;

    String currentWorkingDirectory = System.getProperty("user.dir");

    String relativeFolder = "/upload/";

    @Autowired
    public AlertController(AlertRepository alertRepository, UserRepository userRepository, EmailService emailService) {
        this.userRepository = userRepository;
        this.alertRepository = alertRepository;
        this.emailService = emailService;
    }

    @PostMapping("/newalert")
    Alert newAlert(@RequestBody Alert newAlert) throws MessagingException, IOException {
        Alert newAlertDetails = alertRepository.save(newAlert);
        String city = newAlert.getLcity();
        List<User> usersInCity = userRepository.findByCity(city);
        String subject = "MARS ALERT! There's been a missing case in your city";
        String misname = newAlert.getName();
        Integer age = newAlert.getAge();
        String imagePath = currentWorkingDirectory + relativeFolder + newAlert.getImagename();

        for (User user : usersInCity) {
            String to = user.getEmail();
            String userName = user.getFname();
            String text = "Hello " + userName + ",\n"
                    + "There was a missing case in your area.\n"
                    + "Missing Person's Name : "+misname +"\n"
                    + "Missing Person's Age : "+ age +"\n";
            emailService.sendEmail(to, subject, text, imagePath);
        }

        return newAlertDetails;
    }

    @GetMapping("/alertlist")
    List<Alert> getAllAlerts(){
        return alertRepository.findAll();
    }

    @GetMapping("/getalert/{id}")
    public ResponseEntity<Alert> getAlertById(@PathVariable Integer id) {
        Optional<Alert> alertOptional = alertRepository.findById(id);
        if (alertOptional.isPresent()) {
            Alert alert = alertOptional.get();
            return ResponseEntity.ok(alert);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/myalerts")
    List<Alert> getMyAlerts(@RequestParam String username){
        List<Alert> myAlerts = alertRepository.findByUsername(username);
        return myAlerts;
    }


    @GetMapping("/alert/{id}")
    Alert getAlertByOneId(@PathVariable Integer id) {
        return alertRepository.findById(id)
                .orElseThrow(()->new AlertNotFoundException(id));
    }

    @PutMapping("/alert/{id}")
    Alert updateAlert(@RequestBody Alert newAlert, @PathVariable Integer id){
        return alertRepository.findById(id)
                .map(alert ->{
                    alert.setName(newAlert.getName());
                    alert.setAge(newAlert.getAge());
                    alert.setGender(newAlert.getGender());
                    alert.setImagename(newAlert.getImagename());
                    alert.setInfo(newAlert.getInfo());
                    alert.setLcity(newAlert.getLcity());
                    alert.setLstate(newAlert.getLstate());
                    alert.setLpincode(newAlert.getLpincode());
                    alert.setPname(newAlert.getPname());
                    alert.setPcontact(newAlert.getPcontact());
                    alert.setPemail(newAlert.getPemail());
                    return alertRepository.save(alert);
                }).orElseThrow(()-> new AlertNotFoundException((id)));
    }

    @DeleteMapping("/alert/{id}")
    String deleteUser(@PathVariable Integer id){
        if(!alertRepository.existsById(id)){
            throw new AlertNotFoundException(id);
        }
        alertRepository.deleteById(id);
        return "User with id: "+id+" has been deleted";
    }

}
