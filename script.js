<<<<<<< HEAD

$(window).scroll(function () {
    var sc = $(window).scrollTop();
    if (sc > 100) {
        $("#header-sroll").addClass("small")
    } else {
        $("#header-sroll").removeClass("small")
    }
});

function newRow (){
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1= row.insertCell(0);
    var cell2= row.insertCell(1);
    var cell3= row.insertCell(2);
    var cell4= row.insertCell(3);

    var foodName = document.getElementById("foodName").value;
=======
function newRow (){
    var foodName = document.getElementById('foodName').value;
    var newDiv = document.createElement("h2");
>>>>>>> deb29c8e2703343c565e4f8339daf883872ec38b
    var newContent = document.createTextNode(foodName);
    cell1.appendChild(newContent);


    var description = document.getElementById("description").value;
    var newContent2 = document.createTextNode(description);
    cell2.appendChild(newContent2);

    var purchase = document.getElementById("purchase").value;
    var newContent3 = document.createTextNode(purchase);
    cell3.appendChild(newContent3);

<<<<<<< HEAD
    var expire = document.getElementById("expire").value;
    var newContent4 = document.createTextNode(expire);
    cell4.appendChild(newContent4);

=======
// make an if statement to make sure the date is not null and then run expire1();
    var expire = document.getElementById('expire').value;
    var newDiv = document.createElement("h2");
    var newContent = document.createTextNode(expire);
    newDiv.appendChild(newContent); //add the text node to the newly created div.
    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("foodName1");
    document.body.insertBefore(newDiv, currentDiv);
}
>>>>>>> deb29c8e2703343c565e4f8339daf883872ec38b


}





function expired () {
    var day1 = new Date();
    var day = day1.getDate();
    var month2 = new Date();
    var month1 = month2.getMonth();
    var month = month1 + 1;
    var year1 = new Date();
    var year = year1.getFullYear();
    var year2 = year1.getFullYear();

    while (year != 2022) {
        if (month == 13) {
            alert("the date being found2 is " + date4);
            month = 1;
        }
        if (month != 13) {
            alert("there is not 13 months")
        }
        while (month != 13) {

            if (day == 32) {
                alert("the date being found is " + date4);
                day = 1;
            }
            if (day != 32) {
                alert("the 32 is an impossible date")
            }
            while (day != 32) {
                day = "" + day;
                if (day.length == 1 ) {
                    day = "0" + day;
                }
                date4 = year + "-" + month + "-" + day;
                var doc1 = document.getElementById("body").innerHTML;
                var doc2 = doc1.replace("<h2>" + date4 + "</h2>", "<h2> " + date4 +  " </h2>");
                document.getElementById("body").innerHTML = doc2;
                day = day - 1;
                day = day + 2;
            }
            month = month +1;
        }
        year = year + 1;
    }


<<<<<<< HEAD
function expired () {

    var day1 = new Date();
    var day = day1.getDate();
    var month2 = new Date();
    var month1 = month2.getMonth();
    var month = month1 + 1;
    var year1 = new Date();
    var year = year1.getFullYear();
    var year2 = year1.getFullYear();

    while (year != 2022) {

        if (month == 13) {
            month = 1;
        }
        if (month != 13) {
        }
        while (month != 13) {

            if (day == 32) {
                day = 1;
            }
            if (day != 32) {
            }
            while (day != 32) {
                day = "" + day;
                if (day.length == 1 ) {
                    day = "0" + day;
                }
                date4 = year + "-" + month + "-" + day;
                var doc3 = document.getElementById("data").innerHTML;
                var doc4 = doc3.replace("<td>" + date4 + "</td>", "<td>." + date4 + "</td>");
                document.getElementById("data").innerHTML = doc4;
                day = day - 1;
                day = day + 2;
            }
            month = month +1;
        }
        year = year + 1;
    }



    //Trigger function to check all dates before current date.

    while (year2 != 2013) {
        var month3 = 12;
        while (month3 != 0) {
            var day2 = 31;
            while (day2 != 0) {
                day2 = "" + day2;
                if (day2.length == 1 ) {
                    day2 = "0" + day2;
                }
                var date2 = year2 + "-" + month3 + "-" + day2;
                var doc1 = document.getElementById("data").innerHTML;
                var doc2 = doc1.replace("<td>" + date2 + "</td>", "<td id='haha'> EXPIRED </td>");
                document.getElementById("data").innerHTML = doc2;
                day2 = day2 - 1;
            }
            month3 = month3 -1;
        }
        year2 = year2 - 1;
    }
=======

    //Trigger function to check all dates before current date.

    while (year2 != 2013) {
        var month3 = 12;
        while (month3 != 0) {
            var day2 = 31;
            while (day2 != 0) {
                day2 = "" + day2;
                if (day2.length == 1 ) {
                    day2 = "0" + day2;
                }
                var date2 = year2 + "-" + month3 + "-" + day2;
                var doc1 = document.getElementById("body").innerHTML;
                var doc2 = doc1.replace("<h2>" + date2 + "</h2>", "<h2> EXPIRED </h2>");
                document.getElementById("body").innerHTML = doc2;
                day2 = day2 - 1;
            }
            month3 = month3 -1;
        }
        year2 = year2 - 1;
    }



}
>>>>>>> deb29c8e2703343c565e4f8339daf883872ec38b



}
