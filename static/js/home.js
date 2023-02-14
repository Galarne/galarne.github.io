items = document.getElementsByClassName('point')

for (const item of items) {
    item.addEventListener("click", displayTooltip, false);
}


function displayTooltip(event) {
    if (this.classList.value.search("active") == -1) {
            const color = this.classList.value.replace(/point svg-/, "");
        
        const points = [...this.parentElement.getElementsByClassName("point")];
        points.forEach(e => e.classList.remove("active"));

        const customTooltip = document.getElementById("custom-tooltip");
        [... customTooltip.children].forEach(e => e.classList.remove("active"))
        
        this.classList.add("active");
        customTooltip.getElementsByClassName(color)[0].classList.add("active");
    // console.log("over : " + color)}
    }
}