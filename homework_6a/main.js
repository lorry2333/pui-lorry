


//providing feedbacks for color selection//

function showColorConfirm(){
   var colorResult=document.querySelector('input[name="color"]:checked').value;
        document.getElementById("colorconfirm").innerHTML= colorResult + " is selected";
}


//add to bag function//
totalNum= 0

document.getElementById("addtobag").addEventListener("click",addNumbertoCart)
function addNumbertoCart(){
  var quantityValue= document.getElementById ("quantity");
  var result = quantityValue.options[quantityValue.selectedIndex].value;
  totalNum = totalNum + parseInt(result)
  document.getElementById("cartnum").innerHTML= "(" + totalNum +")"
}


//showing notification when items being added to bag//
let addToBagButton = document.getElementById('addtobag')

function addToBag(){
  alert ("The product is added to your bag!");
}

addToBagButton.addEventListener('click', addToBag);
