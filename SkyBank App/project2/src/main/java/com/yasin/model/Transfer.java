package com.yasin.model;

import java.util.Objects;

public class Transfer {

    private int amount;
    private int sendingAccount;
    private int receivingAccount;
    private String message;

    public Transfer(){}

    public Transfer(int amount, int sendingAccount, int receivingAccount, String message) {

        this.amount = amount;
        this.sendingAccount = sendingAccount;
        this.receivingAccount = receivingAccount;
        this.message = message;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getSendingAccount() {
        return sendingAccount;
    }

    public void setSendingAccount(int sendingAccount) {
        this.sendingAccount = sendingAccount;
    }

    public int getReceivingAccount() {
        return receivingAccount;
    }

    public void setReceivingAccount(int receivingAccount) {
        this.receivingAccount = receivingAccount;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Transfer transfer = (Transfer) o;
        return amount == transfer.amount && sendingAccount == transfer.sendingAccount && receivingAccount == transfer.receivingAccount && Objects.equals(message, transfer.message);
    }

    @Override
    public int hashCode() {
        return Objects.hash(amount, sendingAccount, receivingAccount, message);
    }

    @Override
    public String toString() {
        return "Transfer{" +
                "amount=" + amount +
                ", sendingAccount=" + sendingAccount +
                ", receivingAccount=" + receivingAccount +
                ", message='" + message + '\'' +
                '}';
    }
}
