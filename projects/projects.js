
function imageViewer(path, quata){
    document.getElementById("image_place").src = path;
    document.getElementById("image_show_id").style.display = "flex";
    document.body.style.overflow = "hidden";
    document.getElementById("caption_insert").innerHTML = quata;
}

function closeme(){
    document.getElementById("image_show_id").style.display = "none";
    document.body.style.overflow = "scroll";
}
