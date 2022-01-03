//cate header
var cate = document.querySelector('.category')
var cateInside = document.querySelector('.category__inside') 
var overlay = document.querySelector('.overlay-cate');
$('.category').on('click',function(){
  $('.overlay-cate').show();
})   
// cate.addEventListener('click', function () {
//     overlay.style.display = 'block';
// })
$('.overlay-cate').on('click',function(){
  $('.overlay-cate').hide();
});
// overlay.addEventListener('click', function () {
//     overlay.style.display = 'none'
// })

//cate show list
var arrowIcons = document.querySelectorAll('.category__inside-list i')
var cateListHeading = document.querySelectorAll('.category__inside-heading')
for (icon of arrowIcons) {
    icon.onclick = function () {
        this.classList.toggle('cate-list-open')
        var nextSibling = this.nextElementSibling;
        while (nextSibling) {
            nextSibling.classList.toggle('cate-item-open')
            nextSibling = nextSibling.nextElementSibling;
        }
        var prevSibling = this.previousElementSibling;
        while (prevSibling) {
            prevSibling.classList.toggle('change-to-primary-color')
            prevSibling = prevSibling.nextElementSibling;
        }
    }
}

// footer
var footerLists = document.querySelectorAll('.footer__content-heading');
var footerArrows = document.querySelectorAll('.footer__content-heading i')
    for (list of footerLists)
    {
        list.onclick = function () {
            this.nextElementSibling.classList.toggle('js-footer-list')
            this.childNodes[0].classList.toggle('footer__arrow-change')
        }    
    }




function pushOneProductToLocal(id){
    localStorage.setItem('o',JSON.stringify(id));
}
function getOneProductFromLocal(){
    return JSON.parse(localStorage.getItem('o'));
}
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

function renderProduct(){
    let listProduct = getProductFromLocal();
    let id = getOneProductFromLocal();
    for(let i = 0;i<listProduct.length;i++){
        if (id == listProduct[i].pID) {
            document.querySelector('title').innerHTML = listProduct[i].pName;
            document.querySelector('.name-product').innerHTML = listProduct[i].pName;
            document.querySelector('.name-content').innerHTML = listProduct[i].pName;
            document.querySelector('.title-head').innerHTML = listProduct[i].pName;
            document.querySelector('.special-price').innerHTML = `${convertMoney(listProduct[i].price.toString())}₫`;
            document.querySelector('.old-price').innerHTML = `${convertMoney(listProduct[i].oldPrice.toString())}₫`;
            document.querySelector('#picture_main').setAttribute("src",listProduct[i].img);

            document.querySelector('.product-add-cart').innerHTML = 
                        `<button class="btn_add-cart btn-cart-add" type="submit" onclick = "handleAddCart('${listProduct[i].pID}')">
                        Thêm vào giỏ hàng
                        </button>
                        <button class="btn_add-cart btn-buy" type="button">
                         Mua ngay
                         </button>`;
            renderSuggestion(listProduct[i].category);
            
        }
    }
}

renderProduct();
function convertMoney(num) {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}



function renderSuggestion(value){
    let html = "";
    let listProduct = getProductFromLocal();
    for(let i = 0;i<listProduct.length;i++){
        if(listProduct[i].category == value){
            
            html += `<div class="product-item" style="width: 100%; display: inline-block;">
            <div class="product-action">
                <a href="./sanpham.html" class="product-action__link" onclick="pushOneProductToLocal('11')" tabindex="0">
                    <i class="ti-heart product-action__icon"></i>
                    <!-- <i class="fas fa-heart product-action__icon--liked"></i> -->
                </a>
            </div>
            <a href="./sanpham.html" class="product-item__link" onclick="return pushOneProductToLocal('${listProduct[i].pID}')" tabindex="0">
                <img src="${listProduct[i].img}" alt="" class="product-item__img">
            </a>
            <div class="product-item__info product-item__info-action">
                <a href="./sanpham.html" class="product-item__name" title="${listProduct[i].pName}" onclick="return pushOneProductToLocal('11')" tabindex="0">${listProduct[i].pName}</a>
                <div class="product-item__price">
                    <span style="color: var(--primary-color);" class="product-item__price-current">${listProduct[i].price}₫</span>
                    <span class="product-item__price-old">${listProduct[i].oldPrice}₫</span>
                </div>
            </div>
            <button style="background-color: var(--primary-color);" class="add-to-cart__btn add-to-cart__action" tabindex="0" onclick = "handleAddCart('${listProduct[i].pID}')">
                <i class="add-to-cart__icon ti-shopping-cart"></i>
                <span class="add-to-cart__text">Thêm vào giỏ</span>
            </button>
        </div>`;
        }
    }

    $('.product-suggestions').html(html);
}


function renderFeatured(){
    let html = '';
    let listProduct = getProductFromLocal();
    for(let i = 0;i<4;i++){
        html +=` <div class="product-block-item small">
        <a href="./sanpham.html" class="product-transition" onclick = "pushOneProductToLocal('${listProduct[i].pID}')">
          <img src="${listProduct[i].img}" />
        </a>
        <div class="product-info">
          <a href="./sanpham.html" onclick = "pushOneProductToLocal('${listProduct[i].pID}')" >${listProduct[i].pName}</a>
          <div class="product__price">
            <span class="price">${listProduct[i].price}₫</span>
            <span class="old-price">${listProduct[i].oldPrice}₫</span>
          </div>
        </div>
      </div>`;
    }
    document.querySelector('.block-content').innerHTML = html;
}
renderFeatured();




function increaseP(){
    let value = $('#input_value-product').val();
   $('#input_value-product').val(parseInt(value)+1);
}
function reduceP(){

    let value = $('#input_value-product').val();
    if(value<=1){
        alert("Giá trị số lượng không được nhỏ hơn 1");
        $('#input_value-product').val(1);
    }else {
        $('#input_value-product').val(parseInt(value)-1);
    }

}




$(document).ready(function () {
    $('.product-suggestions').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        arrows: false,
        responsive: [
            {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                }
            },
            {
            breakpoint: 739,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false
                }
            }
        ]
    });
})