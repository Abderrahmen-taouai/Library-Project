
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
     render(); 
     forms.style.display="none";

});
btn.addEventListener("click", inputs);

function inputs(){

  forms.style.display="block";
    addBookToLibrary(title,author,pages);

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
 for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
    let book= myLibrary[i];
    let elemt= document.createElement("div");
    elemt.innerHTML =`<p>${book.title}</p>`;
    elemt.className="card";
    library.appendChild(elemt);

    
 }
    
};