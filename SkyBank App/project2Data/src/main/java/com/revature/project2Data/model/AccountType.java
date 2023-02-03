
//package com.revature.project2Data.model;
//
//import lombok.Data;
//
//import javax.persistence.*;
//import java.util.Objects;
//import java.util.Set;
//
//@Entity
//@Table(name = "account_type")
//public class AccountType {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int id;
//    private String type;
//
//    @OneToMany(mappedBy = "account_type", fetch = FetchType.LAZY,
//            cascade = CascadeType.ALL)
//    private Set<AccountType> account_type;
//
//    public AccountType(){}
//
//    public AccountType(int id, String type) {
//
//        this.id = id;
//        this.type = type;
//    }
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public String getType() {
//        return type;
//    }
//
//    public void setType(String type) {
//        this.type = type;
//    }
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        AccountType that = (AccountType) o;
//        return id == that.id && Objects.equals(type, that.type);
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(id, type);
//    }
//
//    @Override
//    public String toString() {
//        return "AccountType{" +
//                "id=" + id +
//                ", type='" + type + '\'' +
//                '}';
//    }
//}
package com.revature.project2Data.model;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "account_type")
public class AccountType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String type;

    @OneToMany(mappedBy = "account_type", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<AccountType> account_type;

    public AccountType() {
    }

    public AccountType(int id, String type) {

        this.id = id;
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        AccountType that = (AccountType) o;
        return id == that.id && Objects.equals(type, that.type);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, type);
    }

    @Override
    public String toString() {
        return "AccountType{" +
                "id=" + id +
                ", type='" + type + '\'' +
                '}';
    }
}
