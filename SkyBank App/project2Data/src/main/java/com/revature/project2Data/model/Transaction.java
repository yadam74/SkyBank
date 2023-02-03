package com.revature.project2Data.model;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Timestamp date;
    private int totalAmount;
    private String note;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "from_account_id")
    private Account fromAccount;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "to_account_id")
    private Account toAccount;

    public Transaction() {
    }

    public Transaction(int id, Timestamp date, int totalAmount, String note) {

        this.id = id;
        this.date = date;
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

    public Account getFromAccount() {
        return fromAccount;
    }

    public void setFromAccount(Account fromAccount) {
        this.fromAccount = fromAccount;
    }

    public Account getToAccount() {
        return toAccount;
    }

    public void setToAccount(Account toAccount) {
        this.toAccount = toAccount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Transaction that = (Transaction) o;
        return id == that.id && totalAmount == that.totalAmount && Objects.equals(date, that.date)
                && Objects.equals(note, that.note) && Objects.equals(fromAccount, that.fromAccount)
                && Objects.equals(toAccount, that.toAccount);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, date, totalAmount, note, fromAccount, toAccount);
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", date=" + date +
                ", totalAmount=" + totalAmount +
                ", note='" + note + '\'' +
                ", fromAccount=" + fromAccount +
                ", toAccount=" + toAccount +
                '}';
    }
}