console.log("Hi from JS file")
window.onload = display();

//If user adds a note
let addBtn = document.getElementById("addbtn");
addBtn.addEventListener('click',function(e){
    
    
    let addTitle = document.getElementById("addTitle");
    let addTxt = document.getElementById("addTxt");

    if(addTitle.value != "" || addTxt.value != ""){

        let notes = localStorage.getItem("notes");
        if(notes==null){
            notesObj = [];
        }
        else{

            notesObj = JSON.parse(notes);
        }

    let fullNotes = [];

    fullNotes[0]=addTitle.value;  
    fullNotes[1]=addTxt.value;
    fullNotes[2]=0;
    fullNotes[3]=0;

   // console.log(fullNotes)

    notesObj.push(fullNotes)
    localStorage.setItem("notes",JSON.stringify(notesObj));

    //for clear text area
    addTxt.value='';
    addTitle.value='';
    display()
    }

else{

    alert("Title and Note must be filled out");
    return false;
}

})

    

//Display function

function display(){

    let notes = localStorage.getItem("notes");
    if(notes==null || localStorage.notes.length==2){
        
        document.getElementById("notes").innerHTML=`<h3> There is no Notes yet<h3>`;
    
    }

    else{

       // let notes = localStorage.getItem("notes");
        notesObj = JSON.parse(notes);

        let str ='';
        let i=0;
       notesObj.forEach(element => {
           i++;
           console.log(element[2])

        if(element[3]==0){

            if(element[2]==0){
               

                str = str +
                `<div class="noteCard card my-2 mx-2 text-dark bg-light" style="width: 18rem; border: solid 1px" >
                <div class="card-body" >
                  <h5 id="title" class="card-title">${element[0]}</h5>
                  <p class="card-text" id="txtArea">${element[1]}</p>
                  
                  <button id="${i}" onclick="pro(this.id-1)" type="button" class="btn btn-warning btn-sm">Progress</button>
                  <button id="${i}" onclick="imp(this.id-1)" type="button" class="btn btn-warning btn-sm">Important</button>
                  <button id="${i}" onclick="del(this.id-1)" type="button" class="btn btn-warning btn-sm">Delete</button>
                </div>
              </div>`
               }
    
               else if(element[2]==1){
    
                str = str +
                `<div class="noteCard card my-2 mx-2 text-dark bg-warning " style="width: 18rem; border: solid 1px " >
                <div class="card-body">
                  <h5 id="title" class="card-title">${element[0]}</h5>
                  <p class="card-text" id="txtArea">${element[1]}</p>
                  
                  <button id="${i}" onclick="pro(this.id-1)" type="button" class="btn btn-warning btn-sm bg-danger text-light">Complete</button>
                  <button id="${i}" onclick="imp(this.id-1)" type="button" class="btn btn-warning btn-sm bg-danger text-light">Important</button>
                  <button id="${i}" onclick="del(this.id-1)" type="button" class="btn btn-warning btn-sm bg-danger text-light">Delete</button>
                </div>
              </div>`
               }
    
               else{
                str = str +
                `<div class="noteCard card my-2 mx-2 text-light bg-success" style="width: 18rem; border: solid 1px">
                <div class="card-body">
                  <h5 id="title" class="card-title">${element[0]}</h5>
                  <p class="card-text" id="txtArea">${element[1]}</p>
                  
                  <button id="${i}" onclick="pro(this.id-1)" type="button" class="btn btn-warning btn-sm">undone</button>
                  <button id="${i}" onclick="imp(this.id-1)" type="button" class="btn btn-warning btn-sm">Important</button>
                  <button id="${i}" onclick="del(this.id-1)" type="button" class="btn btn-warning btn-sm">Delete</button>
                </div>
              </div>`
               }

        }
        else{

            if(element[2]==0){
               

                str = str +
                `<div class="noteCard card my-2 mx-2 text-dark bg-light border border-danger border-3" style="width: 18rem; border: solid 1px" >
                <div class="card-body" >
                  <h5 id="title" class="card-title">${element[0]}</h5>
                  <p class="card-text" id="txtArea">${element[1]}</p>
                  
                  <button id="${i}" onclick="pro(this.id-1)" type="button" class="btn btn-warning btn-sm">Progress</button>
                  <button id="${i}" onclick="imp(this.id-1)" type="button" class="btn btn-warning btn-sm">Not Imp</button>
                  <button id="${i}" onclick="del(this.id-1)" type="button" class="btn btn-warning btn-sm">Delete</button>
                </div>
              </div>`
               }
    
               else if(element[2]==1){
    
                str = str +
                `<div class="noteCard card my-2 mx-2 text-dark bg-warning border border-danger border-3" style="width: 18rem; border: solid 1px " >
                <div class="card-body">
                  <h5 id="title" class="card-title">${element[0]}</h5>
                  <p class="card-text" id="txtArea">${element[1]}</p>
                  
                  <button id="${i}" onclick="pro(this.id-1)" type="button" class="btn btn-warning btn-sm bg-danger text-light">Complete</button>
                  <button id="${i}" onclick="imp(this.id-1)" type="button" class="btn btn-warning btn-sm bg-danger text-light">Not Imp</button>
                  <button id="${i}" onclick="del(this.id-1)" type="button" class="btn btn-warning btn-sm bg-danger text-light">Delete</button>
                </div>
              </div>`
               }
    
               else{
                str = str +
                `<div class="noteCard card my-2 mx-2 text-light bg-success border border-danger border-3" style="width: 18rem; border: solid 1px">
                <div class="card-body">
                  <h5 id="title" class="card-title">${element[0]}</h5>
                  <p class="card-text" id="txtArea">${element[1]}</p>
                  
                  <button id="${i}" onclick="pro(this.id-1)" type="button" class="btn btn-warning btn-sm">undone</button>
                  <button id="${i}" onclick="imp(this.id-1)" type="button" class="btn btn-warning btn-sm">Not Imp</button>
                  <button id="${i}" onclick="del(this.id-1)" type="button" class="btn btn-warning btn-sm">Delete</button>
                </div>
              </div>`
               }



        }


        });
        document.getElementById("notes").innerHTML=str;
    }
   
}


