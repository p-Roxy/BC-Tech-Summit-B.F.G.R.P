/** Function to deal with login area */
function buttonHelper(bID) {
    var button = getParentID(bID);
    var group;
    if (bID.id === "bgroup") {
        group = document.getElementById("group");
    } else if (bID.id === "badmin") {
       group = document.getElementById("admin");
    } else {
        group = document.getElementById("buttons");
    }
    button.style.display = 'none';
    group.style.display = 'block';
}

function getParentID(obj) {
    while (!obj.id || obj.tagName != "DIV") {
        obj = obj.parentNode;
    }
    return obj;
}

