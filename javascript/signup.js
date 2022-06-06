     
     var female_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo8PcCxh7tT6MDFhJi2UaAT9SeciHqvZuaWtGg0y0-yyP8rMDz";
     var male_img = "https://visualpharm.com/assets/217/Life%20Cycle-595b40b75ba036ed117d9ef0.svg";
     
     
     $( document ).ready(function() {
         
         set_sex_img();
      
         set_who_message();
         
         
         $("#input_sex").change(function() {
            
             set_sex_img();
             set_who_message();
         });
       
   
         $("#first_name").keyup(function() {

             set_who_message();
             
            
         });
     
      
         $("#last_name").keyup(function() {
 
             set_who_message();
             
            
         });
   
    
     
    
     function set_sex_img() {
         var sex = $("#input_sex").val();
         if (sex == "Mr.") {
        
             $("#img_sex").attr("src", male_img);
         } else {

             $("#img_sex").attr("src", female_img);
         }
     }
     
    
     function set_who_message() {
         var sex = $("#input_sex").val();
         var first_name = $("#first_name").val();
         var last_name = $("#last_name").val();
         
         if (validation_name(first_name).code == 0 || 
             validation_name(last_name).code == 0) {
           
           
             $("#who_message").html("Who are you ?");
         } else {
            
           
             $("#who_message").html(sex+" "+first_name+" "+last_name);
         }
     }



    











    
     
   
     function validation_name (val) {
         if (val.length < 2) {
            
             return {"code":0, "message":"The name is too short."};
         }
         if (!val.match("^[a-zA-Z\- ]+$")) {
        
           
             return {"code":0, "message":"The name use non-alphabetics chars."};
         }

     
        
         return {"code": 1};
     }

    
    

     });
     

   


    

    function show(){
     var pswrd = document.getElementById('spass');
     var cpswrd = document.getElementById('spassconf');
     var icon = document.querySelector('.fas');
     if (pswrd.type === "password") {
      pswrd.type = "text";
      cpswrd.type="text";
  
      icon.style.color = "#87ceeb";
     }else{
      pswrd.type = "password";
      cpswrd.type="password";
      icon.style.color = "grey";
     }
    }
