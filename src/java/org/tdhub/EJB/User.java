/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package org.tdhub.EJB;

import java.util.Date;

/**
 *
 * @author Andres
 */
public class User {

    String Username;
    String Password;
    String Email;
    String FirstName;
    String LastName;
    Date BirthDate;
    String Street1;
    String Street2;
    String City;
    String State;
    String Country;
    String ZIPCode;
    Date DateCreated;
    int MoneyDataId;
    int DesignsCreatedId;
    int MachinesId;
    int DesignsBoughtId;
    
    /*
     * Val constructor
     */
    public User(String uname, String pass){
        Username = uname;
        Password = pass;
    }
}
