function validateForm()                                    
{ 
    var name = document.forms["myForm"]["name"];               
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["message"];   
   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Lütfen geçerli bir isim giriniz:";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Lütfen geçerli bir mail giriniz:"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Lütfen geçerli bir mail giriniz:"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Lütfen geçerli bir mail giriniz:"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="lütden geçerli bir mesaj giriniz:"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return true; 
}