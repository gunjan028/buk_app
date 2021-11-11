function add_book(){
window.open("./pages/add-book.html");
}
function validateForm(){
    let x=document.getElementById("book_title").children[0].value;
    let y=document.getElementById("book_isbn").children[0].value;
    let z=document.getElementById("book_price").children[0].value;
    if((x==""||null)||(y==""||null)||(z==""||null))
    {
        alert("Please enter the values");
    }
    else{
        const data={
            "Title":x,
            "ISBN":y,
            "Price":z
        }
        console.log(data);
    }
    
}
