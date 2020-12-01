window.onload = function(){
    document.getElementById("schoolLink").classList.add("active");
    document.getElementById("infoSchool").classList.remove("none");
}
document.getElementById("schoolLink").onclick = function(){
    this.classList.add("active");
    document.getElementById("studentLink").classList.remove("active");
    document.getElementById("parentsLink").classList.remove("active");

    document.getElementById("infoSchool").classList.remove("none");
    document.getElementById("infoParents").classList.add("none");
    document.getElementById("infoStudent").classList.add("none");
}

document.getElementById("studentLink").onclick = function() {
    this.classList.add("active");
    document.getElementById("schoolLink").classList.remove("active");
    document.getElementById("parentsLink").classList.remove("active");

    document.getElementById("infoSchool").classList.add("none");
    document.getElementById("infoParents").classList.add("none");
    document.getElementById("infoStudent").classList.remove("none");
}

document.getElementById("parentsLink").onclick = function(){
    this.classList.add("active");
    document.getElementById("schoolLink").classList.remove("active");
    document.getElementById("studentLink").classList.remove("active");

    document.getElementById("infoSchool").classList.add("none");
    document.getElementById("infoParents").classList.remove("none");
    document.getElementById("infoStudent").classList.add("none");
}
