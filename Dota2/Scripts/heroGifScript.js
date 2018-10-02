//var a = document.querySelector("#abaddon");

function func1(hero) {
    var s = "#" + hero;
    var a = document.querySelector(s);
    a.src = "/Images/HeroesIcons/"+hero+".gif";
    a.style.transition = ".4s";
}

function func2(hero) {
    var s = "#" + hero;
    var a = document.querySelector(s);
    a.src = "https://dota2.ru/img/heroes/" + hero + "/m_icon.jpg";
}