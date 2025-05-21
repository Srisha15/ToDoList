console.log("Hi");

let inp = document.querySelector("input");
let sub = document.querySelector("button");
// let lis = document.querySelectorAll("li");
let ul = document.querySelector("ul");


sub.addEventListener("click",function(){
    let text = inp.value; //IMP
    if(text == ""){
        alert("Enter Task")
    } else{

    
    let item = document.createElement("li");
    item.innerText = text;
    ul.appendChild(item);




    //Delete Task Button
    //1.Create Button
    let delBtn = document.createElement("button");
    //2.Add Text
    delBtn.innerText = "Delete Task";
    //Classlist 
    delBtn.classList.add("delete");
    //3.Insert
    item.appendChild(delBtn);


    // delBtn.addEventListener("click",function(){
    //     let parent = this.parentElement;
    //     console.log(parent);
    //     parent.remove();
    // })






    inp.value="";  //reset input field value to empty string after clicking button //IMP

    }
});

// When your page first loads, there are no <button class="delete"> elements yet — because you're creating them later, when the user adds a task by clicking the Submit button.

// So this line:
// let delBtns = document.querySelectorAll(".delete");
// finds nothing at first. Which means:

// No buttons found → for loop runs zero times

// So, no event listeners get added to the new "Delete Task" buttons


// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         this.parentElement.remove();
//     });
// } //works for existing buttons i.e already created ones not dynamically created ones

ul.addEventListener("click",function(event){
    //console.log(event.target); 
    //console.dir(event.target.nodeName);  //button, li
    if(event.target.nodeName == "BUTTON"){
        let parent = event.target.parentElement;
        // console.log(parent);
        parent.remove();
    }
    
});

