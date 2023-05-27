
function siginFormValidation() {
    let siginEmail = document.getElementById("siginEmail")
    let emailError = document.querySelector("#emailError")
    siginEmail.addEventListener("keyup", function (e) {
        if (siginEmail.value.length < 5) {
            e.preventDefault()
            siginEmail.style.color = "red"
            siginEmail.style.border = "1px solid red"
            emailError.style.display = "block"

        }
        else {
            siginEmail.style.color = "green"
            siginEmail.style.border = "1px solid green"
            emailError.style.removeProperty("display")
        }
    })

    let siginPassword = document.getElementById("siginPassword")
    siginPassword.onkeyup = (e) => {
        if (siginPassword.value.length < 5) {
            e.preventDefault()
            let passwordError = document.getElementById("passwordError")
            passwordError.style.setProperty("display", "block")
            siginPassword.style.color = "red"
            siginPassword.style.cssText = `border: 1px solid red`
        }
        else {
            passwordError.style.display = "none"
            siginPassword.style.cssText = `
                color:green;
                border:1px solid green;
            `
        }
    }

    let eye = document.getElementById("eye")
    let eyeSlash = document.getElementById("eyeSlash")
    eye.addEventListener("click", (e) => {
        eye.style.display = "none"
        eyeSlash.style.display = "block"
        if (siginPassword.getAttribute("type") == "password") {
            siginPassword.setAttribute("type", "text")
        }
        else {
            siginPassword.setAttribute("type", "password")
        }

    })

    eyeSlash.addEventListener("click", function (e) {

        eyeSlash.style.display = "none"
        eye.style.display = "block"
        if (siginPassword.getAttribute("type" == "text")) {

            siginPassword.setAttribute("type", "password")
        }
        else {
            siginPassword.setAttribute("type", "text")
        }

    })

    let buttonCreate = document.querySelector(".buttonCreate")
    let secondSec = document.querySelector(".second-sec")
    let siginForm = document.getElementById("siginForm")
    buttonCreate.addEventListener("click", (e) => {
        e.preventDefault()
        secondSec.style.transform = "scale(1)"
    })
    let siginUp = document.getElementById("siginUp")
    siginUp.addEventListener("click", (e) => {
        secondSec.style.transform = "scale(0)"
    })

    // close the sigin up form when click on x
    let closeBtn = document.getElementById("close")
    closeBtn.onclick = function(e){
        let siginUpContainer = document.getElementsByClassName("second-sec")[0]
        siginUpContainer.style.transform = "scale(0)"
    }
}

siginFormValidation()

// validate my sigin up page form

function validateSignUp(){

    // validate first name
    let firstName = document.getElementById("firstName")
    let firstNameIcon = document.getElementById("firstNameIcon")
    firstName.addEventListener("keyup", function(e){
        if(firstName.value.length < 5){
            firstName.style.color = "red"
            firstName.style.border = "1px solid red"
            firstNameIcon.style.display = "block"
        }
        else{
            firstName.style.color = "green"
            firstName.style.border = "1px solid green"
            firstNameIcon.style.display = "none"
        }
    })

    // validate last name
    let lastName = document.getElementById("lastName")
    let lastNameIcon = document.getElementById("lastNameIcon")
    lastName.addEventListener("keyup", function(e){
        if(lastName.value.length < 5){
            lastName.style.color = "red"
            lastName.style.border = "1px solid red"
            lastNameIcon.style.display = "block"
        }
        else{
            lastName.style.color = "green"
            lastName.style.border = "1px solid green"
            lastNameIcon.style.display = "none"
        }
    })
   
    // validate mobile number
    let mobile = document.getElementById("mobile")
    let mobileIcon = document.getElementById("mobileIcon")
    mobile.addEventListener("keyup", function(e){
        if(mobile.value.length < 10 || isNaN(mobile.value)){
            mobile.style.color = "red"
            mobile.style.border = "1px solid red"
            mobileIcon.style.display = "block"
        }
        else{
            mobile.style.color = "green"
            mobile.style.border = "1px solid green"
            mobileIcon.style.display = "none"
        }
    })
  
    // validate new password
    let newPass = document.getElementById("newPass")
    let newPassIcon = document.getElementById("newPassIcon")
    newPass.addEventListener("keyup", function(e){
        if(newPass.value.length < 5){
            newPass.style.color = "red"
            newPass.style.border = "1px solid red"
            newPassIcon.style.display = "block"
        }
        else{
            newPass.style.color = "green"
            newPass.style.border = "1px solid green"
            newPassIcon.style.display = "none"
        }
    })
}

validateSignUp()

