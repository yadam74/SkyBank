package com.revature.project2Data;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.revature.project2Data.model.Account;
//import com.revature.project2Data.model.AccountType;
import com.revature.project2Data.model.Transaction;
import com.revature.project2Data.model.Transfer;
import com.revature.project2Data.model.User;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
