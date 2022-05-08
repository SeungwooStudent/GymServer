
$(document).ready(function(){
    getUser();
   $('#btnSignup').click(function() {
       alert("signup!!");
       var name = $('#name').val();
       var age = $('#age').val();
       var phone_number = $('#phone_number').val();


       var query = {
           name: name, // key : id, value : adminId
           age: age,
           phoneNumber: phone_number
       };

       //통신하는 부분

       $.ajax({
           type: "POST",
           url: "http://192.168.219.109:8080/signup",
           data: query,
           contentType: "application/x-www-form-urlencoded; charset=UTF-8",

           success: function (res) {
               alert(res);
               getUser();
           }
       });
   });

   function getUser() {
       $.ajax({
           type: "GET",
           url: "http://192.168.219.109:8080/users",
           contentType: "application/x-www-form-urlencoded; charset=UTF-8",

           success: function (json) {
               $('#tbody').html("");
               var list = json;
               var listLen = list.length;
               for (var i = 0; i < listLen; i++) {
                   var str = "<tr>" +
                       "<td>" + list[i].id + "</td>" +
                       "<td>" + list[i].name + "</td>" +
                       "<td>" + list[i].age + "</td>" +
                       "<td>" + list[i].phoneNumber + "</td>" +
                       "</tr>";
                   $('#tbody').append(str);

               }

           }
       });
   }
})