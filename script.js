
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

    var expire = document.getElementById('expire').value;
    var newDiv = document.createElement("h2");
    var newContent = document.createTextNode(expire);
    newDiv.appendChild(newContent); //add the text node to the newly created div.
    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("foodName1");
    document.body.insertBefore(newDiv, currentDiv);

    function expire1 () {

    var expire1 = expire.substring(0,4);
        if(expire1 <= 2015) {
            
        }

    }
expire1()
}










