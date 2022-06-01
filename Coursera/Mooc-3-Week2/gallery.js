
function changePic(viewPic) {

    document.getElementById('imageA').innerHTML = viewPic.alt;
    document.querySelector('#imageA').style.backgroundImage = "url(" + viewPic.src + ")";

}

function recoverPic() {
    document.querySelector('#imageA').innerHTML = "Hover over an image below to display here.";

    document.querySelector('#imageA').style = "url('')";
}
