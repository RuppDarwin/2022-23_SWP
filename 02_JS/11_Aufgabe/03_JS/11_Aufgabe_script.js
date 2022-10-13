const tasks = [];

document.getElementById("addTask").addEventListener("click", function(){addTask();});

function addTask(){
    let taskname = document.getElementById("newtaskname").value;
    let taskrespons = document.getElementById("newtaskrespons").value;
    let newtask = { name: taskname, respons: taskrespons, isDone:false};
    tasks.push(newtask);
    printTaskList();
}

function printTaskList(){
    document.getElementById("tasklist").innerHTML = getHTMLTasks();
}

function getHTMLTasks(){
    let html = "";
    tasks.forEach(Element => {
        let checked = "";
        if(Element.isDone == true){
            checked = "checked"
        }
        html += "<li><input type='checkbox' " + checked + "/>" + Element.name + "-" + Element.respons;
    });
    return html;
}