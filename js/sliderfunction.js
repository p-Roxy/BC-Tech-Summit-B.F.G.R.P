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

/** Saves the value of a slider as a url
 *  @param slider
 */
function sendVal(slider) {
    var controller = slider.getAttribute('id'), speed = slider.value, token = sessionStorage.getItem("token");
    console.log("controller: " + controller);
    console.log("speed: " + speed);
    $.ajax({
        url: "http://puppet" + token + "/" + controller + "/" + speed,
        success: function (result) {
            console.log("yep");
        },
        error: function () {
            console.log("nope");
            window.location.href = ThankYou.html
        }
    })
}
