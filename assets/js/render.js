/*
 __     _     _     _    _______   _          _      _  _         _
||| \  |||   |||   |||  |||___  | |||\      /  |    | | \ \      / /
|||\ \ |||   |||___|||  |||   | | ||\ \    / | |    | |  \ \    / / 
||| \ \|||   || ___ ||  |||   | | |||\ \  / /| |    | |   \ \  / /
|||  \ \||   |||   |||  |||___| | ||| \ \/ / | |    | |    \ \/ /
|_|   \_||   |_|   |_|  |_______| |_|  \__/  |_|    |_|     \__/

*/



function checkEmail(email) { 
 
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    if (!filter.test(email)) { 
             return false; 
    }
    else{ 
            return true;
    } 
} 

function checkAddress(address) { 
    if (address == "") return false;
    else return true;
}

function checkPhone(phone) {  
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (vnf_regex.test(phone) == false) 
        {
            return false;
        }else{
            return true
        } 
};

function ready(){
    $('.animation_loading').css('display','flex');
    $(window).on('load',function(e){
        setTimeout(function(){
            $('.animation_loading').hide();
        },1000)

    })
    scrollTop();
}
function scrollTop(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
    // return false;
}
ready();
function scrollTop2(){
    $('body,html').animate({
        scrollTop: 0
    },0)
}
function createID (){
    var id = "";
    id = Math.random().toString().substr(2,4) +"_"+ String(new Date().getTime()).substr(2,4);
    
    return id;
}


function renderFlashSale(){
    let listProduct = getProductFromLocal();
    var htmlFlash = '';
    listProduct.forEach(function(e,index){
        htmlFlash = htmlFlash + `<div class="carousel-item">
        <div class="product-item">
            <div class="product-action">
                <a href="./sanpham.html" class="product-action__link" onclick = "return pushOneProductToLocal('${e.pID}')">
                    <i class="ti-heart product-action__icon"></i>
                    <!-- <i class="fas fa-heart product-action__icon--liked"></i> -->
                </a>
            </div>
            <a href="./sanpham.html" class="product-item__link" onclick = "return pushOneProductToLocal('${e.pID}')">
                <img src="${listProduct[index].img}" alt=""
                    class="product-item__img">
            </a>
            <div class="product-item__info">
                <a href="./sanpham.html" class="product-item__name" title="${listProduct[index].pName}" onclick = "return pushOneProductToLocal('${e.pID}')">${listProduct[index].pName}</a>
                <div class="product-item__price">
                    <span class="product-item__price-current">${convertMoney(listProduct[index].price.toString())}₫</span>
                    <span class="product-item__price-old">${convertMoney((listProduct[index].price*120/100).toString())}₫</span>
                </div>
            </div>
            <span  class="add-to-cart__link">
                <button type="button" class="add-to-cart__btn" onclick = "handleAddCart('${listProduct[index].pID}')">
                    <i class="add-to-cart__icon ti-shopping-cart"></i>
                    <span class="add-to-cart__text">Thêm vào giỏ</span>
                </button>
            </span>
        </div>
    </div>`;
    }
    )
  $(".carousel").html(htmlFlash);
}

function renderHightlights(){
    var htmlHightlight = '';
    let listProduct = getProductFromLocal();
    let x = 0;
    if(listProduct.length>5){
        x = 5;
    }else {
        x = listProduct.length;
    }
    for(let i = 0;i<x;i++){
        htmlHightlight += `<div class="carousel-2-item">
        <div class="product-item">
            <div class="product-action">
                <a href="./sanpham.html" class="product-action__link" onclick ="return pushOneProductToLocal('${listProduct[i].pID}')">
                    <i class="ti-heart product-action__icon"></i>
                    <!-- <i class="fas fa-heart product-action__icon--liked"></i> -->
                </a>
            </div>
            <a href="./sanpham.html" class="product-item__link" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">
                <img src="${listProduct[i].img}" class = "product-item__img">
            </a>
            <div class="product-item__info product-item__info-action">
                <a href="./sanpham.html" class="product-item__name" title="${listProduct[i].pName}" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">${listProduct[i].pName}</a>
                <div class="product-item__price">
                    <span class="product-item__price-current" style="font-size: 24px;">${convertMoney(listProduct[i].price.toString())}₫</span>
                    <span class="product-item__price-old" style="font-size: 14px;">${convertMoney(listProduct[i].oldPrice.toString())}₫</span>
                </div>
            </div>
            
                <button class="add-to-cart__btn add-to-cart__action"onclick = "handleAddCart('${listProduct[i].pID}')">
                    <i class="add-to-cart__icon ti-shopping-cart"></i>
                    <span class="add-to-cart__text">Thêm vào giỏ</span>
                </button>
            
        </div>
    </div>`;
    }
    $(".carousel-2").html(htmlHightlight);
}
function renderBook_s5(){
    let listProduct = getProductFromLocal();
    let htmlB = '';
    var count = 0;
    for(var i = 0;i<listProduct.length;i++){
            if(listProduct[i].category=='cover'){
                count++;
                htmlB = htmlB + `<div class="product-item">
                <div class="product-action">
                    <a href="./sanpham.html" class="product-action__link" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">
                        <i class="ti-heart product-action__icon"></i>
                        <!-- <i class="fas fa-heart product-action__icon--liked"></i> -->
                    </a>
                </div>
                <a href="./sanpham.html" class="product-item__link" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">
                    <img src="${listProduct[i].img}" alt=""
                        class="product-item__img">
                </a>
                <div class="product-item__info product-item__info-action">
                    <a href="./sanpham.html" class="product-item__name" title="${listProduct[i].pName}" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">${listProduct[i].pName}</a>
                    <div class="product-item__price">
                        <span style="color: var(--primary-color);" class="product-item__price-current">${convertMoney(listProduct[i].price.toString())}₫</span>
                        <span class="product-item__price-old">${convertMoney(listProduct[i].oldPrice.toString())}₫</span>
                    </div>
                </div>
                
                    <button style="background-color: var(--primary-color);" class="add-to-cart__btn add-to-cart__action">
                        <i class="add-to-cart__icon ti-shopping-cart"></i>
                        <span class="add-to-cart__text" onclick = "handleAddCart('${listProduct[i].pID}')">Thêm vào giỏ</span>
                    </button>
                
            </div>`;
            }  
    }
    if (htmlB == '') {
        htmlB += `<div class="grid wide">
                                <div class="tab-6__wrap">
                                    <h2>Không có sản phẩm nào trong danh mục này.</h2>
                                </div>
                            </div>`;
        $('.section-5__tab-1').html(htmlB);
    }
    else  $('.carousel-3').html(htmlB);
}

