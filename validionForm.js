const form = document.getElementById("form");
const campos = document.querySelectorAll(".required")
const spans = document.querySelectorAll(".error-text")
const icons = document.querySelectorAll(".svgs-error")
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const formButton =document.getElementById("btn-grenn")


form.addEventListener('submit', (event)=>{
    if(campos[0,1,2,3].value == ''){
       setError(0)
       setError(1)
       setError(2)
       setError(3)
       event.preventDefault()
    }
})


function setError(index){
   campos[index].style.border= '1px solid red'
   spans[index].style.display = 'block'
   icons[index].style.display= "block"
}
function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display= "none";
    icons[index].style.display= "none";
}


function nameValidate(){
    if(campos[0].value.length = " "){
        removeError(0)
    }else{
        setError(0)
    }
}
function lastNameValidate(){
    if(campos[1].value.length = " "){
        removeError(1)
    }else{
        setError(1)
    }
}


function emailValidate(){
    if(emailRegex.test(campos[2].value)){
        removeError(2)
       
    }else{
        setError(2)
    }
}

function passwordValidate(){
    if(campos[3].value == " "){
        setError(3) 
    }else{
        removeError(3)
    }
}