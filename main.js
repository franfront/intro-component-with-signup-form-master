const form = document.getElementById("form");
const emailRegex =  /^([a-z0-9_\.-]+)@([a-z\.]+)\.([a-z]{2,6})/;

const validateForm = () =>{
    if(form.name.value === ""){
        form.name.parentElement.classList.add("form-field--error");
    }else{
        form.name.parentElement.classList.remove("form-field--error")
    }

}


form.addEventListener("submit", e =>{
    e.preventDefault();
    validateForm();
})