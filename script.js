

const input = document.getElementById('input');

const sumbitBtn = document.querySelector('.sumbit-btn');


const output = document.querySelector('.output');
const clearButton = document.querySelector('.clear-btn')


let listas = [];






sumbitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createItem();
    InputAction();
   



});



const createItem = () => {
    let value = input.value;
    if (value === ""){
        return;
    } else {
    const grocery = document.createElement('div');
    grocery.classList.add('grocery');
    listas.push(grocery)

    grocery.innerText += value;
        
  

    output.append(grocery);
    const bin = document.createElement('span');
    bin.innerText = "X";
    bin.classList.add('bin');



    bin.addEventListener('click', (event) => {
        console.log()
        let parent = event.target.parentElement
        parent.remove() 
    })
 



    grocery.appendChild(bin);

    };

  setLocalStorage(value);
    
    
 
   
};


const InputAction = () => {
    const actionElement = document.querySelector('.action')
    let value = input.value;
    if (value === ""){
        actionElement.innerHTML = "Please Add Grocery Item";
        actionElement.classList.add('action-red');
    } else if (value){
        actionElement.innerHTML = `${value} Added To The List`;
        actionElement.classList.add('action-green');
    };
    setTimeout(() => {
        actionElement.classList.remove('action-red');
        actionElement.classList.remove('action-green');
    }, 3000)
    
};


const setLocalStorage = (value) => {
    let list;

    list = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

    list.push(value);
    localStorage.setItem('items', JSON.stringify(list));
    
    


};



const displayStorage = () => {
    let test = localStorage.getItem('items')
    if (test){
        storageItems = JSON.parse(localStorage.getItem('items'))
        
        storageItems.forEach(element => {
            const grocery = document.createElement('div');
            grocery.classList.add('grocery');
            grocery.innerText += element;
             output.append(grocery);
              const bin = document.createElement('span');
            bin.innerText = "X";
            bin.classList.add('bin');


            

               bin.addEventListener('click',  event => {
              let parent  = event.target.parentElement
              
              parent.remove();
              removeSingleItem(parent);
              
              
            })

            grocery.appendChild(bin);

                
            
            
                // Grocery x event to remove from localstorage
            
           

            
        });

    };
    
}


document.addEventListener('DOMContentLoaded',   displayStorage)



const removeItems = () => {
    localStorage.removeItem('items');
    const redGreenFlag = document.querySelector('.second-red-flag');
     
    if (output.children.length >= 1 ){
        redGreenFlag.innerText = "All Items Deleted" 
        redGreenFlag.classList.add('second-red')
    } else {
        redGreenFlag.innerText = "No More Items To Delete" 
        redGreenFlag.classList.add('second-red')
    }
      setTimeout(() => {
        redGreenFlag.classList.remove('second-red');
        redGreenFlag.innerText = "";
        
    }, 2000)
    output.innerHTML = ""

}

// dakurti funkcija,  kad isimtu is localstorage itema ta ant kurio paspaudei x

const removeSingleItem = (item) => {
    let groceryItems = JSON.parse(localStorage.getItem('items'))
    let index =  groceryItems.indexOf(item);

        groceryItems.splice(index, 1);
    //first delete existing list
    localStorage.removeItem('items');
    //add new updated/edited list
    localStorage.setItem('items', JSON.stringify(groceryItems));

     
    
    


}




clearButton.addEventListener("click", removeItems)




