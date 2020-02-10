let url = window.location.pathname;
console.log(url)
window.onload = function () {
    if (url == "/quiz.html") {
        this.show(0);
    } else if (url == "/department.html") {
        this.showCat();
    }

}
let category = [
    {
        cat: "UI"
    },
    {
        cat: "Web Design"
    }
    
];
let questions = [
    {
        id: 1,
        cat: "UI",
        post: "Senior UI/Designer",
        question: "What is the full form of Ram?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        cat: "Web Design",
        post: "Senior Developer",
        question: "What is the full form of CPU?",
        answer: "Central Processign Unit",
        options: [
            "Central Program Unit",
            "Central Processign Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        id: 3,
        cat: "Web Design",
        post: "Junior Developer",
        question: "What is the full form of CPU?",
        answer: "Central Processign Unit",
        options: [
            "Central Program Unit",
            "Central Processign Unit",
            "Central Preload Unit",
            "None of these"
        ]
    }
];
//console.log(questions[0].cat);
function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome-form"]["name"].value;
    //store user name
    sessionStorage.setItem("name", name);

    location.href = "department.html";
    //console.log(name);
}
function quizInit(){
    location.href = "quiz.html";
    let user_postAnswer = document.querySelector("li.option.active").innerHTML;

    sessionStorage.setItem("user_postAnswer", user_postAnswer )
    
    
    
}
let question_count = 0;
let point = 0;
let ql = questions.length;
sessionStorage.setItem("ql", ql);
function next() {
    let user_answer = document.querySelector("li.option.active").innerHTML
    // Check answer by the user    
    if (user_answer == questions[question_count].answer) {
        point += 10;
        //console.log("right Answer");
        sessionStorage.setItem("points", point);
    } else {
        point;
        sessionStorage.setItem("points", point);
    }

    if (question_count == questions.length - 1) {
        location.href = "result.html";
        return;

    }

    question_count++;
    //console.log(user_answer);
    show(question_count);
}
function nextPost() {
    let user_catAnswer = document.querySelector("li.option.active").innerHTML;    
    questions = questions.filter(function (item) {
        return item.cat.includes(user_catAnswer);
    });
    //console.log(questions);
    let user_post = "";    
    for (let p = 0; p < questions.length; p++) {
        user_post += `<li class="option">${questions[p].post}</li>`;
        //alert(questions[d].cat);
        //console.log(depHtml);        
    }

    document.getElementById("department").innerHTML = `<h2>Select Post</h2>
    <ul class="option-group"> ${user_post}</ul>
    <button class="btn-next" onclick="quizInit()">Next</button>`;
    toggleActive();
    
}
//Show department
function showCat() {
    let department = document.getElementById("department");
    //console.log(questions.length);
    let depHtml = ""
    for (let d = 0; d < category.length; d++) {
        depHtml += `<li class="option">${category[d].cat}</li>`;
        //alert(questions[d].cat);
        //console.log(depHtml);        
    }
    document.getElementById("department").innerHTML =
        `<h2> Select Department</h2>
        <ul class="option-group"> ${depHtml}</ul>
        <button class="btn-next" onclick="nextPost()">Next</button>`;        
    toggleActive();
    
    
}

function show(count) {
    let userPostAnswer = sessionStorage.getItem("user_postAnswer");
    questions = questions.filter(function (item) {
         return item.post.includes(userPostAnswer);
    });
    console.log(questions);
    let question = document.getElementById("questions");
    question.innerHTML = `<h2>Q.${question_count + 1} ${questions[count].question}</h2>
                    <ul class="option-group">
                        <li class="option">${questions[count].options[0]}</li>
                        <li class="option">${questions[count].options[1]}</li>
                        <li class="option">${questions[count].options[2]}</li>
                        <li class="option">${questions[count].options[3]}</li>
                    </ul>`;                    
    toggleActive();
    
        

}
function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");

        }
    }
}
