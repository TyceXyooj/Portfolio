let imgCount = 0;
let images = ["images/profile.png", "images/profile3.png", "images/profile2.png", "images/dog.png"];
let titles = ["Welcome!", "Tyce Xiong's E-Portfolio"]
let resumeImages = ["spash.png", "ben.png","mcdill.png", "xc.png", "track.png", "math.png","parkrun.jfif","turkey.png","firehouse.jfif","spapsd.jfif","market.png"];

for (let i=0; i<3; i++) { 
    task(i); 
    } 
    
    function task(i) { 
    setTimeout(function() { 
        document.getElementById("profile").src = images[i];
    }, 2000 * i); 
    } 

function changeImage() {
    imgCount += 1;
    if(imgCount > 2){
        imgCount = 0;
    }
    if(imgCount == 0)    
        document.getElementById("profile").src = images[0];
    else if(imgCount == 1)    
        document.getElementById("profile").src = images[1];
    else if(imgCount == 2)    
        document.getElementById("profile").src = images[2];
}

function homeTextOver(){
    document.getElementById("title").innerHTML = titles[0];
}
function homeTextOff(){
    document.getElementById("title").innerHTML = titles[1];
}

function secretImg(){
    document.getElementById("profile").src = images[3];
}
function secretImgGone(){
    document.getElementById("profile").src = images[2];
}

function resumeOn(i){
    document.getElementById("profile").src = "images/" + resumeImages[i];
}
function resumeOut(i){
    document.getElementById("profile").src = "images/profile2.png";
}