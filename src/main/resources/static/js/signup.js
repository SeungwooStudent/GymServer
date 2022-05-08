//jquery
signup = {
    requestSignUp: function() {
        alert("request!!!");
    }
}
//$(document).ready(function(){
//    $('#signup').click(function() {
//
////        var name = $('#name').val();
////        var age = $('#age').val();
////        var phone_number = $('#phone_number').val();
//        alert("name : " + name);
//
//        var query = {
//            name: name, // key : id, value : adminId
//            age: age,
//            phoneNumber = phone_number
//        };
//
//        //통신하는 부분
//
////        $.ajax({
////            type: "POST",
////            url: "http://192.168.0.232:8080/signup",
////            data: query,
////            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
////
////            success: function (res) {
////                alert("response : "+ res);
//////                $(location).attr('href', 'signup.html');
////
////            }
////        });
//    });
//})