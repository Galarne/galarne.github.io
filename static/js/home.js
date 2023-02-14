items = document.getElementsByClassName('point')

for (const item of items) {
    item.addEventListener("mouseover", displayTooltip, false);
    item.addEventListener("mouseout", hideTooltip, false);
}


function displayTooltip(event) {
    var color = this.classList.value.replace(/point svg-/, "");
    console.log("over : " + color)
}

function hideTooltip(event) {
    console.log("out")
}