function renderNote_s5(){
    let listProduct = getProductFromLocal();
    let htmlB = '';
    var count = 0;
    for(var i = 0;i<listProduct.length;i++){
            if(listProduct[i].category=='notebook'){
                count++;
                htmlB = htmlB + `<div class="product-item">
                <div class="product-action">
                    <a href="./sanpham.html" class="product-action__link" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">
                        <i class="ti-heart product-action__icon"></i>
                        <!-- <i class="fas fa-heart product-action__icon--liked"></i> -->
                    </a>
                </div>
                <a href="./sanpham.html" class="product-item__link" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">
                    <img src="${listProduct[i].img}" alt=""
                        class="product-item__img">
                </a>
                <div class="product-item__info product-item__info-action">
                    <a href="./sanpham.html" class="product-item__name" title="${listProduct[i].pName}" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">${listProduct[i].pName}</a>
                    <div class="product-item__price">
                        <span style="color: var(--primary-color);" class="product-item__price-current">${convertMoney(listProduct[i].price.toString())}₫</span>
                        <span class="product-item__price-old">${convertMoney(listProduct[i].oldPrice.toString())}₫</span>
                    </div>
                </div>
                
                    <button style="background-color: var(--primary-color);" class="add-to-cart__btn add-to-cart__action">
                        <i class="add-to-cart__icon ti-shopping-cart"></i>
                        <span class="add-to-cart__text" onclick = "handleAddCart('${listProduct[i].pID}')">Thêm vào giỏ</span>
                    </button>
                
            </div>`;
            }  
    }
    if (htmlB == '') {
        htmlB += `<div class="grid wide">
                                <div class="tab-6__wrap">
                                    <h2>Không có sản phẩm nào trong danh mục này.</h2>
                                </div>
                            </div>`;
        $('.section-5__tab-2').html(htmlB);
    }
    else  $('.carousel-4').html(htmlB);
}

function renderPen_s5(){
    let listProduct = getProductFromLocal();
    let htmlB = '';
    var count = 0;
    for(var i = 0;i<listProduct.length;i++){
            if(listProduct[i].category=='pen' || listProduct[i].category=='correctionpen'){
                count++;
                htmlB = htmlB + `<div class="product-item">
                <div class="product-action">
                    <a href="./sanpham.html" class="product-action__link" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">
                        <i class="ti-heart product-action__icon"></i>
                        <!-- <i class="fas fa-heart product-action__icon--liked"></i> -->
                    </a>
                </div>
                <a href="./sanpham.html" class="product-item__link" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">
                    <img src="${listProduct[i].img}" alt=""
                        class="product-item__img">
                </a>
                <div class="product-item__info product-item__info-action">
                    <a href="./sanpham.html" class="product-item__name" title="${listProduct[i].pName}" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">${listProduct[i].pName}</a>
                    <div class="product-item__price">
                        <span style="color: var(--primary-color);" class="product-item__price-current">${convertMoney(listProduct[i].price.toString())}₫</span>
                        <span class="product-item__price-old">${convertMoney(listProduct[i].oldPrice.toString())}₫</span>
                    </div>
                </div>
                
                    <button style="background-color: var(--primary-color);" class="add-to-cart__btn add-to-cart__action">
                        <i class="add-to-cart__icon ti-shopping-cart"></i>
                        <span class="add-to-cart__text" onclick = "handleAddCart('${listProduct[i].pID}')">Thêm vào giỏ</span>
                    </button>
                
            </div>`;
            }  
    }
    if (htmlB == '') {
        htmlB += `<div class="grid wide">
                                <div class="tab-6__wrap">
                                    <h2>Không có sản phẩm nào trong danh mục này.</h2>
                                </div>
                            </div>`;
        $('.section-5__tab-3').html(htmlB);
    }
    else  $('.carousel-5').html(htmlB);
}

function renderPaper_s5(){
    let listProduct = getProductFromLocal();
    let htmlB = '';
    var count = 0;
    for(var i = 0;i<listProduct.length;i++){
            if(listProduct[i].category=='paper'){
                count++;
                htmlB = htmlB + `<div class="product-item">
                <div class="product-action">
                    <a href="./sanpham.html" class="product-action__link" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">
                        <i class="ti-heart product-action__icon"></i>
                        <!-- <i class="fas fa-heart product-action__icon--liked"></i> -->
                    </a>
                </div>
                <a href="./sanpham.html" class="product-item__link" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">
                    <img src="${listProduct[i].img}" alt=""
                        class="product-item__img">
                </a>
                <div class="product-item__info product-item__info-action">
                    <a href="./sanpham.html" class="product-item__name" title="${listProduct[i].pName}" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">${listProduct[i].pName}</a>
                    <div class="product-item__price">
                        <span style="color: var(--primary-color);" class="product-item__price-current">${convertMoney(listProduct[i].price.toString())}₫</span>
                        <span class="product-item__price-old">${convertMoney(listProduct[i].oldPrice.toString())}₫</span>
                    </div>
                </div>
                
                    <button style="background-color: var(--primary-color);" class="add-to-cart__btn add-to-cart__action">
                        <i class="add-to-cart__icon ti-shopping-cart"></i>
                        <span class="add-to-cart__text" onclick = "handleAddCart('${listProduct[i].pID}')">Thêm vào giỏ</span>
                    </button>
                
            </div>`;
            }  
    }
    if (htmlB == '') {
        htmlB += `<div class="grid wide">
                                <div class="tab-6__wrap">
                                    <h2>Không có sản phẩm nào trong danh mục này.</h2>
                                </div>
                            </div>`;
        $('.section-5__tab-4').html(htmlB);
    }
    else  $('.carousel-6').html(htmlB);
}

function renderColorPen_s5(){
    let listProduct = getProductFromLocal();
    let htmlB = '';
    var count = 0;
    for(var i = 0;i<listProduct.length;i++){
            if(listProduct[i].category=='colorpen'){
                count++;
                htmlB = htmlB + `<div class="product-item">
                <div class="product-action">
                    <a href="./sanpham.html" class="product-action__link" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">
                        <i class="ti-heart product-action__icon"></i>
                        <!-- <i class="fas fa-heart product-action__icon--liked"></i> -->
                    </a>
                </div>
                <a href="./sanpham.html" class="product-item__link" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">
                    <img src="${listProduct[i].img}" alt=""
                        class="product-item__img">
                </a>
                <div class="product-item__info product-item__info-action">
                    <a href="./sanpham.html" class="product-item__name" title="${listProduct[i].pName}" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">${listProduct[i].pName}</a>
                    <div class="product-item__price">
                        <span style="color: var(--primary-color);" class="product-item__price-current">${convertMoney(listProduct[i].price.toString())}₫</span>
                        <span class="product-item__price-old">${convertMoney(listProduct[i].oldPrice.toString())}₫</span>
                    </div>
                </div>
                
                    <button style="background-color: var(--primary-color);" class="add-to-cart__btn add-to-cart__action">
                        <i class="add-to-cart__icon ti-shopping-cart"></i>
                        <span class="add-to-cart__text" onclick = "handleAddCart('${listProduct[i].pID}')">Thêm vào giỏ</span>
                    </button>
                
            </div>`;
            }  
    }
    if (htmlB == '') {
        htmlB += `<div class="grid wide">
                                <div class="tab-6__wrap">
                                    <h2>Không có sản phẩm nào trong danh mục này.</h2>
                                </div>
                            </div>`;
        $('.section-5__tab-5').html(htmlB);
    }
    else  $('.carousel-7').html(htmlB);
}

