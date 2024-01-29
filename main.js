

const myLibrary = [];


let btn=document.getElementById('btn1');
let forms=document.getElementById('form1');
const radioButtons = document.querySelectorAll('input[name="reads"]');



forms.addEventListener("submit",function (e) {
      e.preventDefault(); 
      addBookToLibrary(title,author,pages);
      render(); 
      forms.style.display="none";
     

});
btn.addEventListener("click", inputs);

function inputs(){

  forms.style.display="block";
  
    

};

function book(title,author,pages,readstatus){   

    this.title=title;
    this.author=author;
    this.pages=pages;
    this.readstatus=readstatus;
   };

function addBookToLibrary(){

    let title=  document.getElementById('title').value.trim();
    let author=  document.getElementById('author').value.trim();
    let pages=  document.getElementById('pages').value.trim();
    let readstatus= document.getElementById('readcheck').checked;


    obj= new book(title,author,pages,readstatus);
    myLibrary.push(obj);
     console.log(obj);
      
   
};


function render() { 
  
  let library=document.getElementById("l2");
  library.textContent="";
  for (let i = 0; i < myLibrary.length; i++) {
   
    let book= myLibrary[i];   
    let elemt= document.createElement("div");
    elemt.innerHTML =`<div><h1>Title: ${book.title}</div> </h1>
    <div><h2>Author: ${book.author}</h2></div> <div><h5>Pages: ${book.pages}</h5> </div>  
    <div><h5>Read: ${book.readstatus? "Yes": "No"} </h5></div> 
    <button class="rmvb" onclick="remove(${i})" >Delete</button> 
    <button class="rvread" onclick="togleread(${i})" >Change read statut</button>
     `;
    elemt.className="card";
    elemt.setAttribute("index",i);
    library.appendChild(elemt);
    
  }
    };

function remove(i){

 myLibrary.splice(i,1);
 console.log(i);
  render();
};

book.prototype.togleread= function () {
  this.readstatus=!this.readstatus;
};

function togleread(a) {
  myLibrary[a].togleread();
  render();
}
