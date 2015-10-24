
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

    expire1();




}





function expire1 () {


    var expire = document.getElementById('expire').value;
    var expire2 = expire.substring(0,4);
    if (expire2 == 2015) {

        expire1a();
    }
    if (expire2 > 2015) {
    var newDiv = document.createElement("h2");
        var newContent = document.createTextNode(expire);
        newDiv.appendChild(newContent); //add the text node to the newly created div.
        // add the newly created element and its content into the DOM
        var currentDiv = document.getElementById("foodName1");
        document.body.insertBefore(newDiv, currentDiv);
}
    if (expire2 < 2015){
        var newDiv = document.createElement("h4");
        var newContent = document.createTextNode(expire);
        newDiv.appendChild(newContent); //add the text node to the newly created div.
        // add the newly created element and its content into the DOM
        var currentDiv = document.getElementById("foodName1");
        document.body.insertBefore(newDiv, currentDiv);
    }

}
function expire1a() {
    var expire = document.getElementById('expire').value;
    var expire1a = expire.substring(5,7);
    var d = new Date();
    var d2 = d.getMonth();
    var today = d2 + 1;
    if ( today < expire1a) {
        alert("the food is not expired");
        var newDiv = document.createElement("h2");
        var newContent = document.createTextNode(expire);
        newDiv.appendChild(newContent); //add the text node to the newly created div.
        // add the newly created element and its content into the DOM
        var currentDiv = document.getElementById("foodName1");
        document.body.insertBefore(newDiv, currentDiv);
        // alert will only trigger if this month is less than the month put in.
        // example: april comes before may. (if this month was april and it expired in may)
    }
    if (today >= expire1a) {
        expire1b()
    }
}
 function expire1b () {
     var expire = document.getElementById('expire').value;
     var expire1b = expire.substring(8,10);
     var d =  new Date();
     var today = d.getDate();
     if(today < expire1b){
         alert("food is not expired 2");
         //alert will only trigger if month entered and current month are the same.
         var newDiv = document.createElement("h3");
         var newContent = document.createTextNode(expire);
         newDiv.appendChild(newContent); //add the text node to the newly created div.
         // add the newly created element and its content into the DOM
         var currentDiv = document.getElementById("foodName1");
         document.body.insertBefore(newDiv, currentDiv);
     }
     if (today >= expire1b) {
         alert("food is expired 2");
         var newDiv = document.createElement("h4");
         var newContent = document.createTextNode(expire);
         newDiv.appendChild(newContent); //add the text node to the newly created div.
         // add the newly created element and its content into the DOM
         var currentDiv = document.getElementById("foodName1");
         document.body.insertBefore(newDiv, currentDiv);

     }

 }


