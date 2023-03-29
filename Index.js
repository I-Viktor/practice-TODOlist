const tasks = [
    { task: 'go work' },
    { task: 'shoping' },
    { task: 'go to the gym' },
    { task: 'breakfast' }
];



function getAllTasks(allTasks) {
    const ul = document.querySelector('.list-group');

    const allElements = allTasks.map((arrTask) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.append(arrTask.task)
        console.log('li', li)
        return li

    })
    return ul.append(...allElements)



}
getAllTasks(tasks)



console.log('test')