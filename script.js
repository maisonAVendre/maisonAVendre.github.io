function adjustSizeVideo(){
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var ratioScreen = screenWidth / screenHeight;
    var ratioVideo = 16 / 9;
    var video = document.getElementById("vid");

    if (ratioScreen > ratioVideo){
        video.style.height = screenHeight + "px";
        video.style.width = (screenHeight * ratioVideo) + "px";
    } else {
        video.style.width = screenWidth + "px";
        video.style.height = (screenWidth / ratioVideo) + "px";
    }
    
}

window.onload = adjustSizeVideo;
window.onresize = adjustSizeVideo;
