//generated password the result
const generatedPassword = document.querySelector(".generated-password");
//to copy generated password
const copy = document.querySelector('.copy');
// to reflect the length of the current password in the document as defined by the input
const passwordLength = document.querySelector(".length");
// range input 
const range = document.getElementById('range');
//chackboxes
const uppercase = document.getElementById("upper");
const lowercase = document.getElementById('lower');
const paswordNumber = document.getElementById('number');
const paswordSymbol = document.getElementById('symbol');
//if none is checked
const error = document.querySelector('.error');
// h2 and rectangles which reflect the strengthof the password
const passwordStrength = document.getElementById("strength-level");
const rec1 = document.querySelector('.rec1');
const rec2 = document.querySelector('.rec2');
const rec3 = document.querySelector('.rec3');
const rec4 = document.querySelector('.rec4');
//generate button
const generate = document.querySelector('.generate-button');


// to reflect current password length 
range.addEventListener('input', () => {
    passwordLength.innerHTML = range.value;
})
// Changes the color of the range input
range.oninput = () =>{
    const value = (range.value-range.min)/(range.max-range.min)*100;
    range.style.background = 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + value + '%, #18171F ' + value + '%, #18171F 100%)';
}


const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>/?';
let validChars = '';
let password = '';
let count = 0;

// Add valid characters based on checked checkboxes

const checkCekboxes = () =>{
    if (lowercase.checked) {
        validChars += lowercaseChars;
        count ++;
    }
    if (uppercase.checked) {
        validChars += uppercaseChars;
        count ++;
    }
    if (paswordNumber.checked) {
        validChars += numberChars;
        count ++;
    }
    if (paswordSymbol.checked) {
        validChars += symbolChars;
        count ++;
    }
    noneChecked();
}
//Check if at least one checkbox is checked, if it is not,it will display a massage
const noneChecked = () => {
    if(count=== 0){
        error.style.display = "block";
    }else{
        error.style.display = "none";
    }
}

// the function will determine strength oh the password
const determineStregth = () =>{
    if(count===1){
        passwordStrength.innerHTML = "too weak!"
        rec1.classList.add('too-weak')
    } else if(count===2){
        passwordStrength.innerHTML = "weak"
        rec1.classList.add('weak')
        rec2.classList.add('weak')
    }else if(count===3){
        passwordStrength.innerHTML = "medium"
        rec1.classList.add('medium')
        rec2.classList.add('medium')
        rec3.classList.add('medium')
    }else if(count===4){
        passwordStrength.innerHTML = "strong"
        rec1.classList.add('strong')
        rec2.classList.add('strong')
        rec3.classList.add('strong')
        rec4.classList.add('strong')
    }
}

//This function removes styles if they already have any
const removeStyleRec = () => {
    rec1.classList.remove('too-weak');
    rec1.classList.remove('weak');
    rec2.classList.remove('weak');
    rec1.classList.remove('medium');
    rec2.classList.remove('medium');
    rec3.classList.remove('medium');
    rec1.classList.remove('strong');
    rec2.classList.remove('strong');
    rec3.classList.remove('strong');
    rec4.classList.remove('strong');
}

// this function made random password 
function generatePassword() {
    let length = range.value;
    let password = '';
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }
    return password;
}


//make  password copy  when click copy svg
copy.addEventListener('click', () => {
    // Create a new textarea element to hold the content to be copied
    const textarea = document.createElement('textarea');
    textarea.value = generatedPassword.textContent;
    document.body.appendChild(textarea);
    
    // Select the content of the textarea and copy it to the clipboard
    textarea.select();
    document.execCommand('copy');
    
    // Remove the textarea from the document
    document.body.removeChild(textarea);
})

//
generate.addEventListener("click", () => {
    validChars = ""
    count = 0;
    removeStyleRec();
    checkCekboxes();
    determineStregth();
    if (count > 0) {
        let password = generatePassword();
        generatedPassword.innerHTML = password;
        generatedPassword.classList.remove("remove");
    }

})



