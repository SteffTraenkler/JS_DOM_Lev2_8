

let enter = document.querySelector('#enter');
let inputs = document.querySelector('#userinput');

let ul = document.querySelector('ul');

let ent = () => {
    console.log(inputs.value);
    let li = document.createElement('li');
    li.textContent = inputs.value;
    console.log(li);
    ul.appendChild(li);
}

enter.addEventListener('click', () => {
    ent();
})

inputs.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        ent();
    }
})