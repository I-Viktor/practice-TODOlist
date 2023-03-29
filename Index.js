const tasks = [
    { task: 'go work' },
    { task: 'shoping' },
    { task: 'go to the gym' },
    { task: 'breakfast' }
];



function getAllTasks(allTasks) {
    const ul = document.querySelector('.list-group');

    allTasks.map(() => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.append(task)
        // console.log('li', li)
        return li

    })




}
getAllTasks(tasks)



console.log('test')