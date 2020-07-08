let allElements = document.querySelectorAll('li');
addclicks(allElements)

function addclicks(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener('click', changeColor);
        
    }
}

function changeColor(e){
    console.log(e.target.innerHTML)
   document.body.style.color = e.target.innerHTML

}



