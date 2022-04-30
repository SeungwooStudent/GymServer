$(document).ready(function(){
    $('button').click(function () {
        var id = $('#id').val();
        var pwd = $('#pwd').val();
        alert("id : " + id);
        alert("pwd : " + pwd);
//        var query = {
//            adminId: id,
//            adminPwd: pwd
//        };
//        $.ajax({
//            type: "GET",
//            url: "/login",
//            data: query,
//            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
//            success: function (json) {
//                alert("success");
//            }
//
//        });
    });
})