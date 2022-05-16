// javascript -> jquery
// java -> kotlin

$(document).ready(function () {
    getUser();
    $('#btnSignup').click(function () {
        var name = $('#name').val();
        var age = $('#age').val();
        var phone_number = $('#phone_number').val();

        var query = {
            name: name, // key : id, value : adminId
            age: age,
            phoneNumber: phone_number
        };

        //통신하는 부분 (비동기통신법)

        $.ajax({
            type: "POST",
            url: "http://192.168.0.232:8080/signup",
            data: query,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",

            success: function (res) {
                alert(res);
                getUser();
            }
        });
    });

    $('#btnSearch').click(function () {
        var inputname = prompt("찾으실 회원의 이름을 입력하세요");

        var query = {
            name: inputname, // key : id, value : adminId
        };

        $.ajax({
            type: "GET",
            url: "http://192.168.0.232:8080/search",
            data: query,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",

            success: function (res) {

                $('#tbody').html("");
                var list = res;
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
    });


    $('#btnDelete').click(function () {

        var deleteUser = prompt("삭제하실 회원의 ID를 입력하세요");

        var query = {
            id: deleteUser, // key : id, value : adminId
        };



        //통신하는 부분

        $.ajax({
            type: "POST",
            url: "http://192.168.0.232:8080/delete",
            data: query,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",

            success: function (res) {
                alert(res);
                getUser();
            }
        });
    });

    $('#btnUserAll').click(function () {
        //통신하는 부분

        $.ajax({
            type: "GET",
            url: "http://192.168.0.232:8080/users",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",

            success: function () {
                getUser();
            }
        });
    });

    $('#btnUpdate0').click(function () {
    alert("0000");
        var inputId = $("#id0").html();

        var inputName = $('#name0').html();

        $("#name").val(inputName);

        $("#age").val(inputAge);

        $("#phone_number").val(inputPhone);



            var query = {
                name: inputname, // key : id, value : adminId
            };

            $.ajax({
                type: "GET",
                url: "http://192.168.0.232:8080/update",
                data: query,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",

                success: function (res) {


                }
            });
    });


    function getUser() {
        $.ajax({
            type: "GET",
            url: "http://192.168.0.232:8080/users",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",

            success: function (json) {
                $('#tbody').html("");
                var list = json;
                var listLen = list.length;
                for (var i = 0; i < listLen; i++) {

                    var str = "<tr>" +
                        "<td id='id" + i + "'>" + list[i].id + "</td>" +
                        "<td id='name" + i + "'>" + list[i].name + "</td>" +
                        "<td id='age" + i + "'>" + list[i].age + "</td>" +
                        "<td id='phone_number" + i + "'>" + list[i].phoneNumber + "</td>" +
                        "<td><button type='button' class='btn btn-primary' id='btnUpdate" + i + "'>수정</button></td>"
                        "</tr>";
                    $('#tbody').append(str);

                }
                alert($('#tbody').html());
            }
        });
    }
})