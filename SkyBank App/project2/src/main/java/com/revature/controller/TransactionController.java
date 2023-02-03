package com.revature.controller;

import com.revature.exception.AccountDoesntExistException;
import com.revature.exception.AmountMustBeGreaterThan0Exception;
import com.revature.exception.TransferingMoneyMustIncludeYouException;
import com.revature.model.IncomeExpense;
import com.revature.model.Transaction;
import com.revature.model.Transfer;
import com.revature.model.User;
import com.revature.service.TransactionService;
import io.javalin.Javalin;

import javax.servlet.http.HttpSession;

import java.sql.SQLException;
import java.util.List;

public class TransactionController {

    private TransactionService transactionService = new TransactionService();

    public void mapEndpoints(Javalin app) {

        // Endpoint is for user to "request" transaction
        app.before(ctx -> ctx.header("Access-Control-Allow-Credentials", "true"));
        app.post("/users/{userId}/transfer", (ctx) -> {

            Transfer transferAdded = ctx.bodyAsClass(Transfer.class);

            try {
                HttpSession httpSession = ctx.req.getSession();
                User user = (User) httpSession.getAttribute("user");

                if (user != null) { // Check if logged in

                    int userId = Integer.parseInt(ctx.pathParam("userId"));
                    if (user.getId() == userId) {
                        // change this up so that it checks if that account belongs to the user, not
                        // comparing it to the user id
                        transactionService.getTransfer(transferAdded, userId);

                    } else {
                        ctx.result("You must submit transactions for yourself");
                        ctx.status(401);
                    }
                } else {
                    ctx.result("You are not logged in!");
                    ctx.status(401);
                }
            } catch (TransferingMoneyMustIncludeYouException t) {

                ctx.result(t.getMessage());
                ctx.status(400);
            } catch (AmountMustBeGreaterThan0Exception a) {
                ctx.result(a.getMessage());
                ctx.status(400);
            } catch (AccountDoesntExistException a) {
                ctx.result(a.getMessage());
                ctx.status(400);
            } catch (SQLException e) {
                ctx.result(e.getMessage());
                ctx.status(400);
            }
        });

        // Endpoint is for user to view all transactions they're involved with
        app.before(ctx -> ctx.header("Access-Control-Allow-Credentials", "true"));
        app.get("/users/{userId}/transactions", (ctx) -> {
            HttpSession httpSession = ctx.req.getSession();

            User user = (User) httpSession.getAttribute("user");

            if (user != null) { // Check if logged in

                int userId = Integer.parseInt(ctx.pathParam("userId"));
                if (user.getId() == userId) {
                    List<Transaction> transactions = transactionService.getAllTransactionsForUser(userId);
                    ctx.json(transactions);
                } else {
                    ctx.result("You are not logged in as the user you are trying to retrieve your transactions from");
                    ctx.status(401);
                }
            } else {
                ctx.result("You are not logged in!");
                ctx.status(401);
            }
        });

        app.get("/users/{userId}/expenseincome", (ctx) -> {
            HttpSession httpSession = ctx.req.getSession();

            User user = (User) httpSession.getAttribute("user");

            if (user != null) { // Check if logged in

                int userId = Integer.parseInt(ctx.pathParam("userId"));
                if (user.getId() == userId) {
                    Object[] all = transactionService.getAllIncomeExpense(userId);
                    ctx.json(all);
                } else {
                    ctx.result(
                            "You are not logged in as the user you are trying to retrieve your Income and Expenses from");
                    ctx.status(401);
                }
            } else {
                ctx.result("You are not logged in!");
                ctx.status(401);
            }
        });
    }
}
