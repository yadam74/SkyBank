package com.yasin.controller;

import java.sql.SQLException;
import java.util.List;

import javax.servlet.http.HttpSession;

import com.yasin.model.Message;
import com.yasin.model.User;
import com.yasin.service.MessageService;

import io.javalin.Javalin;

public class MessageController {
    private MessageService messageService = new MessageService();

    public void mapEndpoints(Javalin app) {

        app.before(ctx -> ctx.header("Access-Control-Allow-Credentials", "true"));
        app.get("/users/{userId}/messages", (ctx) -> {

            try {
                HttpSession session = ctx.req.getSession(); // the cookie
                User user = (User) session.getAttribute("user");

                if (user != null) {
                    int userId = Integer.parseInt(ctx.pathParam("userId"));
                    List<Message> messages = messageService.getMessages(userId);
                    ctx.json(messages);
                } else {
                    ctx.result("You are not logged in!");
                    ctx.status(401);
                }
            } catch (SQLException e) {
                ctx.status(400);
                ctx.result(e.getMessage());
            }
        });

    }
}
