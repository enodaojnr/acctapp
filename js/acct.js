function createAcct()
{
    var fname = $("#firstname").val();
    var lname = $("#lastname").val();
    var bank = $("#bank").val();
    var gender = $("#gender").val();
    var email=$("#email").val();
    var bvn = $("#BVN").val();
    
    
    var chkfn = check(fname);
    var chkln = check(lname);
    var chkbvn = check(bvn);
    var chkemail = check(email);
    //alert(bank);
    if(chkfn ==false || chkln ==false || chkbvn ==false || chkemail==false|| chkemail==false || bank == 'Select Bank')
        {
            alert("Please fill the form");
        }
    else{
    
		  $.ajax({
		   type: "POST",
		   url: "#",
		   success: function(){
               $("#img").css("display", "none");
		       $("#fade").css("display", "none");
               alert("Account Details\nAccount Name:"+fname+" "+lname+"\n"+"Account Number: 3110276453"+"\n"+"Bank:"+bank+"     \nBVN:"+bvn);
		   },
		   beforeSend:function()
		   {
               $("#img").css("display", "block");
               $("#fade").css("display", "block");
               //$("#img").css("display", "block");
               
		   }
		  });
        }
}
function check(str)
{
    if(str !== 'undefined' && str.length > 0)
        {
            return true;
        }
    return false;
}