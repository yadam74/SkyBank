package com.revature.model;

import java.sql.Timestamp;
import java.util.Objects;

public class IncomeExpense {
    private int id;
    private Timestamp date;
    private String entity;
    private float totalAmount;
    private int fkAccountId;

    public IncomeExpense(){}

    public IncomeExpense(int id, Timestamp date, String entity, float totalAmount, int fkAccountId) {

        this.id = id;
        this.date = date;
        this.entity = entity;
        this.totalAmount = totalAmount;
        this.fkAccountId = fkAccountId;
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

    public String getEntity() {
        return entity;
    }

    public void setEntity(String entity) {
        this.entity = entity;
    }

    public float getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(float totalAmount) {
        this.totalAmount = totalAmount;
    }

    public int getFkAccountId() {
        return fkAccountId;
    }

    public void setFkAccountId(int fkAccountId) {
        this.fkAccountId = fkAccountId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        IncomeExpense that = (IncomeExpense) o;
        return id == that.id && Float.compare(that.totalAmount, totalAmount) == 0 && fkAccountId == that.fkAccountId && date.equals(that.date) && entity.equals(that.entity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, date, entity, totalAmount, fkAccountId);
    }

    @Override
    public String toString() {
        return "IncomeExpense{" +
                "id=" + id +
                ", date=" + date +
                ", entity='" + entity + '\'' +
                ", totalAmount=" + totalAmount +
                ", fkAccountId=" + fkAccountId +
                '}';
    }
}