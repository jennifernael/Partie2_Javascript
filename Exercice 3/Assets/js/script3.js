var image = document.getElementById('img');

image.onclick = function enlarge(){
    image.src = "Assets/img/DSC05774.JPG";
var width = image.clientWidth;
    image.style.width = (width + 20) + "px";
}






