var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var j = 0;
var k = 0;
var l = 0;



var iconsPower = document.getElementsByClassName("heroImg");
var iconsAgility = document.getElementsByClassName("heroAgility");
var iconsIntelligence = document.getElementsByClassName("heroIntelligence");

for (var i = 0; i < iconsPower.length; i++) {
    if (i < 15) {
        iconsPower[i].style.marginLeft = b + "px";
        b += 120;
    }
    else if (i >= 15 && i < 30) {
        iconsPower[i].style.marginLeft = c + "px";
        iconsPower[i].style.marginTop = "80px";
        c += 120;
    }
    else {
        iconsPower[i].style.marginLeft = d + "px";
        iconsPower[i].style.marginTop = "160px";
        d += 120;
    }
}

for (var i = 0; i < iconsAgility.length; i++) {
    if (i < 15) {
        iconsAgility[i].style.marginLeft = e + "px";
        e += 120;
    }
    else if (i >= 15 && i < 30) {
        iconsAgility[i].style.marginLeft = f + "px";
        iconsAgility[i].style.marginTop = "80px";
        f += 120;
    }
    else {
        iconsAgility[i].style.marginLeft = g + "px";
        iconsAgility[i].style.marginTop = "160px";
        g += 120;
    }
}

for (var i = 0; i < iconsIntelligence.length; i++) {
    if (i < 15) {
        iconsIntelligence[i].style.marginLeft = h + "px";
        h += 120;
    }
    else if (i >= 15 && i < 30) {
        iconsIntelligence[i].style.marginLeft = j + "px";
        iconsIntelligence[i].style.marginTop = "80px";
        j += 120;
    }
    else if (i >= 30 && i < 45) {
        iconsIntelligence[i].style.marginLeft = k + "px";
        iconsIntelligence[i].style.marginTop = "160px";
        k += 120;
    }
    else if (i >= 45 && i < 60) {
        iconsintelligence[i].style.marginleft = l + "px";
        iconsintelligence[i].style.margintop = "240px";
        l += 120;
    }
}

//function rezak(id) {
//    var img = document.getElementById(id);
//    if (img.clientHeight > img.clientWidth) {
//        img.clientHeight = 350 + "px";
//        img.clientWidth = 200 + "px";
//        }
//        else {
//        img1.clientHeight = 180 + "px";
//        img1.clientWidth = 230 + "px";
//    }
//}


//function rezak() {
//    var imgs = document.getElementsByClassName("itemOfGallery");
//    for (var i = 0; i < imgs.length; i++) {
//        var img = document.getElementById(imgs[i].id);
//        if (img.clientHeight > img.clientWidth) {
//            img.clientHeight = 350 + "px";
//            img.clientWidth = 200 + "px";
//        }
//        else {
//            img1.clientHeight = 180 + "px";
//            img1.clientWidth = 230 + "px";
//        }
//    }
//}

function func1(hero) {
    var s = "#" + hero;
    var a = document.querySelector(s);
    a.src = "/Images/HeroesIcons/" + hero + ".gif";
    a.style.transition = ".4s";
    a.style.width = "100px";
    a.style.position = "absolute";
    //for (var i = 0; i < iconsPower.length; i++) {
    //    if (iconsPower[i].id == hero) {
    //        for (var j = 0; j < iconsPower; j++) {
    //            if (j == i) {
    //                continue;
    //            }
    //            document.querySelector(iconsPower[j].id).style.position = "absolute";
    //        }
    //    }
    //}
}

function func2(hero) {
    var s = "#" + hero;
    var a = document.querySelector(s);
    a.style.width = "112px";
    a.src = "https://dota2.ru/img/heroes/" + hero + "/m_icon.jpg";
    //a.style.position = "relative";
}



