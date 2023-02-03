package com.revature.repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import com.revature.model.Message;

public class MessageRepository {
    public List<Message> getMessages(int userId) throws SQLException {
        try (Connection connectionObj = ConnectionFactory.createConnection()) {
            List<Message> messages = new ArrayList<>();
            String sql = "Select * from project2.messages where fk_user_id = ? order by postedTime desc limit 30";
            PreparedStatement pstmt = connectionObj.prepareStatement(sql);

            pstmt.setInt(1, userId);
            ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                int id = rs.getInt("id");
                Timestamp ts = rs.getTimestamp("postedTime");
                String message = rs.getString("message");
                Message mess = new Message(id, userId, ts, message);
                messages.add(mess);
            }
            return messages;
        }
    }

    public Message addMessage(int userId, String message) throws SQLException {
        try (Connection connectionObj = ConnectionFactory.createConnection()) {
            String sql = "insert into project2.messages (fk_user_id, message) values(?, ?)";
            PreparedStatement pstmt = connectionObj.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            pstmt.setInt(1, userId);
            pstmt.setString(2, message);

            int numberOfRecordsAdded = pstmt.executeUpdate();

            ResultSet rs = pstmt.getGeneratedKeys();
            rs.next();
            int id = rs.getInt("id");
            Timestamp ts = rs.getTimestamp("postedTime");
            String m = rs.getString("message");
            Message mess = new Message(id, userId, ts, m);
            return mess;
        }

    }
}
