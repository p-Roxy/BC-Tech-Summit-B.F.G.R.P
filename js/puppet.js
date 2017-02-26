var puppetURL = 'http://127.0.0.1';

/** Gets code from server and returns the value of the button
 * @param
 * @returns {*}
 */
function getCode() {
    $.ajax({
        url: puppetUrl + "/token/generate",
        success: function (result) {
            $("#codearea").html(result);
        },
        error: function () {
            console.log("nope");
        }
    })
}

/** Deals with the forms on the login page
 *  sends form input value to server to validate
 *  @param ()
 *  @return {*}
 */
$(document).ready(function () {
    $("#codeform").submit(function (e) {
        var text = $('input#code').val();
        $.ajax({
            type: "POST",
            url: puppetURL + "/token/validate/" + text,
            success: function (result) {
                if (result === "false") {
                    window.location.href = selection.html;
                    sessionStorage.setItem("token", text);
                } else {
                    $("#codeerror").html("Invalid Code");
                }
            },
            error: function () {
                $("#codeerror").html("Invalid Code");
            }
        });
        e.preventDefault();
    });
});


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
    $.ajax({
        url: puppetURL + "/" + token + "/" + controller + "/" + speed,
        success: function (result) {
            console.log("yep");
        },
        error: function () {
            console.log("nope");
            window.location.href = ThankYou.html
        }
    })
}
