/** Snap to 0 function for sliders **/
function touchUp(sliderID) {
    var x = document.getElementById(sliderID);
    var returnVal = x.defaultValue;
    var currentVal = x.value;

    if (returnVal != currentVal) {
        x.value = returnVal;
    }
}
