package com.revature.service;

import com.revature.exception.AccountDoesntExistException;
import com.revature.exception.AmountMustBeGreaterThan0Exception;
import com.revature.exception.TransferingMoneyMustIncludeYouException;
import com.revature.model.Account;
import com.revature.model.IncomeExpense;
import com.revature.model.Transaction;
import com.revature.model.Transfer;
import com.revature.repository.TransactionRepository;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class TransactionService {

    // will have to add exceptions if balance is less than 0, or if account doesn't
    // exist
    private TransactionRepository transactionRepository = new TransactionRepository();

    public void transfer(Transfer t, int userId) throws SQLException {

        transactionRepository.transfer(t, userId);
    }

    public List<Transaction> getAllTransactionsForUser(int userId) throws SQLException {
        List<Transaction> transactions = transactionRepository.getAllTransactionsForUser(userId);
        return transactions;
    }

    public Account getAccountsOfUser(int fkUserId) throws TransferingMoneyMustIncludeYouException, SQLException {
        Account accounts = transactionRepository.getAccountsOfUser(fkUserId);
        return accounts;
    }

    public void getTransfer(Transfer t, int userId) throws TransferingMoneyMustIncludeYouException, SQLException,
            AmountMustBeGreaterThan0Exception, AccountDoesntExistException {

        ArrayList<Integer> accounts = transactionRepository.getAccounts(userId);
        if (accounts.contains(t.getReceivingAccount()) && accounts.contains(t.getSendingAccount())) {
            if (t.getAmount() <= 0) {
                throw new AmountMustBeGreaterThan0Exception("Transfer amount must be greater than zero");
            } else if (!accounts.contains(t.getSendingAccount())) {
                throw new TransferingMoneyMustIncludeYouException("This account doesn't belong to you");
            } else {
                transactionRepository.transfer(t, userId);
            }
        } else {
            throw new AccountDoesntExistException("Account doesn't exist!");
        }

    }

    public Object[] getAllIncomeExpense(int userId) throws SQLException {
        Object[] all = transactionRepository.getIncomeExpenses(userId);
        return all;
    }
}
