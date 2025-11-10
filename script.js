let list = document.querySelectorAll('.item');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let count = list.length;
let active = 0;

// Inicializa o primeiro item como ativo
list[active].classList.add('active');
next.onclick = () => {
    list[active].classList.remove('active');
    active = (active + 1) % count;
    list[active].classList.add('active');
};
prev.onclick = () => {
    list[active].classList.remove('active');
    active = (active - 1 + count) % count;
    list[active].classList.add('active');
};
