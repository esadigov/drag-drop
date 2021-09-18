const items = document.querySelectorAll('.item');
const placeholders = document.querySelectorAll('.placeholder');

let selected;

const dragstart = (event) => {
    event.target.classList.add('hold');
    selected = document.getElementById(event.target.id);
    setTimeout(() => event.target.classList.add('hide'), 0)
}

const dragend = (event) => {
    event.target.classList.remove('hold', 'hide');
}

const dragover = (event) => {
    if (event.currentTarget !== event.target) {
        return;
    }
    event.preventDefault();
}

const dragenter = (event) => {
    if (event.currentTarget !== event.target) {
        return;
    }
    event.target.classList.add('hovered');
}

const dragleave = (event) => {
    if (event.currentTarget !== event.target) {
        return;
    }
    event.target.classList.remove('hovered');
}

const drop = (event) => {
    if (event.currentTarget !== event.target) {
        return;
    }
    event.target.classList.remove('hovered');
    event.target.append(selected);
}


items.forEach(item => {
    item.addEventListener('dragstart', dragstart);
    item.addEventListener('dragend', dragend);
})

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('drop', drop);
})
