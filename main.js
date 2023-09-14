
/* function showForm() {
document.getElementById('formElement').style.display = 'block';
console.log("sfsdfsdf");
} */

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
    let readstatus=readstats();


    obj= new book(title,author,pages,readstatus);
    myLibrary.push(obj);
     console.log(obj);
        
    
   
};

/* btn.addEventListener("click",()=>{
    myLibrary.forEach(element => {
        console.log(element);
        
     }); 

}); */


 function readstats(){
    let selectedSize="";
   
 for ( let radioButton of radioButtons) {
      if (radioButton.checked) {
        selectedSize = radioButton.value;
        
        }   
}

return selectedSize;

};

function render() { 
  
  let library=document.getElementById("l2");
  library.textContent="";
  for (let i = 0; i < myLibrary.length; i++) {
   
    let book= myLibrary[i];   
    let elemt= document.createElement("div");
    elemt.innerHTML =`<div><h1>Title: ${book.title}</div> </h1>
    <div>Author: ${book.author}</div> <div>Pages: ${book.pages}</div>  <div>Read: ${book.readstatus}</div> 
    <button class="rmvb" onclick="remove(${i})" >Delete</button>`;
    elemt.className="card";
    elemt.setAttribute("index",i);
    library.appendChild(elemt);
    
  }
    };
/* 
    rmvb=document.querySelector('rmvb').addEventListener("click", remove); */
function remove(i){

 myLibrary.splice(i,1);
 console.log(i);
  render();
};