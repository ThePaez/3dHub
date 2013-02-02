/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function valFields(n,e,p,cp){
    var f=false;
    if(!checkRegexp(n,/^[a-zA-Zñ0-9\(\)\-\.\?\[\]\+\*\/\,"'_]{4,20}$/)){
        alert('Username has to have 4 to 20 chars and can include: ()_-.?[]+*/,\"\' ');
        f=1;
    } else if(!checkRegexp(e,/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)){
        alert('Malformed email address');
        f=1;
    } else if(p != cp){
        alert('Passwords must match');
        f=1;
        cp.value = '';
        p.value = '';
    } else if(!checkRegexp(p,/^[a-zA-Zñ0-9\(\)\-\.\?\[\]\+\*\/\,"'_]{6,20}$/)){
        alert('Password has to have 6 to 20 chars and can include: ()_-.?[]+*/,\"\' ');
        f=1;
        cp.value = '';
        p.value = '';
    }
    if(f)
        return false; 
    return true;
}

function checkRegexp( o, regexp) {
        if ( !( regexp.test( o ) ) ) {
            return false;
        } else {
            return true;
        }
    }
 
function cr(){
    var n = document.getElementById("Username").value;
    var e = document.getElementById("Email").value;
    var p = document.getElementById("Password").value;
    var cp = document.getElementById("CPassword").value;
    if(!valFields(n,e,p,cp)) return false;
    
    var d = new Date();
    var c = d.getSeconds()+d.getMinutes()+d.getMilliseconds();
    var a = c;
    var r = c*23+c%7;
    while(c>1){r=(r%c+1);c/=r;p+=r;}
    var t = p.split('');
    for(i=0;i<p.length;i++)
        t[i]=(t[i]+r)%25+'a';
    p = t.join('');
    document.getElementById("CR").value=a;
    document.getElementById("Password").value=p;
    return true;
}
$(function() {
$( "#SignUpButton" ).button({
        height:1
        });
});
var button = $( "#SignUpButton" );
button.addClass("greenParts");