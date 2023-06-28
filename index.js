const myMessage = document.querySelector('.myMessage');
console.log(myMessage);


setTimeout(function(){
    myMessage.innerText = 'Disappearing in 3 seconds'
}, 3000 )

setTimeout(function(){
    myMessage.innerText = ' '
}, 6000 )

const theMessageButton = document.querySelector('.theMessageButton')
theMessageButton.addEventListener('click', function() {
    myMessage.innerText = 'Button pressed'
});

const clearbutton = document.querySelector('.clearbutton')
clearbutton.addEventListener('click', function() {
    myMessage.innerText = ' '
});


const inputBox = document.querySelector('.theInputValue');
theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
     }
});

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitList = document.querySelector(".fruits");

for(let i=0;i<fruits.length;i++){
   // get fruits from the list
   const fruit = fruits[i];
   
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}