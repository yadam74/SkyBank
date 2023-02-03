package com.yasin.repository;

import com.yasin.model.User;

import java.sql.*;

public class UserRepository {

    // Register
    public User addUser(User user) throws SQLException {

        try (Connection connectionObject = ConnectionFactory.createConnection()) {
            String sql = "insert into project2.users (first_name, middle_initial, last_name, ssn, email, phone_number, country, state, city, zipcode, username, password) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            PreparedStatement pstmt = connectionObject.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            pstmt.setString(1, user.getFirstName());
            pstmt.setString(2, user.getMiddleInitial());
            pstmt.setString(3, user.getLastName());
            pstmt.setString(4, user.getSsn());
            pstmt.setString(5, user.getEmail());
            pstmt.setString(6, user.getPhoneNumber());
            pstmt.setString(7, user.getCountry());
            pstmt.setString(8, user.getState());
            pstmt.setString(9, user.getCity());
            pstmt.setString(10, user.getZipcode());
            pstmt.setString(11, user.getUsername());
            pstmt.setString(12, user.getPassword());

            pstmt.executeUpdate(); // returns an int

            ResultSet rs = pstmt.getGeneratedKeys();
            rs.next();
            int id = rs.getInt(1);

            return new User(id, user.getFirstName(), user.getMiddleInitial(), user.getLastName(), user.getSsn(),
                    user.getEmail(), user.getPhoneNumber(), user.getCountry(), user.getState(), user.getCity(),
                    user.getZipcode(), user.getUsername(), user.getPassword());
        }

    }

    public User getUserByUsername(String username) throws SQLException {
        try (Connection connectionObj = ConnectionFactory.createConnection()) {
            String sql = "SELECT * FROM project2.users as u WHERE u.username = ?";
            PreparedStatement pstmt = connectionObj.prepareStatement(sql);

            pstmt.setString(1, username);

            ResultSet rs = pstmt.executeQuery(); // ResultSet represents a temporary table that contains all data that
                                                 // we have
            // queried for

            if (rs.next()) { // returns a boolean indicating whether there is a record or not for the "next"
                             // row AND iterates to the next row

                int id = rs.getInt("id");
                String fn = rs.getString("first_name");
                String mi = rs.getString("middle_initial");
                String ln = rs.getString("last_name");
                String ssn = rs.getString("ssn");
                String em = rs.getString("email");
                String pn = rs.getString("phone_number");
                String ctry = rs.getString("country");
                String st = rs.getString("state");
                String cty = rs.getString("city");
                String zc = rs.getString("zipcode");
                String un = rs.getString("username");
                String pw = rs.getString("password");

                return new User(id, fn, mi, ln, ssn, em, pn, ctry, st, cty, zc, un, pw);
            } else {
                return null;
            }

        }
    }

    public User getUserBySsn(String ssn) throws SQLException {
        try (Connection connectionObj = ConnectionFactory.createConnection()) {
            String sql = "SELECT * FROM project2.users as u WHERE u.ssn = ?";
            PreparedStatement pstmt = connectionObj.prepareStatement(sql);

            pstmt.setString(1, ssn);

            ResultSet rs = pstmt.executeQuery(); // ResultSet represents a temporary table that contains all data that
                                                 // we have
            // queried for

            if (rs.next()) { // returns a boolean indicating whether there is a record or not for the "next"
                             // row AND iterates to the next row

                int id = rs.getInt("id");
                String fn = rs.getString("first_name");
                String mi = rs.getString("middle_initial");
                String ln = rs.getString("last_name");
                String ssn1 = rs.getString("ssn");
                String em = rs.getString("email");
                String pn = rs.getString("phone_number");
                String ctry = rs.getString("country");
                String st = rs.getString("state");
                String cty = rs.getString("city");
                String zc = rs.getString("zipcode");
                String un = rs.getString("username");
                String pw = rs.getString("password");

                return new User(id, fn, mi, ln, ssn1, em, pn, ctry, st, cty, zc, un, pw);
            } else {
                return null;
            }

        }
    }

    // login
    public User getUserByUsernameAndPassword(String username, String password) throws SQLException {
        try (Connection connectionObj = ConnectionFactory.createConnection()) {
            String sql = "SELECT * FROM project2.users as u WHERE u.username = ? AND u.password = ?";
            PreparedStatement pstmt = connectionObj.prepareStatement(sql);

            pstmt.setString(1, username);
            pstmt.setString(2, password);

            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {

                int id = rs.getInt("id");
                String fn = rs.getString("first_name");
                String mi = rs.getString("middle_initial");
                String ln = rs.getString("last_name");
                String ssn = rs.getString("ssn");
                String em = rs.getString("email");
                String pn = rs.getString("phone_number");
                String ctry = rs.getString("country");
                String st = rs.getString("state");
                String cty = rs.getString("city");
                String zc = rs.getString("zipcode");
                String un = rs.getString("username");
                String pw = rs.getString("password");

                return new User(id, fn, mi, ln, ssn, em, pn, ctry, st, cty, zc, un, pw);
            } else {
                return null;
            }
        }
    }

    //Update info
    public User updateUser(User user, int userId) throws SQLException {

        try (Connection connectionObject = ConnectionFactory.createConnection()) {
            String sql = "update project2.users set first_name = ?, middle_initial = ?, last_name = ?, email = ?, phone_number = ?, country = ?, state = ?, city = ?, zipcode = ? where project2.users.id = ?";

            PreparedStatement pstmt = connectionObject.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            pstmt.setString(1, user.getFirstName());
            pstmt.setString(2, user.getMiddleInitial());
            pstmt.setString(3, user.getLastName());
            pstmt.setString(4, user.getEmail());
            pstmt.setString(5, user.getPhoneNumber());
            pstmt.setString(6, user.getCountry());
            pstmt.setString(7, user.getState());
            pstmt.setString(8, user.getCity());
            pstmt.setString(9, user.getZipcode());
            pstmt.setInt(10, userId);

            pstmt.executeUpdate();

            String sql2 = "select * from project2.users where project2.users.id = ?";
            PreparedStatement pstmt2 = connectionObject.prepareStatement(sql2);
            pstmt2.setInt(1, userId);

            ResultSet rs = pstmt2.executeQuery();
        
            if (rs.next()) {

                int id = rs.getInt("id");
                String fn = rs.getString("first_name");
                String mi = rs.getString("middle_initial");
                String ln = rs.getString("last_name");
                String ssn = rs.getString("ssn");
                String em = rs.getString("email");
                String pn = rs.getString("phone_number");
                String ctry = rs.getString("country");
                String st = rs.getString("state");
                String cty = rs.getString("city");
                String zc = rs.getString("zipcode");
                String un = rs.getString("username");
                String pw = rs.getString("password");

                return new User(id, fn, mi, ln, ssn, em, pn, ctry, st, cty, zc, un, pw);
            } else {
                return null;
            }
        }
    }   
}
