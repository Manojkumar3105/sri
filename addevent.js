            
 // menu cart js-code

let menubtn = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu');

let closebtn =document.querySelector('.rcb')

menubtn.addEventListener('click', () => {
  menu.classList.add('menu-active');
});

closebtn.addEventListener('click',() => {
  menu.classList.remove('menu-active');
});
           
           // shop cart js-code

let shopcart = document.querySelector('.shop-cart');
let cart = document.querySelector('.scart');
let closebtn1 = document.querySelector('.csk');


shopcart.addEventListener('click', () => {
  cart.classList.add('cart-active');
});
closebtn1.addEventListener('click', () => {

  cart.classList.remove('cart-active');

}); 
 
 
 

                       
                       
                             // second page

secondpage = document.querySelector('.secondpage');

secondpage.addEventListener('click', () => {
  createsecondpage();
})

// function createsecondpage() {
//   let secondpageitem = `<h2>Trending Products</h2>
//     <p>Summer Collection New Morden Design</p> 
  

//     <div class="pro-contianer">
//       <div class="pro">
//         <img src="img/n1.jpg" alt="no">
//         <div class="des">
//           <span>adidas</span>
//           <h5>Cartoon Astronaut T-shirts</h5>
//           <div class="star">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//           </div>
//           <h4>$78</h4>
//         </div>
//         <a href="#">
//           <i class="fa-solid fa-cart-shopping cart"></i></a>

//       </div>
//       <div class="pro">
//         <img src="img/n2.jpg" alt="no">
//         <div class="des">
//           <span>adidas</span>
//           <h5>Cartoon Astronaut T-shirts</h5>
//           <div class="star">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//           </div>
//           <h4>$78</h4>
//         </div>
//         <a href="#">
//           <i class="fa-solid fa-cart-shopping cart"></i></a>

//       </div>

//       <div class="pro">
//         <img src="img/n3.jpg" alt="no">
//         <div class="des">
//           <span>adidas</span>
//           <h5>Cartoon Astronaut T-shirts</h5>
//           <div class="star">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//           </div>
//           <h4>$78</h4>
//         </div>
//         <a href="#">
//           <i class="fa-solid fa-cart-shopping cart"></i></a>

//       </div>

//       <div class="pro">
//         <img src="img/n4.jpg" alt="no">
//         <div class="des">
//           <span>adidas</span>
//           <h5>Cartoon Astronaut T-shirts</h5>
//           <div class="star">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//           </div>
//           <h4>$78</h4>
//         </div>
//         <a href="#">
//           <i class="fa-solid fa-cart-shopping cart"></i></a>

//       </div>

//       <div class="pro">
//         <img src="img/n5.jpg" alt="no">
//         <div class="des">
//           <span>adidas</span>
//           <h5>Cartoon Astronaut T-shirts</h5>
//           <div class="star">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//           </div>
//           <h4>$78</h4>
//         </div>
//         <a href="#">
//           <i class="fa-solid fa-cart-shopping cart"></i></a>

//       </div>

//       <div class="pro">
//         <img src="img/n6.jpg" alt="no">
//         <div class="des">
//           <span>adidas</span>
//           <h5>Cartoon Astronaut T-shirts</h5>
//           <div class="star">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//           </div>
//           <h4>$78</h4>
//         </div>
//         <a href="#">
//           <i class="fa-solid fa-cart-shopping cart"></i></a>

//       </div>

//       <div class="pro">
//         <img src="img/n7.jpg" alt="no">
//         <div class="des">
//           <span>adidas</span>
//           <h5>Cartoon Astronaut T-shirts</h5>
//           <div class="star">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//           </div>
//           <h4>$78</h4>
//         </div>
//         <a href="#">
//           <i class="fa-solid fa-cart-shopping cart"></i></a>

//       </div>
//       <div class="pro">
//         <img src="img/n8.jpg" alt="no">
//         <div class="des">
//           <span>adidas</span>
//           <h5>Cartoon Astronaut T-shirts</h5>
//           <div class="star">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//           </div>
//           <h4>$78</h4>
//         </div>
//         <a href="#">
//           <i class="fa-solid fa-cart-shopping cart"></i></a>

