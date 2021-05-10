const form = document.getElementById("form");
const inputs = form.querySelectorAll(".form-field")
const emailRegex =  /^([a-z0-9_\.-]+)@([a-z\.]+)\.([a-z]{2,6})/;



const validateForm = () =>{
    inputs.forEach(input =>{
        if(
            input.firstElementChild.value.trim() === "" &&
            input.firstElementChild.name === "email"
        ){
            input.classList.add("form-field--error");
        }else {
            input.classList.remove("form-field--error")
        }
    });

    if(!emailRegex.test(form.email.value.toLowerCase().trim())) {
        form.email.parentElement.classList.add("form-field--error");
    } else{
        form.email.parentElement.classList.remove("form-field--error");
    }

   

};


form.addEventListener("submit", e =>{
    e.preventDefault();
    validateForm();
});