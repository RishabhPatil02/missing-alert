package com.mars.missingalert.controller;
import lombok.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class ImageUploadController {
    private String uploadFolderPath = "mars/missingalert/upload/";

    String currentWorkingDirectory = System.getProperty("user.dir");

    String relativeFolder = "/upload/";

    @PostMapping("/images")
    public ResponseEntity<String> uploadImage(@RequestParam("image") MultipartFile image,
                                              @RequestParam("customFilename") String customFilename) {
        if (!image.isEmpty()) {
            try {
                // Save the image to the server
                System.out.println(customFilename);
                String filename = customFilename + "_" + System.currentTimeMillis() + ".jpg";
                image.transferTo(new File(currentWorkingDirectory + relativeFolder+ filename));

                String imagePath = currentWorkingDirectory + relativeFolder + filename;
                return ResponseEntity.ok(filename);
            } catch (Exception e) {
                e.printStackTrace();
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error uploading the image.");
            }
        } else {
            return ResponseEntity.badRequest().body("No image selected.");
        }
    }
}

