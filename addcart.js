document.addEventListener('DOMContentLoaded', Loadfood);

function Loadfood() {
  loadcontent();

};


function loadcontent() {
  let removecart = document.querySelectorAll('.cart-remove');
  removecart.forEach((btn) => {
    btn.addEventListener('click', remove);
  });

  let inputbox = document.querySelectorAll('.input-box');
  inputbox.forEach((input) => {
    input.addEventListener('change', changeqty);
  });

  let addcartElement = document.querySelectorAll('.cart');
  addcartElement.forEach((btn) => {
    btn.addEventListener('click', addcart);
  });
  updatetotal();
}


let listitem = [];

function addcart() {
  let food = this.parentElement.parentElement;
  console.log(food);
  let productname = food.querySelector('.product-name').innerHTML;
  let img = food.querySelector('.image').src;
  let rupees = food.querySelector('h4').innerHTML;

  let newproduct = { productname, rupees, img };
  console.log(listitem);
  if (listitem.find((el) => el.productname == newproduct.productname)) {
    alert("you have already insert the product");
    return;
  }
  else {
    listitem.push(newproduct);
  }
  let newproductelement = createnewproduct(productname, img, rupees);
  let element = document.createElement('div');
  element.innerHTML = newproductelement;


  let cartbasket = document.querySelector('.cart-content');

  cartbasket.append(element);
  loadcontent();
}
function remove() {
  if (confirm("you are ready to remove the cart")) {

    let title = this.parentElement.querySelector('.cart-title').innerHTML;

    listitem = listitem.filter((el) => el.productname !== title);

    this.parentElement.remove();
    loadcontent();
  }
}

function changeqty() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  updatetotal();
}

function createnewproduct(productname, img, rupees) {
  return ` <div class="cart-box">
            <img src="${img}">
            <div class="detail">
              <div class="cart-title">${productname}</div>
              <div class="price">
             
                <div class="amt">${rupees}</div>
                <div class="tot-amt">Rs.54</div>

              </div>
              <input type="number" value="1" class="input-box">
            </div>
            <ion-icon name="trash" class="cart-remove"></ion-icon>
          </div>`;
}

function updatetotal(){
  const cartbox = document.querySelectorAll('.cart-box');

  let totalvalue = document.querySelector('.total-price');

  let total = 0;

  cartbox.forEach((box)=>{
     let amt = box.querySelector('.amt');
     
     let price = parseFloat(amt.innerHTML.replace("Rs.",""));


   
    let qty = box.querySelector('.input-box').value;

    total += (price * qty);

    box.querySelector('.tot-amt').innerHTML = "Rs." + (price * qty);


  });



totalvalue.innerHTML= 'Rs.' + total;

document.querySelector('.cart-number').innerHTML=listitem.length;
}