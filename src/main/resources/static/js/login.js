$(document).ready(function(){
    $('button').click(function () {
        var adminId = $('#id').val(); //val : text바 안에 값을 가져오겠다
        var adminpwd = $('#pwd').val();
        var query = {
            id: adminId, // key : id, value : adminId
            pwd: adminpwd
        };

        //통신하는 부분
        $.ajax({
            type: "GET",
            url: "http://172.30.1.10:8080/admin_login",
            data: query,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            success: function (res) {
                alert("response : "+ res);
            }
        });
    });
})