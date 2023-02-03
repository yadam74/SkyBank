package com.revature.service;

import com.revature.exception.InvalidLoginException;
import com.revature.exception.SsnMustBeUniqueException;
import com.revature.exception.UsernameAlreadyExistsException;
import com.revature.model.User;
import com.revature.repository.UserRepository;

import java.sql.SQLException;

public class AuthService {

    private UserRepository userRepo = new UserRepository();

    public User login(String username, String password) throws SQLException, InvalidLoginException {
        User user = userRepo.getUserByUsernameAndPassword(username, password);


        if (user == null) {
            throw new InvalidLoginException("Invalid login and/or password");
        }
        return user;
    }
    public User register(User user) throws SsnMustBeUniqueException, UsernameAlreadyExistsException, SQLException {
        if (userRepo.getUserByUsername(user.getUsername()) != null) {
            throw new UsernameAlreadyExistsException("User with username " + user.getUsername() + " already exists!");
        }
        if(userRepo.getUserBySsn(user.getSsn()) != null) {
            throw new SsnMustBeUniqueException("Identity theft is not a joke Jim");
        }

        User addedUser = userRepo.addUser(user);

        return addedUser;
    }

    public User updateInfo(User newInfo, int userId) throws SQLException {
        User user = userRepo.updateUser(newInfo, userId);
        return user;
    }


}
