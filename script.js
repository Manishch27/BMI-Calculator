const btnSubmit = document.querySelector("button");
let weight = document.querySelector("#weight");

let height = document.querySelector("#height");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let w = weight.value;
    let h = height.value;

    if(h == "" || w == ""){
        alert("Please! fill in all the fields");
        return;
    }

    else if(isNaN(h)|| isNaN(w)){
        alert("Please! Enter numerical values in both the fields");
        return;
    }

    let bmi = Math.round(w/(h*h)*10000);
    
    let result = document.querySelector(".para");
    result.innerHTML = `Your BMI is ${bmi}%`;
}
);