var list = document.getElementById("list");

function addtodo(){
    //list
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    //delete
    var delbtn = document.createElement("button")
    delbtn.classList.add('remove');
    var delText = document.createTextNode("Delete")
    delbtn.setAttribute("onclick","deleteitem(this)")
    delbtn.appendChild(delText)

    //edit
    var editbtn = document.createElement("button")
    editbtn.classList.add('edit');
    var editText = document.createTextNode("Edit")
    editbtn.setAttribute("onclick","edititem(this)")
    editbtn.appendChild(editText)
    
    li.appendChild(delbtn)
    li.appendChild(editbtn)
    list.appendChild(li)


    todo_item.value = ""
    
}
function deleteitem(e){
    e.parentNode.remove() 
}
function deleteall(){
    list.innerHTML = ""
}
function edititem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var edit = prompt("Enter edit value",val)

    e.parentNode.firstChild.nodeValue = edit
}