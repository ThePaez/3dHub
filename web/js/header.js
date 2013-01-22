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
    $( "#LoginButton" )
			.button()
			.click(function() {
				$( "#dialog-form" ).dialog( "open" );
			});

        
    var name = $( "#name" ),
    password = $( "#password" ),
    allFields = $( [] ).add( name ).add( password ),
    tips = $( ".validateTips" );

    function updateTips( t ) {
        tips
        .text( t )
        .addClass( "ui-state-highlight" );
        setTimeout(function() {
            tips.removeClass( "ui-state-highlight", 1500 );
        }, 500 );
    }

    function checkLength( o, n, min, max ) {
        if ( o.val().length > max || o.val().length < min ) {
            o.addClass( "ui-state-error" );
            updateTips( "Length of " + n + " must be between " +
                min + " and " + max + "." );
            return false;
        } else {
            return true;
        }
    }

    function checkRegexp( o, regexp, n ) {
        if ( !( regexp.test( o.val() ) ) ) {
            o.addClass( "ui-state-error" );
            updateTips( n );
            return false;
        } else {
            return true;
        }
    }

    $( "#dialog-form" ).dialog({
        autoOpen: false,
        height: 300,
        width: 400,
        modal: true,
        buttons: {
            "Sign in": function() {
                var bValid = true;
                allFields.removeClass( "ui-state-error" );

                bValid = bValid && checkLength( name, "username", 3, 16 );
                bValid = bValid && checkLength( password, "password", 5, 16 );

                bValid = bValid && checkRegexp( name, /^[a-z]([0-9a-z_])+$/i, "Username may consist of a-z, 0-9, underscores, begin with a letter." );
                // From jquery.validate.js (by joern), contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
                bValid = bValid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );

                if ( bValid ) {
                    var a = String(name);
                    var b = String(password);
                    $.post("/3dHub/validate", {uname:a,pass:b}, function(data) {
                        if(data=="OK"){
                            $( "#dialog-form" ).dialog( "close" );
                        } else {
                            updateTips("Username or Password incorrect");
                        }
                    });
                }
            },
            Cancel: function() {
                $( this ).dialog( "close" );
            }
        },
        close: function() {
            allFields.val( "" ).removeClass( "ui-state-error" );
        }
    });
});

