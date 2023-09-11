
//tab click, hide and show a single tab
function tabSelection(evt, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";


    var y_axis;
    y_axis = document.getElementById("section_front_id").clientHeight;   //returns the heigth of the div
    document.getElementById("workspace_id").scrollTo({         //to scroll to the size of the y_axis
    top: y_axis,
    behavior: "smooth"
  });

  if((window.matchMedia("(orientation: portrait)").matches)){
    document.getElementById("tab").style.display = "none";
  }

  //To focus on a div to scroll with arrow keys
  document.getElementById("workspace_id").focus();
}






//Default view of one tab
document.getElementById("default").click();


var y;
    y = document.getElementById("section_front_id").clientHeight;   //returns the heigth of the div
    document.getElementById("workspace_id").scrollTo({         //to scroll to the size of the y_axis
    top: -y,
    behavior: "smooth"
  });



//For hiding and bringing forward tabs
 // to check the media, media query
 if((window.matchMedia("(orientation: landscape)").matches)){
  document.getElementById("tab").style.top = "-8vh";
  document.getElementById("workspace_id").onscroll = function() {scrollFunction()};
}






function scrollFunction() {
  var y_axis;
  y_axis = document.documentElement.clientHeight;
  if (document.getElementById("workspace_id").scrollTop > y_axis/1.5 || document.documentElement.scrollTop > y_axis/1.5) {
    document.getElementById("tab").style.top = "0";
  }
  else {
    document.getElementById("tab").style.top = "-8vh";
  }
}







function phone_menu_button(){
  var x;
  x = document.getElementById("tab");
  if(x.style.display == "none"){
    x.style.display = "block";
  }
  else{
    x.style.display = "none";
  }
}


// screen.orientation.addEventListener("change", function(e) {
//   // Do something on change
// });

// Listen for orientation changes
window.addEventListener("resize", function() {
  // Announce the new orientation number
  location.reload();
});