// function allPPage(){
//     let listProduct = getProductFromLocal();
//     let htmlB = '';
//     var count = 0;
//     for(var i = 0;i<listProduct.length;i++){
//                 htmlB = htmlB + `
//                 <div class="col c-6 m-4 l-4">
//                     <div class="product-item">
//                     <div class="product-action">
//                         <a href="./sanpham.html" class="product-action__link" onclick ="return pushOneProductToLocal('${listProduct[i].pID}')">
//                             <i class="ti-heart product-action__icon"></i>
//                             <!-- <i class="fas fa-heart product-action__icon--liked"></i> -->
//                         </a>
//                     </div>
//                     <a href="./sanpham.html" class="product-item__link" onclick ="return pushOneProductToLocal('${listProduct[i].pID}')">
//                         <img src="${listProduct[i].img}" alt=""
//                             class="product-item__img">
//                     </a>
//                     <div class="product-item__info product-item__info-action">
//                         <a href="./sanpham.html" class="product-item__name" title="${listProduct[i].pName}" onclick = "return pushOneProductToLocal('${listProduct[i].pID}')">${listProduct[i].pName}</a>
//                         <div class="product-item__price">
//                             <span style="color: var(--primary-color);" class="product-item__price-current">${convertMoney(listProduct[i].price.toString())}₫</span>
//                             <span class="product-item__price-old">${convertMoney(listProduct[i].oldPrice.toString())}₫</span>
//                         </div>
//                     </div>
                        
//                             <button style="background-color: var(--primary-color);" class="add-to-cart__btn add-to-cart__action">
//                                 <i class="add-to-cart__icon ti-shopping-cart"></i>
//                                 <span class="add-to-cart__text">Thêm vào giỏ</span>
//                             </button>
                
//                     </div>
//                 </div>
//             `;
//     }
// $('.allProduct .row').html(htmlB);
// }


function handleAddCart(id){
    
    var listCart = getCartFromLocal();
    var listUser = getUserFromLocal();
    var checkLogin = false;
    var checkCart = false;
    var idLogin  = '';

    // check login
    for(let i = 0;i<listUser.length;i++){
       
        if(listUser[i].login == true && listUser[i].permission == 'customer'){
            checkLogin = true;
            for(let j = 0;j<listCart.length;j++){
                if(listCart[j].pID == id && listCart[j].pOfID == listUser[i].id){
                 checkCart = true;   
                }
            }

            if(checkCart == true){
                alert("Sản phẩm đã có trong giỏ hàng");
            }
            if(checkCart == false){
                var obj = {};
                obj.pID = id;
                obj.pOfID = listUser[i].id;
                obj.check = 'false';
                obj.quantity = 1;
                listCart.push(obj);
                pushCartToLocal(listCart);
                renderCartHome();
                renderPayHome();
                handleCountCart();
                alert("Đã thêm sản phẩm của bạn vào giỏ hàng");
            }
        }
    }
if(!checkLogin){
    alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng")
}
}

//get and set localstorage
function  getUserFromLocal(){
    return JSON.parse(localStorage.getItem('u'));
}
function pushUsertoLocal(array){
    localStorage.setItem('u',JSON.stringify(array));
}
function getProductFromLocal(){
    return JSON.parse(localStorage.getItem('p'));
}
function pushProductToLocal(array){
    localStorage.setItem('p',JSON.stringify(array));
}
function getCartFromLocal(){
    return JSON.parse(localStorage.getItem('c'));
}
function pushCartToLocal(array){
    localStorage.setItem('c',JSON.stringify(array));
}
function getInvoiceFromLocal(){
    return JSON.parse(localStorage.getItem('i'));
}
function pushInvoiceToLocal(array){
    localStorage.setItem('i',JSON.stringify(array));
}
 // login and register
       

function renderavthome (){ 
        let listUser = getUserFromLocal();
        let checkid = '';
        for(let i = 0;i<listUser.length;i++){
            if(listUser[i].login == true && listUser[i].permission == 'customer'){
                checkid = listUser[i].id;
            }
        }
        if(checkid!=''){
            for(var i = 0;i<listUser.length;i++){
                if(listUser[i].id  == checkid){  
                    var htmAVT = 
                    `<img src="${listUser[i].img}" alt="" class="avt_user-home-img">
                    
                        <ul class = "avt_user-home-list">
                            <li class = "avt_user-home-item">
                            <a title="Tài khoản của tôi"  href="./profile.html" class="avt_user-home-link">
                                Tài Khoản Của Tôi
                            </a>
                            </li>                      
                            <li class = "avt_user-home-item">
                            
                            <span class="avt_user-home-link log_out-home" onclick = "logout()">Đăng Xuất </span>
                            </li>   
                        </ul>
                    `;
                }
            }
            $('.avt_user-home').html(htmAVT);
            $('.avt_user-home').show();
            $('.header__user-account,.js-click-login,.header__user-account').hide();
            $('.header__user-item--log-in').hover(function(){
                $('.header__user-account,.js-click-login,.header__user-account').hide();
            }); 
        }
    }  

function logout(){
    let listUser = getUserFromLocal();
        for(let i = 0;i<listUser.length;i++){
            listUser[i].login = false;
        }   
        pushUsertoLocal(listUser);
        window.location.reload();
       
}

    $('#log-in-password').on('keydown',function(e){
        if(e.keyCode ==13){
            document.querySelector('#btn_submit-login').click();  
        }

    })

    $('#btn_submit-login').on('click',function(){
        let email = $('#log-in-email').val();
        let password = $('#log-in-password').val();
        let listUser = getUserFromLocal();  
        var check = false;
        var check2 = false;
        

        for(var i = 0;i<listUser.length;i++){    
           if(listUser[i].email == email && listUser[i].password== password){           
                check = true;  // đúng mật khẩu
                listUser[i].login = true;

                //kiểm tra admin

                if(listUser[i].permission ==='admin'){
                    
                    listUser[i].login = true;
                        pushUsertoLocal(listUser);
                     check2 = true;
                        // window.location.replace("./admin.html");
                
                }else {
                 listUser[i].login = true;

                    pushUsertoLocal(listUser);
                    $('.animation_loading').css('display','flex');
                    $('.js-click-login').hide();
                    $('.avt_user-home').show();
                    const modalogin = document.querySelector('.js-modal-login');
                        const modalRegister = document.querySelector('.js-modal-register');
                        modalogin.classList.remove('open');
                        modalRegister.classList.remove('open');
                        setTimeout(function(){   
                            window.location.reload();
                        },1000);
                        
                }
               break;
           }
       }
       if(check == false){
           alert('Vui lòng kiểm tra email và mật khẩu rồi thử lại!');
       }
       if(check2){
           window.location = "./admin.html";
       }
    });


    // register

function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];
        
        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }
        
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            }
        }

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function (rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
               // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                } 
            });
        });
    }

}
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined :  message || 'Vui lòng nhập trường này'
        }
    };
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined :  message || 'Trường này phải là email';
        }
    };
}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined :  message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}

Validator.isNumber = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return isNumber(value) ? undefined :  message || `Trường này phải là số`;
        }
    };
}

function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

