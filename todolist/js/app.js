//UI
const form = document.getElementById('task-form');
const taskinput = document.getElementById('task');
const filter = document.getElementById('filter');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');

function addtask(e){

    if(taskinput.value === ''){
        window.alert("Add a Task");
        return;
    }

    // console.log(taskinput.value);
    const li = document.createElement('li');

    // add class
    // li.classList.add('collection-item');
    li.className = 'collection-item';

    // create text node append to li
    li.appendChild(document.createTextNode(taskinput.value));

    //create link
    const link = document.createElement('a');

    //add class
    link.className = 'delete-item secondary-content';

    //add icon
    link.innerHTML = `<i class="far fa-trash-alt"></i>`;

    //append link to li
    li.appendChild(link);

    // append li to ul
    tasklist.appendChild(li);

    //Store task in local storage
    storetaskinlocalstorage(taskinput.value);

    // console.log(link);

    // console.log(li);

    taskinput.value = '';

    e.preventDefault();
}

//Removetask function
function removetask(e){
    // console.log('hay');
    // console.log(e.target.parentElement);

            //i  a
    if(e.target.parentElement.classList.contains('delete-item')){
        // console.log('delete-item');
        if(confirm('Do u want to delete this item?')){

                //i     a           li
            e.target.parentElement.parentElement.remove();
        }
    }

    //remove task from local storage
    removetaskfromlocalstorage(e.target.parentElement.parentElement);

}

//clear task
function cleartask(){
    // console.log('hay');

    //Method 1
    // tasklist.innerHTML = '';

    //Method 2
    // console.log(tasklist.childElementCount);
    // let x = 0;
    // while (x < tasklist.childElementCount){
    //     tasklist.removeChild(tasklist.firstChild);
    // }

    //Method 3
    while (tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }

    //clear all data
    cleartasksformlocalstorage();

}

//Storage task
function storetaskinlocalstorage(task){

        let tasks ;
        if(localStorage.getItem('tasks') === null){
            tasks = [];
        }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
            // console.log(typeof tasks);
        }

        tasks.push(task);
        // console.log(task);

        localStorage.setItem('tasks',JSON.stringify(tasks));
}

//Get task from localstorage
function gettask(){
    // console.log('ahy');

    let taskslists;

    if(localStorage.getItem('tasks') === null){
        taskslists = [];
    }else {
        taskslists = JSON.parse(localStorage.getItem('tasks'));
    }

    taskslists.forEach((taskslist)=>{
        // console.log(taskslist);

        // create li element
        const li = document.createElement('li');

        //add class
        li.className = 'collection-item';

        //create textnode and append to li
        li.appendChild(document.createTextNode(taskslist));

        //create new link element
        const link = document.createElement('a');
        //add class
        link.className = 'delete-item secondary-content';
        //add icon
        link.innerHTML = `<i class="far fa-trash-alt"></i>`;

        li.appendChild(link);

        //append li to ul
        tasklist.appendChild(li);
    });
}

// gettask();

//Removetask form local storage
function removetaskfromlocalstorage(taskitem){
    // console.log('hay');
    // console.log(taskitem);
    // console.log(taskitem.textContent);

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task,index)=>{
        // console.log(task);

       if(taskitem.textContent === task){
                        //where we want to start(index) , where we want to end (how many)
           tasks.splice(index,1);
       }
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

//Clear ALl Data form localstorage
function cleartasksformlocalstorage(){
    localStorage.clear();
}

//filter task
function filtertasks(e){
    // console.log('hya');
    // console.log(e.target.value);

    const inputfilter = e.target.value.toLowerCase();
    // console.log(inputfilter);

    const tasks = document.querySelectorAll('.collection-item');

    tasks.forEach((task)=>{
        // console.log(task);
        const item = task.firstChild.textContent.toLowerCase();

        if(item.indexOf(inputfilter) !== -1){
            task.style.display = 'block';
        }else {
            task.style.display = 'none';
        }
    });
}


//Event Listener
//add task

form.addEventListener('submit',addtask);

// remove task
tasklist.addEventListener('click',removetask);

//clearbtn cleartask
clearbtn.addEventListener('click',cleartask);

document.addEventListener('DOMContentLoaded',gettask);

//filter task
filter.addEventListener('keyup',filtertasks);

