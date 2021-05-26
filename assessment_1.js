// gathering up all of the elements to manipulate
const icon = document.querySelector('i');
const sidebar = document.querySelector('.sidebar');
const sidebarIcon = document.querySelector('.sidebar i');
const navbar = document.querySelector('.navbar');
const footer = document.querySelector('footer');
const form = document.querySelector('form');
const container = document.querySelector('.container');
const button = document.querySelector('button');
const urlInput = document.querySelector('#picture');
const topText = document.querySelector('#toptext');
const bottomText = document.querySelector('#bottomtext');
const textColor = document.querySelector('#color');
const memeContainer = document.querySelector('.memecontainer');
const directions = document.querySelector('#directions');
const showForm = document.querySelector('#memeform');
const directionsList = document.querySelector('#listdirections');

// dictating what happens when the "directions" span is clicked
// in the sidebar
directions.addEventListener('click', () => {
    form.style.display = 'none';
    directionsList.style.display = 'block';
});

// same as above, but for the "form" span
showForm.addEventListener('click', () => {
    directionsList.style.display = 'none';
    form.style.display = 'flex';
});

// creating a counter to give each div and radio button unique ids
let idCounter = 0;

// dictating what happens when the "hamburger menu" icon is clicked
icon.addEventListener('click', () => {
    sidebar.style.width = '20%';
    form.style.marginLeft = '0px';
    form.style.display = 'flex';
    directionsList.style.display = 'none';
    directionsList.style.marginLeft = '0px';
    directionsList.style.opacity = '1';
    container.style.width = '80%'
});

// same as directly above, this time for the "X" when the sidebar div is present
sidebarIcon.addEventListener('click', () => {
    sidebar.style.width = '0';
    form.style.marginLeft = '240px';
    container.style.width = '100%';
    directionsList.style.marginLeft = '100px';
    directionsList.style.opacity = '0';
    directionsList.style.transition = 'opacity .5s';
});

// this is used to get values from the inputs, create a div for the meme
// and a span for the radio input, and set some properties on the new elements, 
// while also resetting the input values
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let memeDiv = document.createElement('div');
    let radioButton = document.createElement('input');
    radioButton.id = `radio${idCounter}`
    radioButton.type = 'radio';
    radioButton.classList.add('.radio');
    memeDiv.classList.add('memediv');
    memeDiv.id = `meme${idCounter}`;
    memeDiv.innerHTML = `
        <img src="${urlInput.value}">
        <span class="topspan" style="color: ${textColor.value}"><b>${topText.value}</b></span>
        <span class="bottomspan" style="color: ${textColor.value}"><strong>${bottomText.value}</strong></span>
    `;
    memeDiv.append(radioButton);
    urlInput.value = '';
    topText.value = '';
    bottomText.value = '';
    textColor.value = '';
    memeContainer.append(memeDiv);
    idCounter++;
});

// handling what happens when the radio inputs are clicked 
// removing the meme and its associated radio input
document.addEventListener('click', (evt) => {
    if (evt.target.className === '.radio') {
        let identifier = evt.target.id.slice(-1)[0];
        const memeToRemove = document.querySelector(`#meme${identifier}`);
        memeToRemove.style.opacity = '0';
        memeToRemove.style.transition = 'opacity 2s';
        setTimeout(() => {
            memeToRemove.remove();
        },1500);
    };
});