document.addEventListener('DOMContentLoaded', function () {
        Validator({
          form: '#formRegister',
          formGroupSelector: '.form-group',
          errorSelector: '.form-message',
          rules: [
              Validator.isRequired('#register-family-name', 'Vui lòng nhập tên của bạn'),
              Validator.isRequired('#register-name', 'Vui lòng nhập tên của bạn'),
              Validator.isEmail('#register-email'),
              Validator.minLength('#register-password', 6),
              Validator.isRequired('#register-phone'),
              Validator.minLength('#register-phone', 10),
              Validator.isNumber('#register-phone')
          ],
          onSubmit: function (data) {
                    registerV();
            }
        });
});
      
            function registerV(){
                var obj = {
                    id: '',
                    email: '',
                    password: '',
                    img: './assets/img/avt/avt_04.jpg',
                    name: '',
                    phone: '',
                    day: '',
                    login: true,
                    permission: 'customer',
                    address: '',
                };
                obj.id = createID();
                obj.name = $('#register-family-name').val() + " " + $("#register-name").val();
                obj.email = $('#register-email').val();
                obj.phone = $('#register-phone').val();
                obj.password = $('#register-password').val();
                let listUser = getUserFromLocal();
                listUser.push(obj);
                pushUsertoLocal(listUser);
                alert("Tạo tài khoản thành công !");
                window.location.reload();
                }




// end login and register

// active class
    var listActive = document.querySelectorAll('.sec-2-link');
    function removeAllActive(){
        for(var i = 0;i<listActive.length;i++){
            listActive[i].classList.remove('active_left');
        }
    }
    for(var i = 0;i<listActive.length;i++){
        listActive[i].onclick = function(e){
            removeAllActive();
            e.target.classList.add('active_left');
        }
    }
// end active class
//show sec-2 tab n
$('.sec-2-tab-1').show();

    function closeAll(){
        $('.sec-2-tab-1,.sec-2-tab-1-1,.sec-2-tab-2,.sec-2-tab-3,.sec-2-tab-4,.sec-2-tab-5,.sec-2-tab-6,.sec-2-tab-7').hide();
    }
    $('.info_link').on('click',function(){
        closeAll();
        $('.sec-2-tab-1').show();
    })
    $('.sec-2-tab-1-edit').on('click',function(){
        closeAll();
        $('.sec-2-tab-1-1').show();
    })
    $('.cart_link').on('click',function(){
        closeAll();
        $('.sec-2-tab-2').show();
    })
    $('.pass_link').on('click',function(){
        closeAll();
        $('.sec-2-tab-3').show();
    })
    $('.address_link').on('click',function(){
        closeAll();
        $('.sec-2-tab-4').show();
    })
    $('.create_link').on('click',function(){
        closeAll();
        $('.sec-2-tab-5').show();
    })
    $('.change_link').on('click',function(){
        closeAll();
        $('.sec-2-tab-6').show();
    })
//end show sec 2 tab n

// render profile
function renderUser(){
    let listUsers = getUserFromLocal();
    for(var i = 0;i<listUsers.length;i++){
        if(listUsers[i].login == true && listUsers[i].permission == "customer"){
            $('#p_name').html(listUsers[i].name);
            $('#p_email').html(listUsers[i].email);
            $('#p_day').html(listUsers[i].day);
            $('#p_phone').html(listUsers[i].phone);
            $('.tab-title').html(listUsers[i].name);
            $('#p_address').html(listUsers[i].address);
            // $('.sec-2-hi').html(`Xin Chào ${listUser[i].name}!`)
        }
    }
}
// end render prfile
function renderChangeUser(){
    let htmlChange = '';
    let listUser = getUserFromLocal();
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].login == true && listUser[i].permission == 'customer'){
            htmlChange = htmlChange + `
            <h2 class="sec-2-tab-1-1-title">
            CHỈNH SỬA THÔNG TIN
        </h2>
        <form action="" class="tab-1-1-from">
            <div class="tab-1-1-group">
                <label for="tab-1-1Name" class="label-tab-1-1">Họ Tên</label>
                <input type="text" name="" value="${listUser[i].name}" id="tab-1-1Name" class="input_tab-1-1">
            </div>
            <div class="tab-1-1-group">
                <label for="tab-1-1phone" class="label-tab-1-1">Số điện thoại</label>
                <input type="text" name="" value="${listUser[i].phone}" id="tab-1-1phone" class="input_tab-1-1">
            </div>
            <div class="tab-1-1-group">
                <label for="tab-1-1email" class="label-tab-1-1">Email</label>
                <input type="text" name="" value="${listUser[i].email}" id="tab-1-1email" class="input_tab-1-1">
            </div>
            <div class="tab-1-1-group">
                <label for="tab-1-day" class="label-tab-1-1">Ngày sinh</label>
                <input type="text" name="" value="${listUser[i].day}" id="tab-1-day" class="input_tab-1-1">
            </div>
            <div class="tab-1-1-group">
                <label for="tab-1-address" class="label-tab-1-1">Địa chỉ</label>
                <input type="text" name="" value="${listUser[i].address}" id="tab-1-address" class="input_tab-1-1">
            </div>
            <span class="btn_submit-changeUser" onclick = "changeUser()">
                Lưu Thay Đổi
            </span>
        </form>
            `;

        }
    }
    $('.sec-2-tab-1-1').html(htmlChange);
}
function changeUser(){
     let listUser = getUserFromLocal();
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].login == true){

            if($('#tab-1-1Name').val()){
                listUser[i].name = $('#tab-1-1Name').val();
            }
            if($('#tab-1-1phone').val()){
                listUser[i].phone = $('#tab-1-1phone').val();
            }
            if($('#tab-1-1email').val()){
                listUser[i].email = $('#tab-1-1email').val();
            }
            if($('#tab-1-day').val()){
                listUser[i].day = $('#tab-1-day').val();
            }
            if($('#tab-1-address').val()){
                listUser[i].address = $('#tab-1-address').val();
            }

        }
    }
    if(checkEmail($('#tab-1-1email').val()) && checkPhone($('#tab-1-1phone').val()) && checkAddress( $('#tab-1-address').val() ) ){

        pushUsertoLocal(listUser);
        alert("Chỉnh sửa thông tin thành công");
        window.location.reload();
    }else if(!checkEmail($('#tab-1-1email').val()) && checkPhone($('#tab-1-1phone').val())){
        alert("Email sai định dạng");
    }else if(checkEmail($('#tab-1-1email').val()) && !checkPhone($('#tab-1-1phone').val())){
        alert("Số điện thoại sai định dạng");
    }else if(checkEmail($('#tab-1-1email').val()) && checkPhone($('#tab-1-1phone').val()) && !checkAddress( $('#tab-1-address').val() ) ){
        alert("Địa chỉ không được để trống!");
    }else {
        alert("Email, số điện thoại và địa chỉ sai định dạng");
    }
}


function changePassword(){
    let oldpass = $('#tab-3-oldPassword').val();
    let newpass = $('#tab-3-newPassword').val();
    let renewpass = $('#tab-3-reNewPassword').val();
    let listUser = getUserFromLocal();
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].login == true){
            if(oldpass == listUser[i].password){
                if(newpass == renewpass){
                    listUser[i].password = newpass;
                    alert('Đổi mật khẩu thành công!')
                    closeAll();
                    $('.sec-2-tab-1').show();
                    window.location.reload();
                }else {
                    alert('Mật khẩu mới không khớp');
                }
            }else {
                alert('Bạn đã nhập mật khẩu cũ sai');
            }
        }
    }

    pushUsertoLocal(listUser);
   
    
}

