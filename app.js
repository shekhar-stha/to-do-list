const input = document.querySelector("#inputTask");
const buttonAdd = document.querySelector("#button");
let tasks = document.querySelector("#tasks");

buttonAdd.addEventListener('click',()=>{
if(input.value.length !==0){
   let li = document.createElement('li');
   li.classList.add('li-elements')
   li.append(input.value);
   tasks.appendChild(li);
   input.value = "";

   li.addEventListener('click',()=>{
    li.classList.toggle('finished')
})
}
})

