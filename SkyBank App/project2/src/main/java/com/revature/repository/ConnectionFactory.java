package com.revature.repository;

import org.postgresql.Driver;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class ConnectionFactory {

    public static Connection createConnection() throws SQLException {

        Driver postgresDriver = new Driver();
        DriverManager.registerDriver(postgresDriver);
        Properties props = new Properties();

        String url = System.getenv("database_url");
        String username = System.getenv("database_username");
        String password = System.getenv("database_password");
        props.setProperty("escapeSyntaxCallMode", "callIfNoReturn");

        Connection connectionObject = DriverManager.getConnection(url, username, password);

        return connectionObject;
    }
}
