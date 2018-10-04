var imgs = document.getElementsByTagName('img');


for (var i = 1; i < imgs.length; i++) {
    if (imgs[i].clientHeight > imgs[i].clientWidth) {
        imgs[i].style.height = 200 + "px";
        imgs[i].style.width = 100 + "px";
    }
    else {
        imgs[i].style.height = 100 + "px";
        imgs[i].style.width = 200 + "px";
    }
    //if (imgs[i].style.height < imgs[i].style.width) {
    //    imgs[i].style.height = 100 + "px";
    //    imgs[i].style.width = 100 + "px";
    //}
}
