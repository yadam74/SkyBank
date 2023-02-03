package com.revature.model;

import java.sql.Timestamp;

public class Message {
    private int id;
    private int userId;
    private Timestamp postDate;
    private String message;

    public Message(int id, int userId, Timestamp postDate, String message) {
        this.id = id;
        this.userId = userId;
        this.postDate = postDate;
        this.message = message;
    }

    @Override
    public String toString() {
        return "Message [id=" + id + ", userId=" + userId + ", postDate=" + postDate + ", message=" + message + "]";
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public Timestamp getPostDate() {
        return postDate;
    }

    public void setPostDate(Timestamp postDate) {
        this.postDate = postDate;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
