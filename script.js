const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-button');
const result = document.getElementById('result');

const isItPalindrome = (str) => {
    let myRegex = /[^\s\W-_]/g;
    let arr = str.toLowerCase().match(myRegex);
    if (arr.join('') === arr.reverse().join('')) {
        return str + ' is a palindrome.'
    } else {
        return str + ' is not a palindrome.'
    };
}
const addText = () => {
    const val = textInput.value;
    if (val) {
        result.classList.add('hide')
        result.textContent = isItPalindrome(val);
    } else {
        alert('Please input a value')
    }
}

checkButton.addEventListener('click', addText);