function handleCountCart(){
    let count = 0;
    let listUser = getUserFromLocal();
    let listCart = getCartFromLocal();
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].login == true && listUser[i].permission == 'customer'){
            for(let j= 0;j<listCart.length;j++){
                if(listCart[j].pOfID == listUser[i].id){
                    count++;
                }
            }

        }
    }
    $('.header__user-count').html(count);
}
function renderCart(){

    let listUser = getUserFromLocal();
    var checkid ='';
    for(var k = 0;k<listUser.length;k++){
        if(listUser[k].login == true && listUser[k].permission == 'customer'){
            checkid = listUser[k].id;
        }
    }
    var htmlCart = '';
    var listCart = getCartFromLocal();
    var listProductsAll = getProductFromLocal();
    for(var i = 0;i<listCart.length;i++){
        if(listCart[i].pOfID == checkid){
            for(var j = 0;j<listProductsAll.length;j++){
                if(listCart[i].pID == listProductsAll[j].pID){
                    if(listCart[i].check == 'true'){
                        htmlCart = htmlCart + `
                        <li class="listCart-item">
                        <div class="row">
                            <div class="col col-xl-4 col-md-12">
                                <div class="Cartname-left">
                                    <div class="row">
                                        <div class="col col-xl-2 flex-cart-mid">
                                            <span class="cartname_checkbox checked" onclick = "checkedCart('${listCart[i].pID}')">
                                                <i class="fas fa-check"></i>
                                            </span>
                                        </div>
                                        <div class="col col-xl-4 flex-cart-mid">
                                            <span class="cartname-img">
                                                <img src="${listProductsAll[j].img}" alt="" class="cartname-img-i">
                                            </span>
                                        </div>
                                        <div class="col col-xl-6 flex-cart-mid">
                                            <span class="cartname-name">
                                                ${listProductsAll[j].pName}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-xl-8 ">
                                <div class="Cartname_right">
                                    <div class="row row-height">
                                        <div class="col col-xl-2 flex-cart-mid">
                                            <span class="cartname-price">
                                                Giá: ${convertMoney(listProductsAll[j].price.toString())}đ
                                            </span>
                                        </div>
                                        <div class="col col-xl-4 flex-cart-mid">
                                            <div class="cartname-quantity flex-cart-mid">
                                                <span class="cartname-quantitiy-btn flex-cart-mid" onclick ="reduce(${listCart[i].pID})"><i class="fas fa-minus-circle"></i></span>
                                                <input type="number" name="number" class="cart_input-quantity" value="${listCart[i].quantity}" class="cartname-quantity-input">
                                                <span class="cartname-quantitiy-btn flex-cart-mid" onclick = "increase(${listCart[i].pID})"><i class="fas fa-plus-circle"></i></span>

                                            </div>
                                        </div>
                                        <div class="col col-xl-3 flex-cart-mid">
                                            <span class="cartname-sumprice">
                                                Tổng: ${convertMoney((listProductsAll[j].price * listCart[i].quantity).toString())}đ
                                            </span>
                                        </div>
                                        <div class="col col-xl-3 flex-cart-mid">
                                                <span class="cartname_delete">Xóa</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li> 
                    `;
                    }else if(listCart[i].check == 'false'){
                        htmlCart = htmlCart + `
                        <li class="listCart-item">
                        <div class="row">
                            <div class="col col-xl-4 col-md-12">
                                <div class="Cartname-left">
                                    <div class="row">
                                        <div class="col col-xl-2 flex-cart-mid">
                                            <span class="cartname_checkbox " onclick = "checkedCart('${listCart[i].pID}')">
                                                <i class="fas fa-check"></i>
                                            </span>
                                        </div>
                                        <div class="col col-xl-4 flex-cart-mid">
                                            <span class="cartname-img">
                                                <img src="${listProductsAll[j].img}" alt="" class="cartname-img-i">
                                            </span>
                                        </div>
                                        <div class="col col-xl-6 flex-cart-mid">
                                            <span class="cartname-name">
                                                ${listProductsAll[j].pName}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-xl-8 ">
                                <div class="Cartname_right">
                                    <div class="row row-height">
                                        <div class="col col-xl-2 flex-cart-mid">
                                            <span class="cartname-price">
                                                Giá: ${convertMoney(listProductsAll[j].price.toString())}đ
                                            </span>
                                        </div>
                                        <div class="col col-xl-4 flex-cart-mid">
                                            <div class="cartname-quantity flex-cart-mid">
                                                <span class="cartname-quantitiy-btn flex-cart-mid" onclick = "reduce(${listCart[i].pID})" = ><i class="fas fa-minus-circle"></i></span>
                                                <input type="number" name="number" class="cart_input-quantity" value="${listCart[i].quantity}" class="cartname-quantity-input">
                                                <span class="cartname-quantitiy-btn flex-cart-mid" onclick = "increase(${listCart[i].pID})"><i class="fas fa-plus-circle"></i></span>

                                            </div>
                                        </div>
                                        <div class="col col-xl-3 flex-cart-mid">
                                            <span class="cartname-sumprice">
                                                Tổng: ${convertMoney((listProductsAll[j].price * listCart[i].quantity).toString())}đ
                                            </span>
                                        </div>
                                        <div class="col col-xl-3 flex-cart-mid">
                                                <span class="cartname_delete">Xóa</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li> 
                        `;
                    } 
                }
            }
        }
    }
    // let htmlCartHead = `<tr>
    //                         <th></th>
    //                         <th class="sec-2-cart-attribute">Sản phẩm</th>
    //                         <th class="sec-2-cart-attribute">Đơn giá</th>
    //                         <th class="sec-2-cart-attribute">Số lượng</th>
    //                         <th class="sec-2-cart-attribute">Số tiền</th>
    //                         <th class="sec-2-cart-attribute">Thao tác</th>
    //                     </tr>`;
    // htmlCartHead = htmlCartHead + htmlCart;
  
    $('.listCart-list').html(htmlCart);
}
function renderCartHome(){
    let listUser = getUserFromLocal();
    var checkid ='';
    for(var k = 0;k<listUser.length;k++){
        if(listUser[k].login == true && listUser[k].permission == "customer"){
            checkid = listUser[k].id;
        }
    }
    var htmlCart = '';
    var listCart = getCartFromLocal();
    var listProductsAll = getProductFromLocal();
    for(var i = 0;i<listCart.length;i++){
        if(listCart[i].pOfID == checkid){
            for(var j = 0;j<listProductsAll.length;j++){
                if(listCart[i].pID == listProductsAll[j].pID){
                    htmlCart = htmlCart + `
                    <li class="slide-in-cart__item">
                <div class="cart__item-wrap">
                    <a href="" class="cart__item-img-link">
                        <img src="${listProductsAll[j].img}" alt="" class="cart__item-img">
                    </a>
                    <div class="cart__item-info">
                        <a href="" class="cart__item-name">${listProductsAll[j].pName}</a>
                        <div class="cart-item__numbers">
                            <div class="cart__item-quantity">
                                <span>Số lượng</span>
                                <div class="cart__item-quantity-adjustment">
                                    <button type="button" class="cart-btn-reset cart__item-quantity-adjustment--minus" onclick = "reduce(${listCart[i].pID})">-</button>
                                    <input type="number" class="cart-btn-reset cart__item-quantity-adjustment-input" value="${listCart[i].quantity}">
                                    <button type="button" class="cart-btn-reset cart__item-quantity-adjustment--add" onclick = "increase(${listCart[i].pID})">+</button>
                                </div>
                            </div>
                            <div class="cart__item-price">
                                <span class="cart__item-price-numbers">${convertMoney(listProductsAll[j].price.toString())}₫</span>
                                <span class="cart__item-remove" onclick = "deleteCart('${listCart[i].pID}')">Xóa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>`;
                }
            }
        }
    }
    $('.cart__list').html(htmlCart);
}
function renderPayHome(){
    let listUser = getUserFromLocal();
    let listCart = getCartFromLocal();
    let checkid;
    for(var l = 0;l<listUser.length;l++){
        if(listUser[l].login == true && listUser[l].permission == 'customer'){
            checkid = listUser[l].id;
        }
    }
    var price = 0;

    for(var i = 0;i<listCart.length;i++){
        if(listCart[i].pOfID == checkid){
            for(var j = 0;j<listProducts.length;j++){
                if(listCart[i].pID == listProducts[j].pID){  
                        price = price + listCart[i].quantity* listProducts[j].price;
                }
            }
        }
    }
    var htmlsPay = `<div class="cart__pay-totalPrice">
                        <div class="cart__pay-totalPrice-text">Tổng tiền</div>
                        <div class="cart__pay-totalPrice-number">${convertMoney(price.toString())}₫</div>
                    </div>
                    <a class = "cart__pay-btn" onclick = "deleteOnPaying()"> Đặt hàng</a>
                   `;

        $('.cart__pay').html(htmlsPay);
}

