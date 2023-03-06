const questions = document.querySelectorAll(".question");
const arrows = document.querySelectorAll(".question img");
const answers = document.querySelectorAll(".answer");

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
        if (answers[i].style.display === "none" || answers[i].style.display === "") {
            questions[i].style.fontWeight = 700;
            questions[i].style.color = "black";
            questions[i].style.border = "none";
            questions[i].style.padding = "1rem 0 0 0";
            arrows[i].style.transform = "rotate(180deg)";
            answers[i].style.display = "block";
        } else {
            questions[i].style.fontWeight = 400;
            questions[i].style.color = "hsl(238, 29%, 16%)";
            questions[i].style.borderBottom = "1px solid hsl(240, 5%, 91%)";
            questions[i].style.padding = "1rem 0";
            arrows[i].style.transform = "rotate(360deg)"
            answers[i].style.display = "none"
        }
    })
}







