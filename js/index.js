
// Publications section display animation after hover in the section
var publications = document.getElementById("publications");
publications.addEventListener("mouseenter", function () {
    this.style.maxHeight = this.scrollHeight + "px";
});
publications.addEventListener("mouseleave", function () {
    this.style.maxHeight = null;
});
