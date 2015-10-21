


function changeText(id) {
    id.innerHTML = "<div id='thing2'> This is a new thing</div>";
}
function changeText1(id) {
    if (foodName1 == 1) {
        id.innerHTML = "<div id='foodName1'> s </div>";
    }
}

function popup(id) {
    $(document).ready(function() {
        $(".button").click(function() {

            var myNumber = 19.2;
            var myAnswer = prompt ("How many miles did you travel?");
            document.write( " Your Carbon Foot print is:" + myAnswer * myNumber + "lbs" );

        });
    });
}