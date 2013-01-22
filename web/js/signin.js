/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(function(){
    $( "#dialog" ).dialog({
            autoOpen: false,
            width: 400,
            buttons: [
                    {
                        text: "Ok",
                        click: function() {
                                $( this ).dialog( "close" );
                        }
                    },
                    {
                        text: "Cancel",
                        click: function() {
                                $( this ).dialog( "close" );
                        }
                    }
            ]
    }); 
});