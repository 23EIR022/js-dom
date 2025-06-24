const para = document.getElementById("msg");
console.log(para.innerText);

para.innerText = "This is set via JavaScript";

// const hibutton = document.querySelector("#js-button")
const hiButton=document.querySelector(".js-button");

// event listeners
hiButton.addEventListener("click",() => {
    console.log("Hi");
});  