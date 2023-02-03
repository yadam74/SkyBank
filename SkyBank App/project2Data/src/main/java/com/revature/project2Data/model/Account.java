package com.revature.project2Data.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private float balance;
    private String nickname;

//    @ManyToOne
//    @JoinColumn(name="fk_account_type", nullable = false)
//    private AccountType accountType;


    @ManyToOne
    @JoinColumn(name = "fk_user_id", nullable = false)
    private User user;

    @OneToOne(mappedBy = "fromAccount")
    private Transaction fromAccount;

    @OneToOne(mappedBy = "toAccount")
    private Transaction toAccount;

    public Account() {
    }

    public Account(int id, float balance, String nickname) {

        this.id = id;
        this.balance = balance;
        this.nickname = nickname;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getBalance() {
        return balance;
    }

    public void setBalance(float balance) {
        this.balance = balance;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Transaction getFromAccount() {
        return fromAccount;
    }

    public void setFromAccount(Transaction fromAccount) {
        this.fromAccount = fromAccount;
    }

    public Transaction getToAccount() {
        return toAccount;
    }

    public void setToAccount(Transaction toAccount) {
        this.toAccount = toAccount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Account account = (Account) o;
        
        return id == account.id && Float.compare(account.balance, balance) == 0 
                && Objects.equals(nickname, account.nickname) && Objects.equals(user, account.user) 
                && Objects.equals(fromAccount, account.fromAccount) && Objects.equals(toAccount, account.toAccount);

    }

    @Override
    public int hashCode() {
        return Objects.hash(id, balance, nickname, user, fromAccount, toAccount);
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", balance=" + balance +
                ", nickname='" + nickname + '\'' +
                ", user=" + user +
                ", fromAccount=" + fromAccount +
                ", toAccount=" + toAccount +
                '}';
    }
}