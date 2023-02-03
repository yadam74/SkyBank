package com.revature.project2Data.service;

import com.revature.project2Data.model.User;
import com.revature.project2Data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public User addUser(User newUser) {
        return userRepository.save(newUser);
    }
}
