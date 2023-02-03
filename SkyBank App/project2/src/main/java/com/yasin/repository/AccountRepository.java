package com.yasin.repository;

import com.yasin.model.Account;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class AccountRepository {

    // list all of your balances
    public List<Account> getAllBalancesforUser(int fkUserId) throws SQLException {
        try (Connection connectionObject = ConnectionFactory.createConnection()) {

            List<Account> accounts = new ArrayList<>();

            String sql = "SELECT * FROM project2.accounts WHERE fk_users_id =?";

            PreparedStatement pstmt = connectionObject.prepareStatement(sql);

            pstmt.setInt(1, fkUserId);

            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {
                int id = rs.getInt("id");
                int balance = rs.getInt("balance");
                String nickname = rs.getString("nickname");
                int fkAccountType = rs.getInt("fk_account_type");
                int fkUsersId = rs.getInt("fk_users_id");

                Account account = new Account(id, balance, nickname, fkAccountType, fkUsersId);

                accounts.add(account);
            }

            return accounts;
        }
    }

    // accounts request sent by employee
    public Account addAccount(Account accounts) throws SQLException {

        try (Connection connectionObject = ConnectionFactory.createConnection()) {
            String sql = "insert into project2.accounts (balance, nickname, fk_account_type, fk_users_id) values (?, ?, ?, ?)";

            PreparedStatement pstmt = connectionObject.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            pstmt.setFloat(1, accounts.getBalance());
            pstmt.setString(2, accounts.getNickname());
            pstmt.setInt(3, accounts.getFkAccountType());
            pstmt.setInt(4, accounts.getFkUserId());

            int numberOfRecordsAdded = pstmt.executeUpdate();

            ResultSet rs = pstmt.getGeneratedKeys();
            rs.next();
            int id = rs.getInt(1);

            return new Account(id, accounts.getBalance(), accounts.getNickname(), accounts.getFkAccountType(),
                    accounts.getFkUserId());
        }
    }
}
