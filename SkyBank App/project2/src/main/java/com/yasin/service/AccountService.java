package com.revature.service;

import com.revature.exception.AmountMustBeGreaterThan0Exception;
import com.revature.model.Account;
import com.revature.repository.AccountRepository;

import java.sql.SQLException;
import java.util.List;

public class AccountService {

    private AccountRepository accountRepository= new AccountRepository();

    public List<Account> getAllBalancesforUser(int fkUserId) throws SQLException {
        return accountRepository.getAllBalancesforUser(fkUserId);
    }

    public Account addAccount(Account account) throws AmountMustBeGreaterThan0Exception, SQLException {
        if (account.getBalance() <= 0) {
            throw new AmountMustBeGreaterThan0Exception("The amount you enter must be greater than 0");
        }

        Account addAccount = accountRepository.addAccount(account);

        return addAccount;
    }
}
