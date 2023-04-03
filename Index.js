//"use strict"




const tasks = [
    { task: 'learn to code on JS' },
    { task: 'learn english' },
    { task: 'go work' },
    { task: 'save the world)' }
];

function addNewTask() {
    const newInputTask = document.getElementById('new-task');
    console.log('newInputTask', newInputTask.value);

    const ul = document.querySelector('.list-group');
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.onclick = () => {
        li.classList.add('active');
    }



    const button = document.createElement('button');
    button.classList.add('btn', 'btn-success');
    button.innerHTML = 'Done';
    button.onclick = () => {
        li.remove();
    }

    tasks.unshift({ task: newInputTask.value })
    console.log('tasks', tasks);
    li.append(button, newInputTask.value);
    ul.append(li)



}


const btnInput = document.querySelector('.btn-inpun');
btnInput.addEventListener('click', addNewTask);





function getAllTasks(allTasks) {
    const ul = document.querySelector('.list-group');

    const allElements = allTasks.map((arrTask) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.onclick = () => {
            li.classList.add('active');
        }



        const button = document.createElement('button');
        button.classList.add('btn', 'btn-success');
        button.innerHTML = 'Done';
        button.onclick = () => {
            li.remove();
        }
        li.append(button, arrTask.task);
        // console.log('li', li)
        return li

    })
    return ul.append(...allElements)



}
getAllTasks(tasks)

// WOOOD 

window.addEventListener('load', windowLoad);

function windowLoad() {
    document.documentElement.classList.add('loaded');
    createPosition();

    window.addEventListener('scroll', createPosition);

    function createPosition() {
        const contentElement = document.querySelector('.content__container');
        const windowHeight = window.innerHeight;

        const finalPos = scrollY / (contentElement.offsetTop - windowHeight) * 60;

        finalPos < 100 ? forescAnimation(finalPos) : forescAnimation(100);
    }

    function forescAnimation(finalPos) {
        const mountains = document.querySelector('.main-screen_mountains');
        const trees = document.querySelectorAll('.main-screen__trees');
        const birds = document.querySelectorAll('.main-screen__birds');

        const mountainsTranslate = 170 / 100 * finalPos;
        const mountainsScale = 1 + 2 / 100 * finalPos;

        mountains.style.cssText =
            `transform: translate3d(0, ${mountainsTranslate}%,0) 
            scale(${mountainsScale});
        `;

        trees.forEach((tree, index) => {
            const treeTranslate = 20 * (trees.length - index) / 100 * finalPos;
            const treeScale = 1 + 1.5 / 100 * finalPos;

            tree.style.cssText = `
            transform:
            translate3d(0, ${treeTranslate}%,0)
            scale(${treeScale});
            `;



        });

        const birdsTranslate = 190 / 100 * finalPos;
        const birdsScale = 1 + 2 / 100 * finalPos;

        birds[0].style.cssText = `
            transform:
            translate3d(-${birdsTranslate}%,0,0)
            scale(${birdsScale});
            `;

        birds[1].style.cssText = `
            transform:
            translate3d(${birdsTranslate}%,0,0)
            scale(${birdsScale});
            `;

    }
}