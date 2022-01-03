

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
function getCategoryFromLocal(){
    return JSON.parse(localStorage.getItem('cate'));
}
function pushCategoryToLocal(array){
    localStorage.setItem('cate',JSON.stringify(array));
}
function pushCategoryClickToLocal(value){
    localStorage.setItem('cClick',JSON.stringify(value));
}
function getCategoryClickFromLocal(){
    return JSON.parse(localStorage.getItem('cClick'));
}





// 


// hàm kiểm tra danh mục   nếu mảng danh mục có phần tử thì trả về một mảng mới phần tử đó
function returnListProduct(){
    let array = new Array;
    
    let listCategory = getCategoryFromLocal();
    if(listCategory.length === 0){
        array = getProductFromLocal();
    }else {
        let listProduct2 = getProductFromLocal();
        for(let i = 0;i<listCategory.length;i++){
            for(let j = 0;j<listProduct2.length;j++){
                if(listProduct2[j].category == listCategory[i]){
                    array.push(listProduct2[j])
                }
            }
        }
        
    }
    return array;
}



function renderProductPage(key){

    let listProduct = returnListProduct();
    let currentPage = key;
    let html = "";
    var list = listProduct.slice(
        (currentPage -1)*12,
        (currentPage -1)*12 +12
    );
    for(let i = 0;i<list.length;i++){
        html +=`
        <div class="col c-6 m-4 l-4">
        <div class="product-item">
        <div class="product-action">
            <a href="./sanpham.html" class="product-action__link" onclick ="return pushOneProductToLocal('${list[i].pID}')">
                <i class="ti-heart product-action__icon"></i>
                <!-- <i class="fas fa-heart product-action__icon--liked"></i> -->
            </a>
        </div>
        <a href="./sanpham.html" class="product-item__link" onclick ="return pushOneProductToLocal('${list[i].pID}')">
            <img src="${list[i].img}" alt=""
                class="product-item__img">
        </a>
        <div class="product-item__info product-item__info-action">
            <a href="./sanpham.html" class="product-item__name" title="${list[i].pName}" onclick = "return pushOneProductToLocal('${list[i].pID}')">${list[i].pName}</a>
            <div class="product-item__price">
                <span style="color: var(--primary-color);" class="product-item__price-current">${convertMoney(list[i].price.toString())}₫</span>
                <span class="product-item__price-old">${convertMoney(list[i].oldPrice.toString())}₫</span>
            </div>
        </div>
            
                <button style="background-color: var(--primary-color);" class="add-to-cart__btn add-to-cart__action" onclick = "handleAddCart('${list[i].pID}')">
                    <i class="add-to-cart__icon ti-shopping-cart"></i>
                    <span class="add-to-cart__text">Thêm vào giỏ</span>
                </button>
    
        </div>
    </div>
        `;
    }

document.querySelector('.renderPageProduct').innerHTML = html;
}


function renderListPage(){
    let listProduct = returnListProduct();
    let page = Math.ceil(listProduct.length/12);
    let html = '';
    for(let i = 1;i<=page;i++){
        html+= `<li class="listPageNumber-item" onclick = "renderProductPage(${i})">${i}</li>`;
    }
    document.querySelector('.listPageNumber').innerHTML= html;
}

renderProductPage(1);
renderListPage();



