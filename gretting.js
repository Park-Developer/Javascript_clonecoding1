const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN); 
    greeting.innerText =`Hello ${text}`;
} 

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue=input.value;
    //console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);

}


function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}


function loadName(){
 const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        console.log("asd")
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }
}

function init(){
    console.log("startss");

    loadName();
}


init();