function deleteOnPaying() {
    let listCart = getCartFromLocal();
    let listUser = getUserFromLocal();
    let listInvoice = getInvoiceFromLocal();
    let checkid;
    for(var l = 0;l<listUser.length;l++){
        if(listUser[l].login == true && listUser[l].permission == 'customer'){
            checkid = listUser[l].id;
        }
    }

    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    let checkCart = 0;
    var length69 = listCart.length;
    for (var i = 0; i < length69; ++i)
    {
        if(listCart[i].pOfID == checkid){
            var obj = {};
            obj.pID = listCart[i].pID;
            obj.pOfID = listCart[i].pOfID;
            obj.quantity = listCart[i].quantity;
            obj.date = date;
            listInvoice.push(obj);
            listCart.splice(i, 1);
            length69 = listCart.length;
            i -= 1;
            checkCart = 1;
        }
    }

    if (checkCart == 1) {
        pushCartToLocal(listCart);
        pushInvoiceToLocal(listInvoice);
        renderCartHome();
        renderPayHome();
        handleCountCart();
        alert("Đã đặt hàng! Hãy vào \"Tài khoản của tôi\" -> \"Đơn đã mua\" để xem lại các sản phẩm đã đặt");
    }
    else {
        alert("Chưa mua hàng mà sao đặt được!")
    }
            
}


function createProduct(){
    let listUser = getUserFromLocal();
    let listProduct = getProductFromLocal();
    let obj = {};
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].login == true){
            if($('#pName').val()){
                obj.pName = $('#pName').val();
            }
            //img files
            
            var testimg = document.querySelector('#pImgfile');
            if(testimg.value){ 
                 const fileRead = new FileReader();
                 const filesupload = testimg.files;
                 obj.img = '';
                 fileRead.readAsDataURL(filesupload[0]);
                 fileRead.onload = function(e){
                     const img = e.target.result;
                     obj.img = img;
                  }
            }
            // img link
            if(obj.img != ''){
                if($('#pImgLink').val()){
                    obj.img = $('#pImgLink').val();
                }
            }
            //
            if($('#pPrice').val()){
                obj.price = $('#pPrice').val();
            } 
            if($('#pQuantity').val()){
                obj.quantity = $('#pQuantity').val();
            }
            if($('#pCategory').val()){
                alert($('#pCategory').val())
                if($('#pCategory').val()  == 1){
                    obj.category = '';
                }
                if($('#pCategory').val()  == 2){
                    obj.category = 'book';
                }
                if($('#pCategory').val()  == 3){
                    obj.category = 'note';
                }
                if($('#pCategory').val()  == 4){
                    obj.category = 'pen';
                }
                if($('#pCategory').val()  == 5){
                    obj.category = 'paper';
                }
                if($('#pCategory').val()  == 6){
                    obj.category = 'cover';
                }
                if($('#pCategory').val()  == 7){
                    obj.category = 'other';
                }

            }

        }
    }
    $('#testspan').html($('#pInfo').val());
}
function buyProduct(id){

}

function renderChangeProduct(){
    let listProduct = getProductFromLocal();
    let listUser = getUserFromLocal();
    let htmlChangeProduct = '';

    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].login == true){
            
            for(let j = 0;j<listProduct.length;j++){
                
                if(listProduct[j].pOfUser == listUser[i].id){
                    
                    htmlChangeProduct = htmlChangeProduct+ `<li class="sec-2-tab-6-item">
                    <div class="row">
                        <div class="col col-xl-8">
                            <div class="tab-6-info">
                                
                                <span class="tab-6-info-image">
                                    <img src="${listProduct[j].img}" alt="" class="tab-6-img">
                                </span>
                                <span class="tab-6-pName">
                                    ${listProduct[j].pName}
                                </span>
                            </div>
                        </div>
                  
                        <div class="col col-xl-4 tab-6-align">
                            <div class="tab-6-operation">
                                <span class="tab-6-operation-chan" onclick = "renderFormChangeProduct('${listProduct[j].pID}')">
                                    Chỉnh Sửa
                                </span>
                                <span class="tab-6-operation-del" onclick = "deleteProduct(${listProduct[i].pID})">
                                    Xóa
                                </span>
                            </div>
                        </div>
                    </div>
                </li>`;
                }
            }
        }
    }
    $('.sec-2-tab-6-list').html(htmlChangeProduct);
}

