let form = document.querySelector(".form");
let namE = document.querySelector("#name");
let mail = document.querySelector("#mail");
let subject = document.querySelector("#subject");
let description = document.querySelector("#description");
let submit = document.querySelector(".submit_btn");

let nameError = document.querySelector(".nameError");
let mailError = document.querySelector(".mailError");
let subjectError = document.querySelector(".subjectError");
let descriptionError = document.querySelector(".descriptionError");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (namE) {
    nameError.classList.add("err");
    if (namE.value === "") {
      nameError.innerHTML = "Name must be required";
    } else if (namE.value.length < 6) {
      nameError.innerHTML = "Name must be more than 6 letters";
    } else {
      nameError.innerHTML = "";
    }
  }

  if (mail) {
    var mailFormat = `${mail.value.slice(0, -10)}@gmail.com`;
    mailError.classList.add("err");
    if (mail.value === "") {
      mailError.innerHTML = "Mail required";
    } else if (mail.value !== mailFormat) {
      mailError.innerHTML = "mail must be formated";
    } else {
      mailError.innerHTML = "";
    }
  }

  if (subject) {
    subjectError.classList.add("err");
    if (subject.value === "") {
      subjectError.innerHTML = "Required subject value";
    } else {
      subjectError.innerHTML = "";
    }
  }

  if (description) {
    descriptionError.classList.add("err");
    if (description.value === "") {
      descriptionError.innerHTML = "Description Required";
    } else if (description.value.length < 10) {
      descriptionError.innerHTML = "Description must be more than 10 letters";
    } else {
      descriptionError.innerHTML = "";
    }
  }

  if(nameError.innerHTML==='' && mailError.innerHTML==='' && subjectError.innerHTML==='' && descriptionError.innerHTML===''){
    setTimeout(()=>{
        alert(`Name : ${namE.value}, Mail : ${mail.value}, Subject : ${subject.value}, Description : ${description.value}`)
    },1000)
  }
});