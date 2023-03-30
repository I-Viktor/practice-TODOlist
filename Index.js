const tasks = [
    { task: 'go work' },
    { task: 'shoping' },
    { task: 'go to the gym' },
    { task: 'breakfast' }
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
    button.innerHTML = 'DELETE';
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
        button.innerHTML = 'DELETE';
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



window.addEventListener('load', windowLoad);

function windowLoad() {
    document.documentElement.classList.add('loaded');
}