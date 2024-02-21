// Adds functionality for when you click on tabs in about section
//removes active link bar from link, adds correct content in box
var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active_link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active_content");
    }
    event.currentTarget.classList.add("active_link");
    document.getElementById(tabname).classList.add("active_content");
}