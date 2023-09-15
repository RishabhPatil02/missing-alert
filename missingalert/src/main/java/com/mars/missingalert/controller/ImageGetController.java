package com.mars.missingalert.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.nio.file.Path;
import java.nio.file.Paths;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class ImageGetController {

    String relativeFolder = "/upload/";

    String currentWorkingDirectory = System.getProperty("user.dir");

    @GetMapping("/getimages/{imageName}")
    public ResponseEntity<Resource> getImage(@PathVariable String imageName) {
        // Load the image from the images directory
        Path imagePath = Paths.get(currentWorkingDirectory + relativeFolder + imageName);

        // Check if the image exists
        if (!imagePath.toFile().exists()) {
            return ResponseEntity.notFound().build();
        }

        // Return the image with appropriate content type
        return ResponseEntity.ok()// Change this according to your image type
                .contentType(MediaType.IMAGE_JPEG)
                .body(new FileSystemResource(imagePath));
    }
}
