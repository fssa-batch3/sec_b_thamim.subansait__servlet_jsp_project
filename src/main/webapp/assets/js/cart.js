const sub = new URLSearchParams(window.location.search).get("subId");
let match=false;
function subscription(){
if(sub=="1"){
  match=true;
  const sunType1={
    "SubName":"Bass",
    "price": " 7 USD",
    "Detail":"medium Sound Quality, 90M+ songs and 450K+ tracks for sale, 3 hours Ad-free, Buy 3 Track Per Day",
} 

  return sunType1
}
else if(sub=="2"){
  match=true;
  const sunType2={
    "SubName":"Pro",
    "price": " 14 USD",
    "Detail":"HiFi Sound Quality,900M+ songs and 850K+ tracks for sale , Ad-free,Buy unlimited Track Per Day",
} 

  return sunType2
}
}

let object = subscription() 

console.log(object)

if(match==true){


const div = document.createElement("div");
  div.classList.add("item");
  div.id = `item-1`;

  const img = document.createElement("img");
  img.classList.add("trackimage");
  img.src = `https://loremflickr.com/320/240`;
  img.alt = "";

  const h2 = document.createElement("h2");
  h2.classList.add("name");
  h2.innerText=object["SubName"]

  const pContainer = document.createElement("div");
  pContainer.classList.add("container");

  const p = document.createElement("p");
  p.classList.add("detail");
  p.innerText=object["Detail"];
  pContainer.append(p);

  const button1 = document.createElement("button");
  button1.classList.add("pricetag");
  button1.innerText=object["price"];
  button1.type = "button";

  const button2 = document.createElement("button");
  button2.classList.add("remove");
  button2.type = "button";
  button2.textContent = "Remove";

  div.append(img, h2, pContainer, button1, button2);

  document.querySelector(".itemContainer").append(div)


}


function createItem(i) {
  const div = document.createElement("div");
  div.classList.add("item");
  div.id = `item-${i}`;

  const img = document.createElement("img");
  img.classList.add("trackimage");
  img.src = `https://picsum.photos/200/200?random=${i}`;
  img.alt = "";

  const h2 = document.createElement("h2");
  h2.classList.add("name");

  const pContainer = document.createElement("div");
  pContainer.classList.add("container");

  const p = document.createElement("p");
  p.classList.add("detail");
  pContainer.append(p);

  const button1 = document.createElement("button");
  button1.classList.add("pricetag");
  button1.type = "button";

  const button3 = document.createElement("button");
  button3.classList.add("pricetag");
  button3.setAttribute("id","license")
  button3.setAttribute("style", "padding:10px;display: flex;flex-direction:column;align-items:center;justify-content:center;");
  button3.innerHTML="Perview License";
  button3.type = "button";



  const button2 = document.createElement("button");
  button2.classList.add("remove");
  button2.type = "button";
  button2.textContent = "Remove";

  div.append(img, h2, pContainer, button1,button3,button2);

  return div;
}

const cartItem = JSON.parse(localStorage.getItem("cart"));
const userEmail = JSON.parse(localStorage.getItem("userEmail"))
const filteredItems = cartItem.filter((item) => item.userEmail === userEmail)

if (filteredItems.length === 0) {
  console.error("Unable to retrieve cart items from local storage.");
  const Nothing = document.createElement("h2")
  Nothing.innerText="Nothing found in your cart."
  Nothing.style.color="white";
  Nothing.style.marginTop="40px"
  Nothing.style.textAlign="center";
  document.querySelector(".itemContainer").append(Nothing)
  // Handle the error (e.g. display a message to the user)
} else {
  let song;
  let total=0;

  for (let i = 0; i < filteredItems.length; i++) {
    song = createItem(i);
    document.querySelector(".itemContainer").append(song);
    document.querySelector(`#item-${i} .name`).textContent =
    filteredItems[i].Trackname;
    document.querySelector(`#item-${i} .detail`).textContent =
    filteredItems[i].detail;
    document.querySelector(
      `#item-${i} .pricetag`
    ).textContent = `$${filteredItems[i].price}`;
     total += parseInt(filteredItems[i]["price"])

  }
  document.querySelector("#TotalPrice").textContent = `Total price : $${total}`;
}

function removeCartItem(index) {
  // Remove item from cart array
  cartItem.splice(index, 1);
  // Update cart in local storage
  localStorage.setItem("cart", JSON.stringify(cartItem));
  // Remove item from DOM
  document.querySelector(`#item-${index}`).remove();
}

const removeButtons = document.querySelectorAll(".remove");
removeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    removeCartItem(index);
  });
});



const modal = document.getElementById("myModal");
const modalText = document.getElementById("modal-message-text");
const modalClose = document.getElementById("modal-close");

if(filteredItems.length != 0){

const button3 = document.querySelector("#license")

button3.addEventListener("click", function() {
  modal.style.display = "block";
  modalText.innerText = "Your license details here";
});

modalClose.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
}


// Function to show the payment pop-up when the "Pay Now" button is clicked
function showPaymentPopUp() {
  document.getElementById("payment-popup").style.display = "block";
}


document.querySelector("#sumbitSuccess").addEventListener("click", hidePaymentPopUp);

// document.querySelector("#sumbitSuccess").addEventListener("click", ()=>{
  
//   const payment=document.querySelector(".containerSuccess");

//   if(payment.style.display=="none"){
//     payment.style.display="inline-block"
//   }
//   else{
//     payment.style.display="none"
//   }
// })

function submitPayment() {
  setTimeout(function(){
    document.querySelector(".payment-content").style.display = "none";
    document.getElementById("paymentSuccess").style.display = "block";
  }, 1000); // 5 seconds
}

function hidePaymentPopUp() {
  document.querySelector(".payment-content").style.display = "none";
}

document.getElementById("sumbitSuccess").addEventListener("click", submitPayment);

document.getElementById("sumbitSuccess").addEventListener("click", ()=>{
  const filteredItemsNot = cartItem.filter((item) => item.userEmail !== userEmail)
  localStorage.setItem("cart", JSON.stringify(filteredItemsNot))

  const ordered_items = JSON.parse(localStorage.getItem("BroughtTracks")) || [];
 
  filteredItems.forEach((item) => {
    ordered_items.push(item);
});

localStorage.setItem("BroughtTracks",JSON.stringify(ordered_items));
})