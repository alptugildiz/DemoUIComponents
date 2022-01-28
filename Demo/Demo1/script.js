const frm1 = document.querySelector('#form1')
const frm2 = document.querySelector('#form2')
const sgnFrm1 = document.querySelector('#sgnForm1')
const sgnFrm2 = document.querySelector('#sgnForm2')
const sgnFrm3 = document.querySelector('#sgnForm3')
const sgnFrm4 = document.querySelector('#sgnForm4')
const icnPw = document.querySelector('#password-icon')
const sgnUpIcnPw = document.querySelector('#password-icon-signup')
const sgnUpIcnPw2 = document.querySelector('#password-icon-signup2')




frm1.addEventListener('click',()=>{
    frm1.classList.add('formAnim')
    frm2.classList.remove('formAnim')
})

frm2.addEventListener('click',()=>{
    frm1.classList.remove('formAnim')
    frm2.classList.add('formAnim')
})

sgnFrm1.addEventListener('click',()=>{
    sgnFrm1.classList.add('formAnim')
    sgnFrm2.classList.remove('formAnim')
    sgnFrm3.classList.remove('formAnim')
    sgnFrm4.classList.remove('formAnim')
})
sgnFrm2.addEventListener('click',()=>{
    sgnFrm2.classList.add('formAnim')
    sgnFrm1.classList.remove('formAnim')
    sgnFrm3.classList.remove('formAnim')
    sgnFrm4.classList.remove('formAnim')
})
sgnFrm3.addEventListener('click',()=>{
    sgnFrm3.classList.add('formAnim')
    sgnFrm2.classList.remove('formAnim')
    sgnFrm1.classList.remove('formAnim')
    sgnFrm4.classList.remove('formAnim')
})
sgnFrm4.addEventListener('click',()=>{
    sgnFrm4.classList.add('formAnim')
    sgnFrm2.classList.remove('formAnim')
    sgnFrm3.classList.remove('formAnim')
    sgnFrm1.classList.remove('formAnim')
})


sgnUpIcnPw.addEventListener('click' , ()=> {
    var sgnPwForm = document.querySelector('#sgnPw1')
    if (sgnPwForm.type === 'password') {
        sgnPwForm.type ='text'
        sgnUpIcnPw.classList.remove('fa-eye')
        sgnUpIcnPw.classList.add('fa-eye-slash')

    }
    else{
        sgnPwForm.type ='password'
        sgnUpIcnPw.classList.remove('fa-eye-slash')
        sgnUpIcnPw.classList.add('fa-eye')
    }
})

sgnUpIcnPw2.addEventListener('click' , ()=> {
    var sgnPwForm2 = document.querySelector('#sgnPw2')
    if (sgnPwForm2.type === 'password') {
        sgnPwForm2.type ='text'
        sgnUpIcnPw2.classList.remove('fa-eye')
        sgnUpIcnPw2.classList.add('fa-eye-slash')

    }
    else{
        sgnPwForm2.type ='password'
        sgnUpIcnPw2.classList.remove('fa-eye-slash')
        sgnUpIcnPw2.classList.add('fa-eye')
    }
})

icnPw.addEventListener('click' , ()=> {
    var pwForm = document.querySelector('#frm2')
    if (pwForm.type === 'password') {
        pwForm.type ='text'
        icnPw.classList.remove('fa-eye')
        icnPw.classList.add('fa-eye-slash')

    }
    else{
        pwForm.type ='password'
        icnPw.classList.remove('fa-eye-slash')
        icnPw.classList.add('fa-eye')
    }
})

$("#signupBtn").bind("click", function() {

    $("#login").fadeToggle(0);
    $("#signup").animate({width:'toggle'},1000);
    $("#signupBtn").hide();
});




