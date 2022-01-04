const registerNavbar = document.querySelector('.register-navbar');
const loginNavbar = document.querySelector('.login-navbar');
const registerBtnForm = document.querySelector('.register-btn-form')
const loginBtnForm = document.querySelector('.login-btn-form')
const modal = document.querySelector('.modal')
const registerForm = document.querySelector('.register-form');
const loginForm = document.querySelector('.login-form');
const modalOverLay = document.querySelector('.modal__overlay')
const backBtnForms = document.querySelectorAll('.auth-form__control-back')
const removeCartItem = document.querySelectorAll('.has-cart__info--item-remove')
const cartItems = document.querySelectorAll('.has-cart__item')

/* Open and close Modal layout */
registerNavbar.addEventListener('click', function() {
    modal.classList.remove('modal-none')
    registerForm.classList.remove('register-form')
    loginForm.classList.add('login-form')
  })
  loginNavbar.addEventListener('click', function() {

      modal.classList.remove('modal-none')
      loginForm.classList.remove('login-form')
      registerForm.classList.add('register-form')
    })

modalOverLay.addEventListener('click', function() {
    modal.classList.add('modal-none')
})

registerBtnForm.addEventListener('click', function() {
    registerForm.classList.add('register-form')
    loginForm.classList.remove('login-form')
})

loginBtnForm.addEventListener('click', function() {
    registerForm.classList.remove('register-form')
    loginForm.classList.add('login-form')
})
backBtnForms.forEach(backBtnForm => {
  backBtnForm.addEventListener('click', function() {

      modal.classList.add('modal-none')
    })
})


/* Remove item cart */
for ( let i = 0; i < cartItems.length; i++) {
    removeCartItem[i].addEventListener('click', function() {
        cartItems[i].classList.add('has-cart__item-remove')
    })
 }
                                  