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
        <table  width="100%" cellspacing="0">
            <tr height="100%">
                <td width="50%" id="Propaganda" class="SignUpForm">
                    <h1>Welcome to your 3D designs and printers marketplace.\n</h1>
                    <p>Sign up for an account and start buying and selling your designs 
                        and/or 3Dprinter time</p>
                </td>
                <td width="50%" id="Login">
                    <form>
                        <span id="tips" class="SignUpForm">All form fields are required.</span>
                        <fieldset>
                            <table width="100%">
                                <tr><td class="mainTheme">
                                        <label for="Username" class="SignUpForm">Username: </label>
                                        <input type="text" name="Username" id="Username" class="text ui-widget-content ui-corner-all" />
                                    </td></tr><tr><td class="mainTheme">
                                        <label for="Email" class="SignUpForm">Email: </label>
                                        <input type="text" name="Email" id="Email" class="text ui-widget-content ui-corner-all" />
                                    </td></tr><tr><td class="mainTheme">
                                        <label for="Password" class="SignUpForm">Password: </label>
                                        <input type="text" name="Password" id="Password" class="text ui-widget-content ui-corner-all" />
                                    </td></tr><tr><td class="mainTheme">
                                        <label for="CPassword" class="SignUpForm">Confirm Password: </label>
                                        <input type="text" name="CPassword" id="CPassword" class="text ui-widget-content ui-corner-all" />
                                    </td></tr><tr><td class="greenParts" style="text-align: right">
                                        <button class="UpperButtons" onclick="valNewUser()">Sign Up</button>
                                    </td></tr>
                            </table>
                        </fieldset>
                    </form>
                </td>
            </tr>
        </table>
    </body>
</html>
