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
    }
}

/** Saves the value of a slider in a json file
 *  @param slider
 */
function saveVal(slider) {

}
