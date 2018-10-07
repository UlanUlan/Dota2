var imgs = document.getElementsByTagName('img');


for (var i = 1; i < imgs.length; i++) {
    if (imgs[i].clientHeight > imgs[i].clientWidth) {
        imgs[i].style.height = 320 + "px";
        imgs[i].style.width = 160 + "px";
    }
    else if (imgs[i].clientHeight <= imgs[i].clientWidth) {
        imgs[i].style.height = 160 + "px";
        imgs[i].style.width = 160 + "px";
    }
}
