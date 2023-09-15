package com.mars.missingalert.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Alert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    private String username;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    private String gender;
    private int age;

    public String getLcity() {
        return lcity;
    }

    public void setLcity(String lcity) {
        this.lcity = lcity;
    }

    public String getLstate() {
        return lstate;
    }

    public void setLstate(String lstate) {
        this.lstate = lstate;
    }

    public String getLpincode() {
        return lpincode;
    }

    public void setLpincode(String lpincode) {
        this.lpincode = lpincode;
    }

    private String lcity;
    private String lstate;
    private String lpincode;

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    private String info;
    private String pname;
    private long pcontact;

    public long getPcontact() {
        return pcontact;
    }

    public void setPcontact(long pcontact) {
        this.pcontact = pcontact;
    }

    public String getPemail() {
        return pemail;
    }

    public void setPemail(String pemail) {
        this.pemail = pemail;
    }

    private String pemail;

    public String getImagename() {
        return imagename;
    }

    public void setImagename(String imagename) {
        this.imagename = imagename;
    }

    private String imagename;

    public Alert() {
    }
}
