<%-- 
    Document   : header
    Created on : Jan 19, 2013, 5:40:34 PM
    Author     : Andres
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!-- LOGO -->
<table width="100%">
    <tr>
        <td id="Logo" width="10%">
            <img src=".\\Resources\\Images\\Logo.png" onclick="toHome()">
            <br/>
        </td>
        <td width="90%" style="text-align:right">
            <%
              Boolean isSignedUp = (Boolean) session.getAttribute("isSignedUp");
              if(isSignedUp==null || !isSignedUp)
                  out.println("<a href=\"signup\">Sign Up</a> or <a href=\"login\">Log In</a>");
              else
                  out.println("<a href=\"logout\">Log Out</a>");
                        %>
        </td>
        <!-- Button Links -->
    </tr>
</table>
<table width="100%">
    <tr>
        <td width="10%">
            <button class="UpperButtons" value="Register" name="Register" action="reg">Register</button>
        </td>
        <td width="10%">
            <button class="UpperButtons" value="Community" name="Community" action="comm">Community</button>
        </td>
        <td width="10%">
            <button class="UpperButtons" value="About Us" name="About Us" action="uberuns">About Us</button>
        </td>
        <td width="60%">
        </td>
    </tr>
</table>