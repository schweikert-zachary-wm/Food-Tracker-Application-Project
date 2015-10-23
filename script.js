


//function newRow()  {
  //  var foodName = document.getElementById('foodName').value;
    //  document.getElementById('newRow').innerHTML = "<h2 id='foodName2'> foodName2 goes here </h2><br><br><div id='newRow'> div  stuff</div>";
    //  document.getElementById('foodName2').innerHTML = foodName;

//}



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
}

function expired () {

}
function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\//;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}















setInterval(expired(),60000);
