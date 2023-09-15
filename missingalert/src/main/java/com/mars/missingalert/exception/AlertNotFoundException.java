package com.mars.missingalert.exception;

public class AlertNotFoundException extends RuntimeException{
    public AlertNotFoundException(Integer id){
        super("Could not find the alert with id :"+id);
    }
}