function renderFormChangeProduct(id){
    
    closeAll();
    let htmlChPr = '';
    let listProduct = getProductFromLocal();
  
    for(let i = 0;i<listProduct.length;i++){
        if(listProduct[i].pID == id){
            
            htmlChPr = htmlChPr + `<div class="tab-5-form-group">
            <label for="pName" class="form_label">Tên sản phẩm</label>
            <input type="text" name="" id="pName-change" class="input_control" value = "${listProduct[i].pName}">
            <span class="tab-5-form-message"></span>
        </div>
        <div class="tab-5-form-group">
            <label for="pImgfile" class="form_label">Hình ảnh</label>
            <input type="file" name="" id="pImgfile-change" class="file_control">
            <span class="tab-5-form-message"></span>
        </div>
        <div class="tab-5-form-group">
            <label for="pImgLink" class="form_label">Hoặc đường dẫn của sản phẩm</label>
            <input type="text" name="" id="pImgLink-change" class="input_control">
            <span class="tab-5-form-message"></span>
        </div>
        <div class="tab-5-form-group">
            <label for="pPrice" class="form_label">Giá bán</label>
            <input type="number" min="0" name="" id="pPrice-change" class="input_control" value = "${convertMoney(listProduct[i].price.toString())}">
            <span class="tab-5-form-message"></span>
        </div>
        <div class="tab-5-form-group">
            <label for="pQuantity" class="form_label">Số lượng</label>
            <input type="number" min = "0" name="" id="pQuantity-change" class="input_control" value = "${listProduct[i].quantity}">
            <span class="tab-5-form-message"></span>
        </div>
        <div class="tab-5-form-group">
            <label for="pCategory" class="form_label">Phân loại sản phẩm</label>
            <select name="" id="pCategory-change" class="option_control">
                <option value="0" class="category_option">Chọn ngành hàng phù hợp</option>

                <option value="1" class="category_option">Sách</option>
                <option value="2" class="category_option">Tập vở</option>
                <option value="3" class="category_option">Bút</option>
                <option value="4" class="category_option">Giấy các loại</option>
                <option value="5" class="category_option">Bìa bao</option>
                <option value="6" class="category_option">Dụng cụ khác</option>
            </select>
            <span class="tab-5-form-message"></span>
        </div>
        <div class="tab-5-form-group">
            <label for="pInfo" class="form_label">Thông tin sản phẩm</label>
            <textarea name="" id="pInfo-change" cols="30" rows="10" class="textarea_control"></textarea>
            <span class="tab-5-form-message"></span>
        </div>
        <button type="button" class="btn_create-product" onclick = "handleChangeProduct('${listProduct[i].pID}')">Lưu Thay Đổi</button>`;
        }

    }
$('.sec-2-tab-7').show();
$('.sec-2-tab-7-form').html(htmlChPr);

}



function handleChangeProduct(id){
    let textarea = '';
    let listProduct  = getProductFromLocal();

    
    
    for(let i = 0;i<listProduct.length;i++){
        if(listProduct[i].pID == id){
            if($('#pName-change').val()){
                listProduct[i].pName = $('#pName-change').val();
            }
            if($('#pPrice-change').val()){
                listProduct[i].price = $('#pPrice-change').val();
            }
            if($('#pQuantity-change').val()){
                listProduct[i].quantity = $('#pQuantity-change').val();
            }
            if($('#pCategory-change').val()){
                if($('#pCategory-change').val() == 1){
                    listProduct[i].category = 'book';
                }
                if($('#pCategory-change').val() == 2){
                    listProduct[i].category = 'note';
                }
                if($('#pCategory-change').val() == 3){
                    listProduct[i].category = 'pen';
                }
                if($('#pCategory-change').val() == 4){
                    listProduct[i].category = 'paper';
                }
                if($('#pCategory-change').val() == 5){
                    listProduct[i].category = 'cover';
                }
                if($('#pCategory-change').val() == 6){
                    listProduct[i].category = 'other';
                }
                
            }
            if($('#pInfo-change').val()=='            '){
                console.log('enter');
            }
           
            
        }

    }

}
renderChangeProduct();

function deleteProduct(idProduct){
    let listProduct = getProductFromLocal();
    for(let i = 0;i<listProduct.length;i++){
        if(listProduct[i].pID == idProduct){
            listProduct.splice(i,1);
            pushProductToLocal(listProduct);
            renderChangeProduct();
        }
    }
}
function renderPay(){
    let listUser = getUserFromLocal();
    let checkid;
    for(var l = 0;l<listUser.length;l++){
        if(listUser[l].login == true){
            checkid = listUser[l].id;
        }
    }
    var price = 0;
    var quantityProduct = new Number;
    let listCart = getCartFromLocal();
    let listProducts = getProductFromLocal();
    listCart.forEach(function(e){
        if(e.pOfID ==checkid){
            if(e.check =="true"){
                quantityProduct = quantityProduct + parseInt(e.quantity,10) ;
            }
        }
    });

    for(var i = 0;i<listCart.length;i++){
        if(listCart[i].pOfID == checkid){
            for(var j = 0;j<listProducts.length;j++){
                if(listCart[i].pID == listProducts[j].pID){
                    if(listCart[i].check=="true"){
                        price = price + listCart[i].quantity* listProducts[j].price;
                    } 
                }
            }
        }
    }
    var htmlsPay = `<div class="sec-2-pay-left">
                        <div class="sec-2-left-inp">
                            
                        </div>
                        <span class="sec-2-left-description">Stationery</span>
                    </div>
                    <div class="sec-2-pay-right">
                         <span class="sec-2-pay-description">
                            Tổng thanh toán ( 
            
                             </span>
                         <span class="sec-2-pay-description p_quantity">&nbsp${quantityProduct}</span>
                         <span class="sec-2-pay-description">&nbsp sản phẩm)</span>
       
                        <span class="sec-2-pay-price">
                         ${price}đ
                         </span>
                        <a class="sec-2-pay-link">
                         Mua hàng
                         </a>
                        </div>`;

        $('.sec-2-pay').html(htmlsPay);
        
}

function increase(idProduct){
    let listCart = getCartFromLocal();
    let listProduct = getProductFromLocal();
    for(var i = 0;i<listCart.length;i++){
        if(listCart[i].pID == idProduct){
            listCart[i].quantity++;
            for(let j = 0;j<listProduct.length;j++){
                if(listProduct[j].pID == idProduct){
                    if(listCart[i].quantity > listProduct[j].quantity){
                        listCart[i].quantity = listProduct[j].quantity;
                        alert('Đã vượt quá số lượng sản phẩm hiện có!');
                    }
                }
            }
        }
    }
    pushCartToLocal(listCart);
    renderCart();
    renderPay();
    renderCartHome();
    renderPayHome();
}

function reduce(idProduct){
    let listCart = getCartFromLocal();
    for(var i = 0;i<listCart.length;i++){
        if(listCart[i].pID == idProduct){
            listCart[i].quantity--;
            if(listCart[i].quantity<0){
                listCart[i].quantity = 0;
                alert('Số lượng không thể nhỏ hơn 0');
            }
        }
    }
    pushCartToLocal(listCart);
    renderCart();
    renderCartHome();
    renderPayHome();
    renderPay();
}
function checkedCart(id){
    let listCart = getCartFromLocal();
    for(var i = 0;i<listCart.length;i++){
        if(listCart[i].pID == id){
            if(listCart[i].check=='true'){
                listCart[i].check = 'false';
            }else {
                listCart[i].check = 'true';  
            }
        }
    }
    pushCartToLocal(listCart);
    renderCart();
    renderPay();
}
function deleteCart(id){
    let listCart = getCartFromLocal();
    for(let i = 0;i<listCart.length;i++){
        if(listCart[i].pID == id){
            listCart.splice(i,1);
        }
    }
    pushCartToLocal(listCart);
    renderCart();
    renderCartHome();
    renderPayHome();
    handleCountCart();
}



