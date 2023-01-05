let elInput = document.querySelector(".js-input");
let elForm = document.querySelector("form");
let elButtons = document.querySelector(".btn-group");
let elList = document.querySelector(".js-list");
let elPositiveBtn = document.querySelector(".positive");
let elNegativeBtn = document.querySelector(".negative");
let elNeutralBtn = document.querySelector(".neutral");

function enterIndex(res,node) {
    if(res.value == 1){
        node.textContent = "Positive content"; 
    }
    if(res.value == 2){
        node.textContent = "Negative content";
    }
    if(res.value == 3){
        node.textContent = "Neutral content"; 
    }
    if(res.value > 3){
       alert("Index is invalid")
    res.value = ""
    }
        res.value =""
}
enterIndex(elInput,elList)


elForm.addEventListener("click", (evt) => {
    enterIndex(elInput,elList)
  evt.preventDefault();
  if (evt.target.matches(".positive")) {
    elList.textContent = "Positive content";
    elPositiveBtn.classList.add("active");
  } else {
    elPositiveBtn.classList.remove("active");
  }
  if (evt.target.matches(".negative")) {
    elList.textContent = "Negative content";
    elNegativeBtn.classList.add("active");
  } else {
    elNegativeBtn.classList.remove("active");
  }
  if (evt.target.matches(".neutral")) {
    elList.textContent = "Neutral content";
    elNeutralBtn.classList.add("active");
  } else {
    elNeutralBtn.classList.remove("active");
  }
});
