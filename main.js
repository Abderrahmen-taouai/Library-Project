
/* function showForm() {
document.getElementById('formElement').style.display = 'block';
console.log("sfsdfsdf");
} */

const myLibrary = [];
let test =true;

let btn=document.getElementById('btn1');
let forms=document.getElementById('form1');



forms.addEventListener("submit",inputs);

function inputs(e){
    e.preventDefault();  

addBookToLibrary(title,author,pages);


};

function book(title,author,pages){   

    this.title=title;
    this.author=author;
    this.pages=pages;
   };

function addBookToLibrary(){

    let title=  document.getElementById('title').value.trim();
    let author=  document.getElementById('author').value.trim();
    let pages=  document.getElementById('pages').value.trim();
    obj= new book(title,author,pages);
    myLibrary.push(obj);
     console.log(obj);
        
    
   
};

btn.addEventListener("click",()=>{
    myLibrary.forEach(element => {
        console.log(element);
        
     }); 

});