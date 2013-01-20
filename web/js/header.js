/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function search(){
    window.location = "https://www.google.com/search?q="+document.getElementById("SearchTextField").value;
}
function toHome(){
    window.location = "/3dHub/index.jsp";
}
$(function() {
        $( ".UpperButtons" ).button({
        });
});
