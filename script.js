let list = document.querySelectorAll('.item');

let prev = document.getElementById('prev');
let next = document.getElementById('next');

//contador = 3
//ativo = 0

let count = list.length;
let active = 0;

next.onclick = () =>{
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');
    active++;
    list[active % count].classList.add('active');
}
prev.onclick = () =>{
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');
    active--;
    list[active % count].classList.add('active');
}
