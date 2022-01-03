

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
        if (e.which === 13 && e.target.value.length > 0) {
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
            listProduct.forEach(function (product) {
              if (product.pName.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1 && e.target.value.length > 1) {
                count++;
                htmlresult += `
                
                    <a href="./sanpham.html" class="header__search-result-item" title="${product.pName}" onclick = "return alert(1)">
                      <img src="${product.img}" alt="" class="header__search-result-item-img">
                      <div class="header__search-result-item-info">
                        <div class="header__search-result-item-name">${product.pName}</div>
                        <div class="header__search-result-item-price">${convertToVnd(product.price.toString())}đ</div>
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


function pushOneProductToLocal(id){
    localStorage.setItem('o',JSON.stringify(id));
}
function getOneProductFromLocal(){
    return JSON.parse(localStorage.getItem('o'));
}
function moveToTimkiem() {
    window.location.href = "./timkiem.html"
   renderSearchResult(searchResult);

}


function handleAddCart(id){
    var listCart = getCartFromLocal();
    var listUser = getUserFromLocal();
    var checkLogin = false;
    var checkCart = false;
    var idLogin  = '';

    // check login
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].login == true && listUser[i].permission == 'customer'){
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
                alert("Đã thêm sản phẩm của đại ca vào giỏ hàng");
            }
        }
    }

}

var countP = 0;
function returnListProduct() {
    let array = new Array;
    
    let listProduct = getProductFromLocal();
    listProduct.forEach(function (product) {
        if (product.pName.toUpperCase().indexOf(searchResult.toUpperCase()) > -1 && searchResult.length > 1)
        {
            countP++;
            array.push(product)     
        }
    })
    return array;
}
let listProduct = returnListProduct();
function renderSearchResult(key) {
    const heading = document.querySelector('.search-result__heading')
    const productsBlock = document.querySelector('.product-render-here')
    const searchInfo = document.querySelector('.search-info')
    var htmlresult = '';
    
    var list = listProduct.slice((key -1)*4,(key - 1)*4 +4);
    for (let i = 0; i < list.length; i++) {
            if (list[i].pName.toUpperCase().indexOf(searchResult.toUpperCase()) > -1 && searchResult.length > 1) {
                htmlresult += `
                   <div class="col l-3 m-4 c-6">
                                <div class="product-item product-item--search-page">
                                    <div class="product-action">
                                        <a href="" class="product-action__link">
                                            <i class="ti-heart product-action__icon"></i>
                                        </a>
                                    </div>
                                    <a href="./sanpham.html" class="product-item__link" onclick = "return pushOneProductToLocal('${list[i].pID}')">
                                        <img src="${list[i].img}" alt="" class="product-item__img">
                                    </a>
                                    <div class="product-item__info product-item__info-action">
                                        <a href="./sanpham.html" class="product-item__name" title="${list[i].pName}" onclick = "return pushOneProductToLocal('${list[i].pID}')">${list[i].pName}</a>
                                        <div class="product-item__price">
                                        <span style="color: var(--primary-color);" class="product-item__price-current">${convertToVnd(list[i].price.toString())}₫</span>
                                        <span class="product-item__price-old">${convertToVnd(list[i].oldPrice.toString())}₫</span>
                                        </div>
                                    </div>
                                    
                                        <button style="background-color: var(--primary-color);" class="add-to-cart__btn add-to-cart__action" onclick = "handleAddCart('${list[i].pID}')">
                                            <i class="add-to-cart__icon ti-shopping-cart"></i>
                                            <span class="add-to-cart__text">Thêm vào giỏ</span>
                                        </button>
                                    
                                </div>
                            </div>
                `
            }
        }
        // $('.search-info').html(`${searchResult} - TEMPLATE STATIONERY`)
        searchInfo.innerHTML = `${searchResult} - TEMPLATE STATIONERY`;
        // $('.search-result__heading').html(`Tìm thấy ${count} kết quả với từ khóa " ${searchResult} "`);
        heading.innerHTML = `Tìm thấy ${countP} kết quả với từ khóa " ${searchResult} "`
        productsBlock.innerHTML = htmlresult
        // $('.product-render-here').html(htmlresult);
    
}


function renderListPage(){
    let page = Math.ceil(listProduct.length/4);
    let html = '';
    for (let i = 1; i <= page; i++){
        if (i == 1)
        {
            html += `<li class="listPage__item active" onclick="renderSearchResult(${i})">${i}</li>`;
        }
        else 
            html += `<li class="listPage__item" onclick="renderSearchResult(${i})">${i}</li>`;
    }
    document.querySelector('.listPage').innerHTML= html;
}

renderSearchResult(1);
renderListPage();

var clas = document.querySelectorAll('.listPage__item')
for (c of clas) {
    c.addEventListener('click', function () {
        for (cc of clas)
        {
            cc.classList.remove('active')
        }
        this.classList.add('active')
    })
}

function convertToVnd(num) {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}