//       </div>




//     </div>`;


//   document.getElementById('product1').innerHTML = secondpageitem;
// }

function createsecondpage() {
  let secondpageitem =`<h2>Trending Products</h2>
<p>Summer Collection New Modern Design</p>

<div class="pro-contianer">
  <div class="pro">
    <img src="img/n1.jpg" alt="no" class="image">
    <div class="des">
      <span>adidas</span>
      <h5 class="product-name">Cartoon Astronaut T-shirt</h5>
      <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <h4>Rs. 799</h4>
    </div>
    <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
  </div>

  <div class="pro">
    <img src="img/n2.jpg" alt="no" class="image">
    <div class="des">
      <span>adidas</span>
      <h5 class="product-name">Galaxy Printed Hoodie</h5>
      <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <h4>Rs. 1,599</h4>
    </div>
    <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
  </div>

  <div class="pro">
    <img src="img/n3.jpg" alt="no" class="image">
    <div class="des">
      <span>adidas</span>
      <h5 class="product-name">Retro Graphic T-shirt</h5>
      <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <h4>Rs. 699</h4>
    </div>
    <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
  </div>

  <div class="pro">
    <img src="img/n4.jpg" alt="no" class="image">
    <div class="des">
      <span>adidas</span>
      <h5 class="product-name">Fitness Tracksuit</h5>
      <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <h4>Rs. 2,499</h4>
    </div>
    <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
  </div>

  <div class="pro">
    <img src="img/n5.jpg" alt="no" class="image">
    <div class="des">
      <span>adidas</span>
      <h5 class="product-name">Casual Sleeveless Top</h5>
      <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <h4>Rs. 599</h4>
    </div>
    <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
  </div>

  <div class="pro">
    <img src="img/n6.jpg" alt="no" class="image">
    <div class="des">
      <span>adidas</span>
      <h5 class="product-name">Striped Sports Jacket</h5>
      <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <h4>Rs. 1,899</h4>
    </div>
    <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
  </div>

  <div class="pro">
    <img src="img/n7.jpg" alt="no" class="image">
    <div class="des">
      <span>adidas</span>
      <h5 class="product-name">Cool Denim Shirt</h5>
      <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <h4>Rs. 1,399</h4>
    </div>
    <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
  </div>

  <div class="pro">
    <img src="img/n8.jpg" alt="no" class="image">
    <div class="des">
      <span>adidas</span>
      <h5 class="product-name">Urban Cargo Pants</h5>
      <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <h4>Rs.1299</h4>
    </div>
    <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
  </div>
</div>
`;
document.getElementById('product1').innerHTML = secondpageitem;

}

                              // single product


  let array = [{
    image: 'f1',
    cost: 780,
    sm1: 'f1',
    sm2: 'f2',
    sm3: 'f3',
    sm4: 'f4'
  }, {
    image: 's1',
    cost: 390,
    sm1: 's1',
    sm2: 's2',
    sm3: 's3',
    sm4: 's4'
  }, {
    image: 's5',
    cost: 480,
    sm1: 's5',
    sm2: 's6',
    sm3: 's7',
    sm4: 's8'
  }, {
    image: 's9',
    cost: 545,
    sm1: 's9',
    sm2: 's10',
    sm3: 's11',
    sm4: 's12'
  }, {
    image: 's13',
    cost: 850,
    sm1: 's13',
    sm2: 's14',
    sm3: 's15',
    sm4: 's16'
  }, {
    image: 's17',
    cost: 315,
    sm1: 's17',
    sm2: 's18',
    sm3: 's19',
    sm4: 's20'
  }, {
    image: 'r1',
    cost: 710,
    sm1: 'r1',
    sm2: 'r2',
    sm3: 'r3',
    sm4: 'r4'
  }, {
    image: 'r5',
    cost: 710,
    sm1: 'r5',
    sm2: 'r6',
    sm3: 'r7',
    sm4: 'r8'
  }];

  let p1 = document.querySelector('.image1');

  let p2 = document.querySelector('.image2');

  let p3 = document.querySelector('.image3');

  let p4 = document.querySelector('.image4');

  let p5 = document.querySelector('.image5');

  let p6 = document.querySelector('.image6');

  let p7 = document.querySelector('.image7');

  let p8 = document.querySelector('.image8');

  p1.addEventListener('click', () => {
    addevent(array[0].image, array[0].cost, array[0].sm1, array[0].sm2, array[0].sm3, array[0].sm4);
  });


  p2.addEventListener('click', () => {
    addevent(array[1].image, array[1].cost, array[1].sm1, array[1].sm2, array[1].sm3, array[1].sm4);
    console.log()
  });


  p3.addEventListener('click', () => {
    addevent(array[2].image, array[2].cost, array[2].sm1, array[2].sm2, array[2].sm3, array[2].sm4);
  });

  p4.addEventListener('click', () => {
    addevent(array[3].image, array[3].cost, array[3].sm1, array[3].sm2, array[3].sm3, array[3].sm4);
  });

  p5.addEventListener('click', () => {
    addevent(array[4].image, array[4].cost, array[4].sm1, array[4].sm2, array[4].sm3, array[4].sm4);
  });

  p6.addEventListener('click', () => {
    addevent(array[5].image, array[5].cost, array[5].sm1, array[5].sm2, array[5].sm3, array[5].sm4);
  });

  p7.addEventListener('click', () => {
    addevent(array[6].image, array[6].cost, array[6].sm1, array[6].sm2, array[6].sm3, array[6].sm4);
  });

  p8.addEventListener('click', () => {
    addevent(array[7].image, array[7].cost, array[7].sm1, array[7].sm2, array[7].sm3, array[7].sm4);
  });


  function addevent(img, amt, sm1, sm2, sm3, sm4) {

    let arrayhtml = `<div class="single-pro-image">
      <img src="img/${img}.jpg" width="100%" id="mainimg" alt="no" class="big-img">
      <div class="small-img-group">
        <div class="small-img-col">
          <img src="img/${sm1}.jpg" width="100%" alt="no" class="small-img">
        </div>

        <div class="small-img-col">
          <img src="img/${sm2}.jpg" width="100%" alt="no"  class="small-img">
        </div>

        <div class="small-img-col">
          <img src="img/${sm3}.jpg" width="100%" alt="no" class="small-img">
        </div>

        <div class="small-img-col">
          <img src="img/${sm4}.jpg" width="100%" alt="no" class="small-img">
        </div>

      </div>
    </div>

    <div class="single-pro-details">
      <h6>Home / T-shirt</h6>
      <h4>Men's Fshion T shirt</h4>
      <h2>$${amt}</h2>
      <select>
        <option >Select size</option>
        <option >XL</option>
        <option >XLL</option>
        <option >Small</option>
        <option >Large</option>

      </select>
      <input type="number" value="1">    <button class="normal">Add To Cart</button>
      <h4>Product Details</h4>
  
      <span> Made With Georgette Fabric - The dress is made with georgette fabric which gives it a very elegant and graceful look. The fabric is smooth and silky. • Short Sleeves - The sleeves are short length, ideal for warm days and nights. • square-Neck - The neckline is a very feminine square-neck. The square-shaped neckline is flattering on all body types.</span>
    </div>`

    document.getElementById("product1").remove();
    document.getElementById("pagination").remove();


    document.querySelector('.under-navbar').innerHTML = arrayhtml;

    changeimg();
  }
  // getElementsByClassName;
  function changeimg() {
    var mainimg = document.getElementById('mainimg')
    var smallimg = document.getElementsByClassName('small-img');


    smallimg[0].onclick = function () {
      mainimg.src = smallimg[0].src;
    }
    smallimg[1].onclick = function () {
      mainimg.src = smallimg[1].src;
    }
    smallimg[2].onclick = function () {
      mainimg.src = smallimg[2].src;
    }
    smallimg[3].onclick = function () {
      mainimg.src = smallimg[3].src;
    }
  }


 