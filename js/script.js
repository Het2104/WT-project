var app = angular.module('groceryApp', []);
app.controller('cartController', function($scope) {
  // Sample products
  $scope.products = [
      { name: 'Fresh Orange', price: 50, rating: 4.5, image: 'image/product-1.png' },
      { name: 'Fresh Onion', price: 25, rating: 4.5, image: 'image/product-2.png' },
      { name: 'Fresh Meat', price: 90, rating: 4.5, image: 'image/product-3.png' },
      // Add more products here...
  ];

  // Cart items
  $scope.cartItems = [];

  // Function to add product to cart
  $scope.addToCart = function(product) {
      let found = false;
      for (let i = 0; i < $scope.cartItems.length; i++) {
          if ($scope.cartItems[i].name === product.name) {
              $scope.cartItems[i].quantity += 1;
              found = true;
              break;
          }
      }
      if (!found) {
          $scope.cartItems.push({ 
              name: product.name, 
              price: product.price, 
              quantity: 1, 
              image: product.image 
          });
      }
  };

  // Function to calculate total price
  $scope.calculateTotal = function() {
      let total = 0;
      for (let i = 0; i < $scope.cartItems.length; i++) {
          total += $scope.cartItems[i].price * $scope.cartItems[i].quantity;
      }
      return total;
  };

  // Function to remove an item from the cart
  $scope.removeItem = function(index) {
      $scope.cartItems.splice(index, 1);
  };

  // Function to clear the entire cart
  $scope.clearCart = function() {
      $scope.cartItems = [];
  };
});

  
  // Search form interaction
    let searchForm = document.querySelector('.search-form');
    let shoppingCart = document.querySelector('.shopping-cart');
    let loginForm = document.querySelector('.login-form');
    let navbar = document.querySelector('.navbar');

    document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.toggle('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    };

    document.querySelector('#cart-btn').onclick = () => {
        shoppingCart.classList.toggle('active');
        searchForm.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    };

    document.querySelector('#login-btn').onclick = () => {
        loginForm.classList.toggle('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        navbar.classList.remove('active');
    };

    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
    };

    window.onscroll = () => {
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    };

    // Product slider using Swiper
    var swiper = new Swiper(".product-slider", {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 3,
            },
        },
    });

    // Review slider using Swiper
    var swiper = new Swiper(".review-slider", {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 3,
            },
        },
    });

