const navToggle = document.querySelector('.navToggle');
const navLinks = document.querySelectorAll('.nav__Link');

function showContent(pageID){
    console.log(pageID);
}

function initListeners(){
    
    console.log(navToggle);
    $(window).on("hashchange", function(e){
        let hashTag = window.location.hash;
        let pageID = hashTag.replace("#/", "");
        // console.log(pageID);

        MODEL.route(pageID);
    })


    navToggle.addEventListener('click', () => {
        document.getElementById('nav').classList.toggle('navOpen');
        console.log("class added");
    });
    navLinks.forEach(link => {
        link.addEventListener('click', (e) =>{
            document.getElementById('nav').classList.remove('navOpen');
        })
    })
}

function show_login(){
    // MODEL.route("login");
    // console.log(window.location.pathname + "#/login");
    // root from in-info-web4.informatics.edu /~username/class-folder/Jungle_Cook/index.html#login
    window.location.href = "~hicksjc/N315/Jungle_Cook/index.html#/login";
}

$(document).ready(function(){
    initListeners();
    // root from in-info-web4.informatics.edu /~username/class-folder/Jungle_Cook/index.html#home
    window.location.href = "~hicksjc/N315/Jungle_Cook/index.html#/home";
    MODEL.route("home", showContent);
})