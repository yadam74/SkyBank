package com.revature.project2Data.controller;


import com.revature.project2Data.model.User;
import com.revature.project2Data.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class AuthController {

    @Autowired
    AuthService authService;

    //register (needs to make it so that you can't add same username and ssn)
    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public User AddUser(@RequestBody User newUser){
        return authService.addUser(newUser);
    }

    
}
