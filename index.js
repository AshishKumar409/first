let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  checkInputs()
})

function checkInputs(){
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const password2Value = password2.value.trim()
  

  if(usernameValue === ''){
    setErrorFor(username,'user cannot have empty space')
  }else{
    setSuccess(username)
  }
  if(emailValue === ''){
    setErrorFor(email,'email cannot have empty space')
  }else{
    setSuccess(email)
  }

  if( passwordValue !== password2Value || passwordValue===''){
    setErrorFor(password,"password should match and shouldn't be empty")
    setErrorFor(password2,"password should match and shouldn't be empty")
  }else{
    setSuccess(password)
    setSuccess(password2)
  }

  function setErrorFor(input,message){
    let formControl = input.parentElement
    let errorMessage = formControl.querySelector('small')
    errorMessage.innerText = message
    formControl.className = 'form-control error' 
  }

  function setSuccess(input){
    let formControl = input.parentElement
    formControl.className = 'form-control success'
  }
}


