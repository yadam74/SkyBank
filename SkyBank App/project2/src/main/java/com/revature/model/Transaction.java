package com.revature.model;

import java.sql.Timestamp;
import java.util.Objects;

public class Transaction {

    private int id;
    private Timestamp date;
    private int fromAccountId;
    private int toAccountId;
    private int totalAmount;
    private String note;

    public Transaction(){}

    public Transaction(int id, Timestamp date, int fromAccountId, int toAccountId, int totalAmount, String note){

        this.id = id;
        this.date = date;
        this.fromAccountId = fromAccountId;
        this.toAccountId = toAccountId;
        this.totalAmount = totalAmount;
        this.note = note;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    public int getFromAccountId() {
        return fromAccountId;
    }

    public void setFromAccountId(int fromAccountId) {
        this.fromAccountId = fromAccountId;
    }

    public int getToAccountId() {
        return toAccountId;
    }

    public void setToAccountId(int toAccountId) {
        this.toAccountId = toAccountId;
    }

    public int getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(int totalAmount) {
        this.totalAmount = totalAmount;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Transaction that = (Transaction) o;
        return id == that.id && fromAccountId == that.fromAccountId && toAccountId == that.toAccountId && totalAmount == that.totalAmount && Objects.equals(date, that.date) && Objects.equals(note, that.note);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, date, fromAccountId, toAccountId, totalAmount, note);
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", date=" + date +
                ", fromAccountId=" + fromAccountId +
                ", toAccountId=" + toAccountId +
                ", totalAmount=" + totalAmount +
                ", note='" + note + '\'' +
                '}';
    }
}
