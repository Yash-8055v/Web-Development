let todoList = [
    {
        item: "Go to School", 
        dueDate: '23/06/2023'
    },
     {
        item: "Buy Milk", 
        dueDate: '23/05/2024'
    }

];
displayItems()


function addNewTask(){
    let inputElement = document.querySelector(".todo-input");
    let dateElement = document.querySelector(".date");

    let inputText = inputElement.value; 
    let inputDate = dateElement.value;
   

    // let date = inputDate.inputText;
    todoList.push({item: inputText, dueDate: inputDate});
    inputElement.value = '';
    dateElement.value = '';
    displayItems();


}
 
function displayItems(){
    let containerElement = document.querySelector(".todo-container");

    let newHtml = '';

    
    for (let i = 0; i < todoList.length; i++){

        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate; 
        let {item, dueDate} = todoList[i];

        newHtml += `
            
                <span>${item}</span>
                <span>${dueDate}</span>
                <button class="btn-delete" onclick = "todoList.splice(${i},1);
                    displayItems();
                ">Delete</button>
            
            `;

        containerElement.innerHTML = newHtml;
    }


}





    // addButton.style.backgroundColor = "blue";
    // document.createElement('div')   
    // let body = document.querySelector("body");
    // body.insertAdjacentElement('afterend',div );    // addButton.style.backgroundColor = "blue";
    // document.createElement('div')   
    // let body = document.querySelector("body");
    // body.insertAdjacentElement('afterend',div );