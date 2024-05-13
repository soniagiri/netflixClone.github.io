const btns = document.querySelectorAll(".question-btn");
const questionText = document.querySelectorAll(".question-text");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {

    const question = e.currentTarget.parentElement.nextElementSibling
    question.classList.toggle("show-text")

    const plus = e.currentTarget.children[0]
    const minus=e.currentTarget.children[1]
    plus.classList.toggle("hide")
    minus.classList.toggle("minus-icon")
  });
})
