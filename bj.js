const body = document.querySelector("body");

const IMG_NUMBER= 3;

function handelImgLoad(){
    console.log("finished Loading");
}

function paintImage(imgNumber){
const image=new Image();
image.src = `./images/${imgNumber+1}.jpg`;
image.classList.add("bgImage");
body.appendChild(image);
image.addEventListener("loadend",handelImgLoad);

}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
const randomnumber=genRandom();
paintImage(randomnumber)
}

init()
