//jquery

$(document).ready(function(){
        //통신하는 부분

        $.ajax({
            type: "GET",
            url: "http://192.168.10.2:8080/users",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",

            success: function (json) {
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

//                    alert("name : " + list[i].name);
                }

            }
        });
})