function startProfile(){
    renderPayHome();
    renderCartHome();
    renderPay();
    renderavthome();
    renderUser();
    renderCart();  
    renderFlashSale();
    renderBook_s5();
    renderNote_s5();
    renderPen_s5();
    renderPaper_s5();
    renderColorPen_s5();
    renderChangeUser();
    handleCountCart();
    renderHightlights();
   
}
startProfile();



$('.user_menu-icon').on('click',function(){
    if($('.sec-2-list').css('display') == 'none'){
        $('.sec-2-list').show();
    }else {
        $('.sec-2-list').hide();
    }
})


// $('.js-click-login').on('click',function(){
//     $('.js-modal-login').css('display','flex');
//     $('.js-modal-register').hide();

// })
// $('.js-click-register').on('click',function(){
//     $('.js-modal-register').css('display','flex');
//     $('.js-modal-login').hide();
// })
// $('.js-modal-close').on('click',function(){
//     alert(1);
// });



    const modalogin = document.querySelector('.js-modal-login')
    const modalRegister = document.querySelector('.js-modal-register')
    const modalContainers = document.querySelectorAll('.js-modal-container')
    const loginLinks = document.querySelectorAll('.js-click-login')
    const registerLinks = document.querySelectorAll('.js-click-register')
    const modalCloses = document.querySelectorAll('.js-modal-close')
    function showLogin() {
        modalRegister.classList.remove('open')
        modalogin.classList.add('open')
    }
    function showRegister() {
        modalogin.classList.remove('open')
        modalRegister.classList.add('open')
    }
    function hide() {
        modalogin.classList.remove('open')
        modalRegister.classList.remove('open')
    }
    for (const loginLink of loginLinks)
    {
        loginLink.addEventListener('click', showLogin)
    }
    for (const registerLink of registerLinks)
    {
        registerLink.addEventListener('click', showRegister)
    }
    for (const modalClose of modalCloses)
    {
        modalClose.addEventListener('click', hide)
    }
    for (const modalContainer of modalContainers)
    {
        modalContainer.addEventListener('click', function (e) {
            e.stopPropagation();
        })
    }


    

    // search main 
    //search

//search
var searchResult = sessionStorage.searchValue;

function searchControl() {
    var resultBlock = document.querySelector('.header__search-result')
    var inputElement = document.querySelector('.header__search-input')
    var bodyElement = document.getElementsByTagName('body')[0]
    inputElement.onclick = function (e) {
        e.stopPropagation();
        resultBlock.classList.add('search-open')
    }
    bodyElement.onclick = function () {
        resultBlock.classList.remove('search-open')
    }
}
searchControl();

function search() {
    var resultBlock = document.querySelector('.header__search-result')
    var inputElement = document.querySelector('.header__search-input')
    var htmlresult = '';
    var count = 0;
    inputElement.onkeyup = function (e) {
        sessionStorage.searchValue = e.target.value
        if (e.which === 13) {
            moveToTimkiem();
        }
        setTimeout(function () {
            if (e.target.value.length > 1) {
                htmlresult = `<div class="loader-search">
                  <div class="lds-ripple"><div></div><div></div></div>
                </div>`
                resultBlock.innerHTML = htmlresult
            }
            setTimeout(function () {
          count = 0;
          let listProduct = getProductFromLocal();
          
            htmlresult = ''
            listProduct.forEach(function (product,index) {
                
              if (product.pName.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1 && e.target.value.length > 1) {
                count++;
                htmlresult += `
                    
                    <a href="./sanpham.html" class="header__search-result-item" title="${product.pName}" onclick = "return renderOneProduct('${product.pID}')">
                      <img src="${product.img}" alt="" class="header__search-result-item-img">
                      <div class="header__search-result-item-info">
                        <div class="header__search-result-item-name">${product.pName}</div>
                        <div class="header__search-result-item-price">${convertMoney(product.price.toString())}đ</div>
                      </div>
                    </a>
                  `
                }
              })
              if (count > 0 && e.target.value.length > 1) {
                htmlresult = `<div class="header__search-result-found">${htmlresult}<a href="/timkiem.html" class="header__search-show-all-btn">Xem tất cả</a></div>`
              }
              else if (e.target.value != '' && e.target.value.length > 1) {
                htmlresult = `<div class="header__search-result-not-found">Không có kết quả tìm kiếm</div>`
              }
              resultBlock.innerHTML = htmlresult
        }, 1000)
        }, 500)

    }
}

search();
function moveToTimkiem() {
    window.location.href = "./timkiem.html"
}

// function renderSearchResult(searchResult) {
//     const heading = document.querySelector('.search-result__heading')
//     const productsBlock = document.querySelector('.product-render-here')
//     const searchInfo = document.querySelector('.search-info')
//     var htmlresult = '';
//     var count = 0;
    
//         htmlresult = ''
//         let listProduct = getProductFromLocal();
//         listProduct.forEach(function (product) {
//             if (product.pName.toUpperCase().indexOf(searchResult.toUpperCase()) > -1 && searchResult.length > 1) {
//                 count++;
//                 htmlresult += `
//                    <div class="col l-3 m-4 c-6">
//                                 <div class="product-item product-item--search-page">
//                                     <div class="product-action">
//                                         <a href="" class="product-action__link">
//                                             <i class="ti-heart product-action__icon"></i>
//                                         </a>
//                                     </div>
//                                     <a href="" class="product-item__link">
//                                         <img src="${product.img}" alt="" class="product-item__img">
//                                     </a>
//                                     <div class="product-item__info product-item__info-action">
//                                         <a href="" class="product-item__name" title="${product.pName}">${product.pName}</a>
//                                         <div class="product-item__price">
//                                         <span style="color: var(--primary-color);" class="product-item__price-current">${convertToVnd(product.price.toString())}₫</span>
//                                         <span class="product-item__price-old">${convertToVnd(product.oldPrice.toString())}₫</span>
//                                         </div>
//                                     </div>
//                                     <a href="" class="add-to-cart__link add-to-cart__action">
//                                         <button style="background-color: var(--primary-color);" class="add-to-cart__btn">
//                                         <i class="add-to-cart__icon ti-shopping-cart"></i>
//                                         <span class="add-to-cart__text">Thêm vào giỏ</span>
//                                         </button>
//                                     </a>
//                                 </div>
//                             </div>
//                 `
//             }
//         })
//         $('.search-info').html(`${searchResult} - TEMPLATE STATIONERY`)
//         // searchInfo.innerHTML = `${searchResult} - TEMPLATE STATIONERY`;
//         $('.search-result__heading').html(`Tìm thấy ${count} kết quả với từ khóa " ${searchResult} "`);
//         // heading.innerHTML = `Tìm thấy ${count} kết quả với từ khóa " ${searchResult} "`
//         // productsBlock.innerHTML = htmlresult
//         $('.product-render-here').html(htmlresult);
    
// }
// renderSearchResult(searchResult);


function convertMoney(num) {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}




//render ->> one product

function pushOneProductToLocal(id){
    localStorage.setItem('o',JSON.stringify(id));
}
function getOneProductFromLocal(){
    return JSON.parse(localStorage.getItem('o'));
}

function renderOneProduct(id){
    
    pushOneProductToLocal(id);
}




