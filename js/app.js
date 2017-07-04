$(document).ready(function() {
    const usersApi = 'http://zadanie.laboratorium.ee/users.json';
    let activeUsers = [];
    let totalUsersCount = 0;
    let activeUsersCount = 0;
    let activeFemalesCount = 0;
    let activeMalesCount = 0;
    let activeUsersWith6MonthOffsetCount = 0;




    $.ajax({
        url: usersApi,
        type: "GET",
        dataType: "json"

    }).done(function(response) {

        // console.table(response);
        console.log(response);


        $.each(response, (i, member) => {


            if (member.active == true) {
                activeUsersCount++;
                let users = $(".active-list").find("ul").prepend($("<li></li>").text(member.last_name + "  " + member.first_name + ",   " + "Nickname: " + member.username));
                $(users).click(function() {
                    $("body").css("background-color", "pink");
                })

            };
            if (member.active == true && member.gender == "Female") {
                activeFemalesCount++;
            };
            if (member.active == true && member.gender == "Male") {
                activeMalesCount++;
            };
            if ("20/06/2016" < member.last_login) {
                activeUsersWith6MonthOffsetCount++;
            }


        })
        $(".all-members").find("span").text(response.length);
        $(".active-members").find("span").text(activeUsersCount);
        $(".active-female-members").find("span").text(activeFemalesCount);
        $(".active-male-members").find("span").text(activeMalesCount);
        $(".active-six-month-members").find("span").text(activeUsersWith6MonthOffsetCount);







    });


});
