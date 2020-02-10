window.onload = function(){
    this.show(0);
}
let questions =[
    {
        id:1,
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
        id:2,
        question: "What is the full form of CPU?",
        answer: "Central Processign Unit",
        options: [
            "Central Program Unit",
            "Central Processign Unit",
            "Central Preload Unit",
            "None of these"
        ]
    }
]
function submitForm(e){
    e.preventDefault();
    let name=document.forms["welcome-form"]["name"].value;
    //store user name
    sessionStorage.setItem("name", name);

    location.href ="quiz.html";
    //console.log(name);
}
let question_count = 0;
let point = 0;
function next(){
    let user_answer = document.querySelector("li.option.active").innerHTML
    // Check answer by the user    
    if(user_answer == questions[question_count].answer){
        point+=10;
        //console.log("right Answer");
        sessionStorage.setItem("points", point);
    }else{
        point+=0;
        sessionStorage.setItem("points", point)
    }
    
    if(question_count == questions.length-1){
        location.href= "result.html";
        return;

    }
    
    question_count++;
    //console.log(user_answer);
    show(question_count);
}
function show(count){
    let question = document.getElementById("questions");
    question.innerHTML = `<h2>Q.${question_count+1} ${questions[count].question}</h2>
                    <ul class="option-group">
                        <li class="option">${questions[count].options[0]}</li>
                        <li class="option">${questions[count].options[1]}</li>
                        <li class="option">${questions[count].options[2]}</li>
                        <li class="option">${questions[count].options[3]}</li>
                    </ul>`;
    toggleActive();
    
}
function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i<option.length; i++){
        option[i].onclick = function(){
            for(let j=0; j<option.length; j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");

        }
    }
}
