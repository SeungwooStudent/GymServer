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

        //통신하는 부분

        $.ajax({
            type: "POST",
            url: "http://192.168.10.2:8080/signup",
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
            url: "http://192.168.10.2:8080/search",
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
            url: "http://192.168.10.2:8080/delete",
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
            url: "http://192.168.10.2:8080/users",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",

            success: function () {
                getUser();
            }
        });
    });

    function deleteUser(deleteId) {
            alert("delete Id : " + deleteId);
            var query = {
                id: deleteId, // key : id, value : adminId
            };


            //통신하는 부분

            $.ajax({
                type: "POST",
                url: "http://192.168.10.2:8080/delete",
                data: query,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",

                success: function (res) {
                    alert(res);
                    getUser();
                }
            });
    };

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
                        "<td><button type='button' class='btnUpdate'>update</button></td>"
                    "</tr>";
                    $('#tbody').append(str);

                }

                var eventTarget = document.getElementsByClassName('btnUpdate');
                for (var i = 0; i < eventTarget.length; i++) {
                    eventTarget[i].addEventListener('click', function () {
                        // var index = $(this).parent().parent().index();
                        var findTr = $(this).parent().parent();
                        var findId = findTr.find("td:eq(0)").text();
                        var findName = findTr.find("td:eq(1)").text();
                        var findAge = findTr.find("td:eq(2)").text();
                        var findPn = findTr.find("td:eq(3)").text();
                        $('#name').val(findTr.find("td:eq(1)").text());
                        $('#age').val(findTr.find("td:eq(2)").text());
                        $('#phone_number').val(findTr.find("td:eq(3)").text());

                        // if user click the button
                        // $("#sfdkjlhasjkdf).click(
                        // updateUser(findId, findName, findAge, findPn);

                    })
                }

            }
        });
    }
})