//  tăng giảm theo giá
function ascending(){
    var listProduct = getProductFromLocal();
    for(let i = 0;i<listProduct.length-1;i++){
        for(let j = i+1;j<listProduct.length;j++){
            if(listProduct[i].price > listProduct[j].price){
                let obj = {};
                obj = listProduct[i];
                listProduct[i] = listProduct[j];
                listProduct[j] = obj;
            }
        }
    }
        return listProduct;

}
function descending(){
    let listProduct = getProductFromLocal();
    for(let i = 0;i<listProduct.length-1;i++){
        for(let j = i+1;j<listProduct.length;j++){
            if(listProduct[i].price < listProduct[j].price){
                let obj = {};
                obj = listProduct[i];
                listProduct[i] = listProduct[j];
                listProduct[j] = obj;
            }
        }
    }
   return listProduct;
}
function renderAscendingPage(key){
    scrollTop2();
    let listProduct = ascending();
    let currentPage = key;
    let html = "";

    var list = listProduct.slice(
    (currentPage -1)*12,
    (currentPage -1)*12 +12
    );
    for(let i = 0;i<list.length;i++){
        html +=`
        <div class="col c-6 m-4 l-4">
        <div class="product-item">
        <div class="product-action">
            <a href="./sanpham.html" class="product-action__link" onclick ="return pushOneProductToLocal('${list[i].pID}')">
                <i class="ti-heart product-action__icon"></i>
                <!-- <i class="fas fa-heart product-action__icon--liked"></i> -->
            </a>
        </div>
        <a href="./sanpham.html" class="product-item__link" onclick ="return pushOneProductToLocal('${list[i].pID}')">
            <img src="${list[i].img}" alt=""
                class="product-item__img">
        </a>
        <div class="product-item__info product-item__info-action">
            <a href="./sanpham.html" class="product-item__name" title="${list[i].pName}" onclick = "return pushOneProductToLocal('${list[i].pID}')">${list[i].pName}</a>
            <div class="product-item__price">
                <span style="color: var(--primary-color);" class="product-item__price-current">${convertMoney(list[i].price.toString())}₫</span>
                <span class="product-item__price-old">${convertMoney(list[i].oldPrice.toString())}₫</span>
            </div>
        </div>
            
                <button style="background-color: var(--primary-color);" class="add-to-cart__btn add-to-cart__action" onclick = "handleAddCart('${list[i].pID}')">
                    <i class="add-to-cart__icon ti-shopping-cart"></i>
                    <span class="add-to-cart__text">Thêm vào giỏ</span>
                </button>
    
        </div>
    </div>
        `;
    }

document.querySelector('.renderPageProduct').innerHTML = html;
}
function renderDescendingPage(key){
    scrollTop2();
    let listProduct = descending();
    let currentPage = key;
    let html = "";

    var list = listProduct.slice(
    (currentPage -1)*12,
    (currentPage -1)*12 +12
    );
    for(let i = 0;i<list.length;i++){
        html +=`
        <div class="col c-6 m-4 l-4">
        <div class="product-item">
        <div class="product-action">
            <a href="./sanpham.html" class="product-action__link" onclick ="return pushOneProductToLocal('${list[i].pID}')">
                <i class="ti-heart product-action__icon"></i>
                <!-- <i class="fas fa-heart product-action__icon--liked"></i> -->
            </a>
        </div>
        <a href="./sanpham.html" class="product-item__link" onclick ="return pushOneProductToLocal('${list[i].pID}')">
            <img src="${list[i].img}" alt=""
                class="product-item__img">
        </a>
        <div class="product-item__info product-item__info-action">
            <a href="./sanpham.html" class="product-item__name" title="${list[i].pName}" onclick = "return pushOneProductToLocal('${list[i].pID}')">${list[i].pName}</a>
            <div class="product-item__price">
                <span style="color: var(--primary-color);" class="product-item__price-current">${convertMoney(list[i].price.toString())}₫</span>
                <span class="product-item__price-old">${convertMoney(list[i].oldPrice.toString())}₫</span>
            </div>
        </div>
            
                <button style="background-color: var(--primary-color);" class="add-to-cart__btn add-to-cart__action" onclick = "handleAddCart('${list[i].pID}')">
                    <i class="add-to-cart__icon ti-shopping-cart"></i>
                    <span class="add-to-cart__text">Thêm vào giỏ</span>
                </button>
    
        </div>
    </div>
        `;
    }

document.querySelector('.renderPageProduct').innerHTML = html;
}



function renderListPageAscending(){
    let listProduct = getProductFromLocal();
    let page = Math.ceil(listProduct.length/12);
    let html = '';
    for(let i = 1;i<=page;i++){
        html+= `<li class="listPageNumber-item" onclick = "renderAscendingPage(${i})">${i}</li>`;
    }
    document.querySelector('.listPageNumber').innerHTML= html;
}
function renderListPageDescending(){
    let listProduct = getProductFromLocal();
    let page = Math.ceil(listProduct.length/12);
    let html = '';
    for(let i = 1;i<=page;i++){
        html+= `<li class="listPageNumber-item" onclick = "renderDescendingPage(${i})">${i}</li>`;
    }
    document.querySelector('.listPageNumber').innerHTML= html;
}


document.querySelector('#ascending').onchange = function(e){
        if(e.target.checked == true){
                
                renderAscendingPage(1);
                renderListPageAscending();
                
        }
}

document.querySelector('#reduce1').onchange = function(e){
    if(e.target.checked==true){
        renderDescendingPage(1);
        renderListPageDescending();
    }
}


// checkbox list


function unique(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
    }
    return newArr
}

function listCheckbox(){
    var myarry = new Array;
    var newarry = new Array;
    var listCheckbox =  document.querySelectorAll('.checkbox_list');

    for(let i = 0;i<listCheckbox.length;i++){
        listCheckbox[i].onchange = function(e){
            for(let j = 0;j<listCheckbox.length;j++){
                // nếu check thì thêm vào mảng
                if(listCheckbox[j].checked == true){
                    myarry.push(listCheckbox[j].classList[1]);
                }else {
                    // nếu bỏ check thì kiểm tra xóa
                    for(let l = 0;l<listCheckbox.length;l++){
                        if(listCheckbox[l].checked == false){
                            // nếu không check thì xóa thôi :v
                            for(let m = 0;m<myarry.length;m++){
                                if(myarry[m] == listCheckbox[l].classList[1]){
                                    myarry.splice(m,1);
                                }
                            }

                        }
                    }

                }
            }
            newarry = unique(myarry);
            pushCategoryToLocal(newarry);
            renderProductPage(1);
            renderListPage();
        }
        
     }
     
}

listCheckbox();