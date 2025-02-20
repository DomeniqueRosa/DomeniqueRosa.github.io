const form = document.getElementById("form");
const email = document.getElementsByClassName("email");
const label = document.getElementsByTagName("label");
const container = document.getElementsByClassName("container__form");

function handleSubmit(e) {
  e.preventDefault();

  const data = {};

  for (const field of email) {
    data[field.name] = field.value;
  }
  console.log(data);
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(emailPattern.test(data.email));
  if (!emailPattern.test(data.email) || data.email === "") {
    email[0].classList.toggle("error");
    label[0].classList.toggle("error");
  } else {
    container[0].classList.toggle("hidden");
    document
      .getElementsByClassName("form__message-sucess")[0]
      .classList.toggle("active");
    document.getElementsByTagName("b")[0].innerHTML = data.email;
  }

  console.log(data.email);
}

form.addEventListener("submit", handleSubmit);
