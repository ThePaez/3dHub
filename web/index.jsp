<%-- 
    Document   : index
    Created on : Jan 19, 2013, 3:19:15 PM
    Author     : Andres
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <%@include file="includes.jsp" %>
        <script src="js/index.js"></script>
        <link rel="stylesheet" type="text/css" href="css/index.css">
    </head>
    <body>
        <%@include file="header.jsp" %>
        <table  width="100%">
            <tr>
                <td width="50%">
                    <h1>Welcome to your 3D designs and printers marketplace.\n</h1>
                    <p>Sign up for an account and start buying and selling your designs 
                        and/or 3Dprinter time</p>
                </td>
                <td width="50%">
                    <form id="SignUpForm">
                        <span id="tips">All form fields are required.</span>
                        <fieldset>
                            <table>
                                <tr><td>
                                        <label for="Username">Username: </label>
                                        <input type="text" name="Username" id="Username" class="text ui-widget-content ui-corner-all" />
                                    </td></tr><tr><td>
                                        <label for="Email">Email: </label>
                                        <input type="text" name="Email" id="Email" class="text ui-widget-content ui-corner-all" />
                                    </td></tr><tr><td>
                                        <label for="Password">Password: </label>
                                        <input type="text" name="Password" id="Password" class="text ui-widget-content ui-corner-all" />
                                    </td></tr><tr><td>
                                        <label for="CPassword">Confirm Password: </label>
                                        <input type="text" name="CPassword" id="CPassword" class="text ui-widget-content ui-corner-all" />
                                    </td></tr><tr><td>
                                        <button class="UpperButtons">Sign Up</button>
                                    </td></tr>
                            </table>
                        </fieldset>
                    </form>
                </td>
            </tr>
        </table>
    </body>
</html>
