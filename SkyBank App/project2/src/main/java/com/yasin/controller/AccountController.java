package com.yasin.controller;

import com.yasin.exception.AmountMustBeGreaterThan0Exception;
import com.yasin.model.Account;
import com.yasin.model.User;
import com.yasin.service.AccountService;
import com.yasin.service.MessageService;

import io.javalin.Javalin;

import javax.servlet.http.HttpSession;
import java.util.List;

public class AccountController {

    private AccountService accountService = new AccountService();

    public void mapEndpoints(Javalin app) {

        app.before(ctx -> ctx.header("Access-Control-Allow-Credentials", "true"));

        // Endpoint is for user to view own account balance
        app.get("/users/{userId}/balance", (ctx) -> {
            HttpSession httpSession = ctx.req.getSession();

            User user = (User) httpSession.getAttribute("user");

            if (user != null) { // Check if logged in

                int userId = Integer.parseInt(ctx.pathParam("userId"));
                if (user.getId() == userId) {
                    List<Account> accounts = accountService.getAllBalancesforUser(userId);
                    ctx.json(accounts);
                } else {
                    ctx.result("You are not logged in as the user you are trying to retrieve your balance from");
                    ctx.status(401);
                }
            } else {
                ctx.result("You are not logged in!");
                ctx.status(401);
            }
        });

        // Account set up

        app.post("/users/{userId}/accounts", (ctx) -> {
            Account accountToAdd = ctx.bodyAsClass(Account.class);

            HttpSession httpSession = ctx.req.getSession();

            User user = (User) httpSession.getAttribute("user");

            if (user != null) { // Check if logged in
                int userId = Integer.parseInt(ctx.pathParam("userId"));
                if (user.getId() == userId) {
                    try {
                        accountToAdd.setFkUserId(user.getId());
                        accountToAdd = accountService.addAccount(accountToAdd);
                        ctx.json(accountToAdd);
                        ctx.status(201);
                        MessageService ms = new MessageService();
                        ms.addMessage(userId, "Created a new account: " + accountToAdd.getId());
                    } catch (AmountMustBeGreaterThan0Exception e) {
                        ctx.result(e.getMessage());
                        ctx.status(400);
                    }

                } else {
                    ctx.result("You are not logged in as the user you are trying to submit an account for");
                    ctx.status(401);
                }
            } else {
                ctx.result("You are not logged in!");
                ctx.status(401);
            }
        });
    }
}
