//var imgs = document.getElementById('imageFull');

//if (imgs.height < imgs.width) {
//    imgs.style.height = 500 + "px";
//    imgs.style.width = 1000 + "px";
//}
//else if (imgs.height >= imgs.width) {
//    imgs.style.height = 700 + "px";
//    imgs.style.width = 500 + "px";
//}
 
var imgs = document.getElementsByTagName('img');

    if (imgs[1].clientHeight > imgs[1].clientWidth) {
        imgs[1].style.height = 700 + "px";
        imgs[1].style.width = 500 + "px";
    }
    else if (imgs[1].clientHeight <= imgs[1].clientWidth) {
        imgs[1].style.height = 500 + "px";
        imgs[1].style.width = 1000 + "px";
    }

function save() {
    var img = document.getElementById('#imageFull');
    var link = document.createElement('a');
    link.href = img.href;
    link.download = ('image.jpg');

    link.click();
}


