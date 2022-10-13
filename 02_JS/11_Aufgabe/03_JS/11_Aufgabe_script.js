const tasks = [];

document.getElementById("addTask").addEventListener("click", function(){addTask();});

function addTask(){
    let taskname = document.getElementById("newtaskname").value;
    let taskrespons = document.getElementById("newtaskrespons").value;
    let task = { name: taskname, }
}
