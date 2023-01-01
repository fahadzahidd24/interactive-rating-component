// let form = document.querySelector('#formSelect');

// form.addEventListener('click',selectClicked);
// let userInput = 0;
// let inputArr = [];

// function selectClicked(e){
//     if(e.target.classList.contains('opt')){
//         // userInput.style.display = 'none'
//         // inputArr = e.target;
//         // if(inputArr.length <= 1){
//         //     e.target.style.backgroundColor = 'red';
//         // }
//         inputArr.push(e.target)
//         for(let i =0;i<inputArr.length;i++){
//             if(inputArr[i]===e.target){
//                 inputArr[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
//             }
//             else{
//                 inputArr[i].style.backgroundColor !== 'hsl(214, 15%, 21%)';
//             }
//         }
//         // inputArr.pop();
//         console.log("success");
//         console.log(inputArr);
//     }
// }


let option = document.querySelectorAll('.opt');
let ty = document.querySelector('.thankYou');
let initial = document.querySelector('.initial');
let btn = document.querySelector('.btn');
let rating = document.querySelector('span');
let error = document.querySelector('.error');


let text = '';
for(let i=0;i<option.length;i++){
    option[i].addEventListener('click',(e)=>{
        text = option[i].textContent;
        console.log(e.target,text);
    for(let i = 0;i<option.length;i++){
            if(option[i].classList.contains('selected')){
                option[i].classList.remove('selected');
                option[i].style.backgroundColor = "";
            }       
        }
        option[i].classList.add('selected');
        if(option[i].classList.contains('selected')){
            option[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
        }
    })
}

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(text!==''){
        initial.style.display = 'none';
        ty.style.display = 'flex';
        rating.innerText = text;
    }
    else{
        error.innerHTML = '<p style="background-color:hsl(0, 67%, 45%);padding:8px;color:white;margin;8px;margin-bottom:-5px;border-radius:1rem;font-weight:700">Please Select One Option</p>';
        
    }

})