
function newRow (){


    var foodName = document.getElementById('foodName').value;
    var newDiv = document.createElement("h2");
    var newContent = document.createTextNode(foodName);
    newDiv.appendChild(newContent); //add the text node to the newly created div.
    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("foodName1");
    document.body.insertBefore(newDiv, currentDiv);


    var description = document.getElementById('description').value;
    var newDiv = document.createElement("h2");
    var newContent = document.createTextNode(description);
    newDiv.appendChild(newContent); //add the text node to the newly created div.
    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("foodName1");
    document.body.insertBefore(newDiv, currentDiv);

    var purchase = document.getElementById('purchase').value;
    var newDiv = document.createElement("h2");
    var newContent = document.createTextNode(purchase);
    newDiv.appendChild(newContent); //add the text node to the newly created div.
    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("foodName1");
    document.body.insertBefore(newDiv, currentDiv);

// make an if statement to make sure the date is not null and then run expire1();
    var expire = document.getElementById('expire').value;
    var newDiv = document.createElement("h2");
    var newContent = document.createTextNode(expire);
    newDiv.appendChild(newContent); //add the text node to the newly created div.
    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("foodName1");
    document.body.insertBefore(newDiv, currentDiv);




}






function expired () {
var day1 = new Date();
    var day = day1.getDate();
var month2 = new Date();
    var month1 = month2.getMonth();
    var month = month1 + 1;
var year1 = new Date();
    var year = year1.getFullYear();
var date = year + "-" + month + "-" + day;
    alert("the date is" + date);




    //Trigger function to check all dates before current date.
    while (year != 2000) {
        var month3 = 12;
        while (month3 != 0) {
            var day2 = 31;
            while (day2 != 1) {
                var date = year + "-" + month3 + "-" + day2;
                alert("the date is 2 " + date);
                var doc1 = document.getElementById("body").innerHTML;
                var doc2 = doc1.replace("<h2>" + date + "</h2>", "<h2> EXPIRED </h2>");
                document.getElementById("body").innerHTML = doc2;
                day2 = day2 - 1;
            }
            month3 = month3 -1;
        }
        year = year - 1;
    }
}

















