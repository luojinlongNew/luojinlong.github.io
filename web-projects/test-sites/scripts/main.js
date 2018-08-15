var myImage = document.querySelector('img')
var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/stupid-dog.jpg'){
        myImage.setAttribute('src','images/perfect.jpg')}else{
            myImage.setAttribute('src','images/stupid-dog.jpg')
        }
}

function setUserName(){
    var myName = prompt('please enter your name.')
    localStorage.setItem('name',myName)
    myHeading.textContent = 'Mozillia is cool, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}