// console.log("Deepak")
// const buttons = document.querySelector('.button');
const body = document.getElementsByTagName("body")[0]

function setColor(name){
    body.style.backgroundColor = name;
}

function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    
    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}

// buttons.forEach((button) => {
//     // console.log(button);
//     button.addEventListener('click', (e)=>{ 
        
//         // console.log(e);
//         // console.log(e.target);

//         if(e.target.id === 'grey'){
//             body.style.backgroundColor = e.target.id;
//         } else if(e.target.id === 'white'){
//             body.style.backgroundColor = e.target.id;
//         } else if(e.target.id === 'blue'){
//             body.style.backgroundColor = e.target.id;
//         } else(e.target.id === 'yellow'){
//             body.style.backgroundColor = e.target.id;
//         }
//     });
    
// });

// buttons.forEach(button => {
//   button.addEventListener('click', e => {
//     const color = e.target.id;
//     document.body.style.backgroundColor = color;

    
//     // Adjust text color for readability
//     if (color === 'black' || color === 'blue' || color === 'grey') {
//       body.style.color = 'white';
//     } else {
//       body.style.color = 'black';
//     }
//   });
// });


// buttons.forEach(function (button) {
//     button.addEventListener('click', function (e) {
//         // Retrieve the color from the new data-color attribute
//         const newColor = e.target.dataset.color; 
        
//         // Set the body background to the retrieved color
//         if (newColor) {
//              body.style.backgroundColor = newColor;
//         }
//     });
// });