//Clear All Button

let clearBtn = document.getElementById("ClearAll");
clearBtn.addEventListener('click',function(e){

    localStorage.clear();
    display()

})

//Delete note button

function del(id){
    

    let notes = localStorage.getItem("notes");

    notesObj = JSON.parse(notes);

    notesObj.splice(id, 1)
    localStorage.setItem("notes",JSON.stringify(notesObj));

    
    display()
    

}

//Search bar
let search = document.getElementById('searchBar');

search.addEventListener('input', function(){
  

    let inputVal = search.value.toLowerCase()
    let noteCards = document.getElementsByClassName("noteCard")
    Array.from(noteCards).forEach(function(element){

        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        let cardTitle = element.getElementsByTagName("h5")[0].innerText.toLowerCase();

        if((cardTxt.includes(inputVal)) || (cardTitle.includes(inputVal)) ){
            element.style.display = 'block'
        }
        else{
            element.style.display = 'none'
        }

    })
    }
);

//Progress button

function pro(id){
    

    let notes = localStorage.getItem("notes");

    notesObj = JSON.parse(notes);

    console.log(notesObj[id][2])

    if(notesObj[id][2]==0){
        notesObj[id][2]=1;
    }
    else if (notesObj[id][2]==1) {
        notesObj[id][2]=2;
    }
    else{
        notesObj[id][2]=0;
    }

    localStorage.setItem("notes",JSON.stringify(notesObj));

    
    display()
    

}

// Mark as Important function

function imp(id){
    

    let notes = localStorage.getItem("notes");

    notesObj = JSON.parse(notes);

    console.log(notesObj[id][2])

    if(notesObj[id][3]==0){
        notesObj[id][3]=1;
    }
    else{
        notesObj[id][3]=0;
    }

    localStorage.setItem("notes",JSON.stringify(notesObj));

    
    display()
    

}


//validation
function validateForm() {
    var title = document.getElementById('addTitle').value;
    var note = document.getElementById('addTitle').value;

    if (title == "" || note == "") {
      
    }
  }