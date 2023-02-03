package com.revature.service;

import java.sql.SQLException;
import java.util.List;

import com.revature.model.Message;
import com.revature.repository.MessageRepository;

public class MessageService {

    private MessageRepository messageRepo = new MessageRepository();

    public List<Message> getMessages(int userId) throws SQLException {
        List<Message> messages = messageRepo.getMessages(userId);
        return messages;
    }

    public Message addMessage(int userId, String message) throws SQLException {
        return messageRepo.addMessage(userId, message);
    }
}
