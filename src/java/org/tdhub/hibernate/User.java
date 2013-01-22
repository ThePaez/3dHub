/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package org.tdhub.hibernate;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Id;

/**
 *
 * @author Andres
 */
@Entity
@Table(name = "PERSON")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class User implements java.io.Serializable{
    @Column(name = "Username")
    String Username;
    @Column(name = "Password")
    String Password;
    @Column(name = "Email")
    String Email;
    @Column(name = "FirstName")
    String FirstName;
    @Column(name = "LastName")
    String LastName;
    @Column(name = "BirthDate")
    Date BirthDate;
    @Column(name = "Street1")
    String Street1;
    @Column(name = "Street2")
    String Street2;
    @Column(name = "City")
    String City;
    @Column(name = "State")
    String State;
    @Column(name = "Country")
    String Country;
    @Column(name = "ZIPCode")
    String ZIPCode;
    @Column(name = "DateCreated")
    Date DateCreated;
    @Id
    @Column(name = "PERSON_ID")
    int MoneyDataId;
    
    @Id
    @Column(name = "PERSON_ID")
    int DesignsCreatedId;
    
    @Id
    @Column(name = "PERSON_ID")
    int MachinesId;
    
    @Id
    @Column(name = "PERSON_ID")
    int DesignsBoughtId;
    
    /*
     * Val constructor
     */
    public User(String uname, String pass){
        Username = uname;
        Password = pass;
    }
    public User(){
    }
}
