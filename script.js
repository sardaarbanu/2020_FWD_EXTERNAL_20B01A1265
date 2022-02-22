let b=document.getElementById("btn");
b.addEventListener("click",function({


 let name=document.getElementById("name");
    if(name.value===""){
        document.getElementById("nameid").innerHtml="please enter your Name";
     }
    else
    {
     document.getElementById("nameid").innerHtml=" ";
    }

     a=/^[a-zA-Z0-9]+$/;
      pass=document.getElementById("pass");
       if(pass.match==(/[a-z]/g) && pass.match==(/[A-Z]/g) && pass.match==(/[0-9]/g) && pass.length>=10)
          {
                document.getElementById("passid").innerHtml="";

          }
         else{
               document.getElementById("passid").innerHtml="password should contain 10 characters";
            }

       phonenumber=document.getElementById("phno");
             if(phonenumber.match==(/[0-9]/g)){
                 document.getElementById("phoneno").innerHtml="";

               }
              else{
                   document.getElementById("phoneno").innerHtml="phonenumber shoulde contains 10 digits";
                  }
              
      