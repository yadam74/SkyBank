package com.revature.project2Data.controller;

import com.revature.project2Data.model.Account;
import com.revature.project2Data.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    AccountService accountService;

    // register (needs to make it so that you can't add same username and ssn)
    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public Account AddAccount(@RequestBody Account newAccount) {
        return accountService.addAccount(newAccount);
    }

}
