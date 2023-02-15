const clickables = [...document.getElementsByClassName('point'),
                    ...document.querySelectorAll('.custom-tooltip > div > h2')];

clickables.forEach(e => e.addEventListener("click", displayTooltip, false));


function displayTooltip() {
    if (this.classList.value.search("active") == -1) {
        const node = this.classList.value != "" ? this : this.parentNode;
        const color = node.classList.value.replace(/point svg-/, "");

        const customTooltip = document.getElementById("custom-tooltip");
        const activeElements = [...node.parentElement.getElementsByClassName("point"),
                                ...customTooltip.children];
        activeElements.forEach(e => e.classList.remove("active"));

        node.classList.add("active");
        customTooltip.getElementsByClassName(color)[0].classList.add("active");
        customTooltip.querySelector(".active > h2")[0].scrollIntoView(false);
    }
}