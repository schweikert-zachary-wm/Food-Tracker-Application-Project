


//function newRow()  {
  //  var foodName = document.getElementById('foodName').value;
    //  document.getElementById('newRow').innerHTML = "<h2 id='foodName2'> foodName2 goes here </h2><br><br><div id='newRow'> div  stuff</div>";
    //  document.getElementById('foodName2').innerHTML = foodName;

//}



function newRow (){

    var foodName = document.getElementById('foodName').value;
    var newDiv = document.createElement("h2 id='foodName1");
    var newContent = document.createTextNode(foodName);
    newDiv.appendChild(newContent); //add the text node to the newly created div.

    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("foodName1");
    document.body.insertBefore(newDiv, currentDiv);

}