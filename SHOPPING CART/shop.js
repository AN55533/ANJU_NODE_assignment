let shopMap=new Map();
shopMap.set(1,400);
shopMap.set(2,500);
shopMap.set(3,"CHURIDHAR -650 RS");
shopMap.set(4,"CHURIDHAR -650 RS");
const pricess={"SHIRT-400 RS":400,"FROCK-500 RS":500,"CHURIDHAR -650 RS":659};
const prices={"SHIRT-400 RS":400,"FROCK-500 RS":500,"CHURIDHAR -650 RS":659};

function displayItems(map){

    let itemList=document.getElementById("itemList");
    itemList.innerHTML="";
    map.forEach((value,key) => {
        
    let listItem=document.createElement('li');
    
    listItem.textContent=`${key}: ${value} `;
    itemList.appendChild(listItem);
        
    });
}    
function addItem(key,value){
    shopMap.set(key,value);
        displayItems(shopMap);

    }
document.getElementById('additemform').addEventListener('submit',(e)=>{
e.preventDefault();
let key=document.getElementById("ITEMS").value;
let value=document.getElementById("itemprice").value;

  let price1=`${key}*${value}`;
  document.getElementById("pr").innerHTML=price1;
addItem(key,value,price1);
document.getElementById("additemform").reset();



});

window.onload =() =>{

    displayItems(itemMap);
}
