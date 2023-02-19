/*----------- 47-lesson -----------*/

// const content = document.querySelector("p");

// console.log(content.classList);

// content.classList.add("success");

const paras = document.querySelectorAll("p");
console.log(paras);

paras.forEach((text) => {
  if (text.textContent.includes("success")) {
    text.classList.add("success");
  }
  if (text.textContent.includes("error")) {
    text.classList.add("error");
  }
});

const heading = document.querySelector("h1");

heading.classList.toggle("success");
