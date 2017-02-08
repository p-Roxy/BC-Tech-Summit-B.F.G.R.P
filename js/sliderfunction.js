/** Snap to 0 function for sliders
    @param slider
        the unique slider obj intended to snap back
        Sets the value of the given slider back to 0
 **/
function snapBack(slider) {
    var returnVal = slider.defaultValue;
    var currentVal = slider.value;

    if (returnVal != currentVal) {
        slider.value = returnVal;
        sendVal(slider);
    }
}

/** Saves the value of a slider in a json file
 *  @param slider
 */
// function saveVal(slider) {
//     var controller = slider.getAttribute('id'), speed = slider.value;
//     var prequest = new XMLHttpRequest();
//     var path = "{{ url('applySpeed', controllerAdd = '0', motorAdd='0', _external=True}}";
//     path = path.replace("0/0", controller);
//     prequest.open("POST", path, false);
//     prequest.setRequestHeader("Content-Type", "application/json");
//     prequest.send(speed);
//     console.log(speed);
//     console.log(controller);
// }

function sendVal (slider) {
    var controller = slider.getAttribute('id'), speed = slider.value;
    console.log("controller: " + controller);
    console.log("speed: " + speed);
    $.ajax({
        url: "index.php/1234/" + controller + "/" + speed ,
        success: function(result) {
            console.log("yep");
        },
        error: function() {
            console.log("nope");
        }
    })        
}

