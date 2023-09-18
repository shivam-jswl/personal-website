index = -1;

function imageViewer(path){
    document.body.style.overflow = "hidden";

    // get all the childs of tag div and class image_selector
    allStates = document.querySelectorAll('div.image_selector');

    // getting current index of the image/video opened
    index = -1;
    for(let i =0; i < allStates.length; i++){
        if(allStates[i].getElementsByTagName('img')[0].getAttribute("src")== path){
            index = i;
            break;
        }
    }

    // get the caption from note attribute of current child
    quata= allStates[index].getElementsByTagName('div')[0].getAttribute('note');

    if(allStates[index].getElementsByTagName('img')[0].getAttribute("id") == "is_video"){
        document.getElementById("video_place").src = path;
        document.getElementById("caption_insert_vid").innerHTML = quata;
        document.getElementById("video_show_id").style.display = "flex";
    }

    else{
        document.getElementById("image_place").src = path;
        document.getElementById("caption_insert").innerHTML = quata;
        document.getElementById("image_show_id").style.display = "flex";
    }
}

// X to close the opened image or video
function closeme(){
    document.getElementById("image_show_id").style.display = "none";
    document.getElementById("video_show_id").style.display = "none"
    document.body.style.overflow = "scroll";
}





// Image left right movement
function move_img(i){

    // getting all the childs that are with element div 
    allStates = document.querySelectorAll('div.image_selector');

    // exit if trying to go over the edge when going left ot right
    if(index <= 0 & i <0)
        return;
    else if(index >= allStates.length-1 & i>0)
        return;
    index = index + i;

    // get path from src attribute
    path_new = allStates[index].getElementsByTagName('img')[0].getAttribute("src")

    // getting node attribute's value
    quata= allStates[index].getElementsByTagName('div')[0].getAttribute('note');
    document.body.style.overflow = "hidden";

    //If its a video
    if(allStates[index].getElementsByTagName('img')[0].getAttribute("id")== "is_video"){
        document.getElementById("video_place").src = path_new;
        document.getElementById("video_show_id").style.display = "flex";
        document.getElementById("image_show_id").style.display = "none";
        document.getElementById("caption_insert_vid").innerHTML = quata;
    }

    // if its an image
    else{
        document.getElementById("image_place").src = path_new;
        document.getElementById("image_show_id").style.display = "flex";
        document.getElementById("video_show_id").style.display = "none";
        document.getElementById("caption_insert").innerHTML = quata;
        document.getElementById("video_place").pause();        
    }
}
