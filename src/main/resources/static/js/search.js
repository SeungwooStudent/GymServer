
$(document).ready(function(){
    getUser();
   $('#btnSearch').click(function() {
       var input = prompt('찾으실 회원님의 이름을 입력해주세요');

       var name = $('#name').val();

       var query = {
           name: name , // key : id, value : adminId
       };



       //통신하는 부분

       $.ajax({
           type: "POST",
           url: "http://192.168.10.2:8080/search",
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
           url: "http://192.168.10.2:8080/users",
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