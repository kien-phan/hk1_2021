

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

var array = new Array;
pushCategoryToLocal(array);
function start(){
    let x = getCategoryClickFromLocal();
    if(x =='1'){
            document.querySelector('.name-product').innerText = "VVP Học sinh";
            document.querySelector('.name-content').innerText = "VVP Học sinh"

    }
    if(x =='1.1'){
        document.querySelector('.name-product').innerText = "Vở";
        document.querySelector('.name-content').innerText = "Vở"
        array = ['notebook'];
        pushCategoryToLocal(array);
    }
    if(x =='1.2'){
        document.querySelector('.name-product').innerText = "Bút";
        document.querySelector('.name-content').innerText = "Bút"
        array = ['pen'];
        pushCategoryToLocal(array);
    }
    if(x =='1.3'){
        document.querySelector('.name-product').innerText = "Balo";
        document.querySelector('.name-content').innerText = "Balo";
        array = ['bag'];
        pushCategoryToLocal(array);
    }
    if(x =='1.4'){
        document.querySelector('.name-product').innerText = "Bọc vở";
        document.querySelector('.name-content').innerText = "Bọc vở";
        array = ['cover'];
        pushCategoryToLocal(array);
    }
    if(x =='1.5'){
        document.querySelector('.name-product').innerText = "Nhãn vở";
        document.querySelector('.name-content').innerText = "Nhãn vở";
        array = ['cover'];
        pushCategoryToLocal(array);
    }
    if(x =='1.6'){
        document.querySelector('.name-product').innerText = "Tẩy";
        document.querySelector('.name-content').innerText = "Tẩy";
        array = ['correctionpen'];
        pushCategoryToLocal(array);
    }
    if(x =='2'){
        document.querySelector('.name-product').innerText = "VVP Văn phòng";
        document.querySelector('.name-content').innerText = "VVP Văn phòng"
    }
    if(x =='2.1'){
        document.querySelector('.name-product').innerText = "Kẹp tài liệu";
        document.querySelector('.name-content').innerText = "Kẹp tài liệu";
        array = ['correctionpen'];
        pushCategoryToLocal(array);
    }
    if(x =='2.2'){
        document.querySelector('.name-product').innerText = "Sổ tài liệu";
        document.querySelector('.name-content').innerText = "Sổ tài liệu";
        array = ['notebook'];
        pushCategoryToLocal(array);
    }
    if(x =='2.3'){
        document.querySelector('.name-product').innerText = "Bắn Ghi";
        document.querySelector('.name-content').innerText = "Bắn Ghi";
        array = ['correctionpen'];
        pushCategoryToLocal(array);
    }
    if(x =='2.4'){
        document.querySelector('.name-product').innerText = "Giấy Note";
        document.querySelector('.name-content').innerText = "Giấy Note";
        array = ['paper'];
        pushCategoryToLocal(array);
    }
    if(x =='2.5'){
        document.querySelector('.name-product').innerText = "Giấy in";
        document.querySelector('.name-content').innerText = "Giấy in";
        array = ['paper'];
        pushCategoryToLocal(array);
    }
    if(x =='2.6'){
        document.querySelector('.name-product').innerText = "Trang trí văn phòng";
        document.querySelector('.name-content').innerText = "Trang trí văn phòng";
    }
    if(x =='3'){
        document.querySelector('.name-product').innerText = "Dụng cụ vẽ";
        document.querySelector('.name-content').innerText = "Dụng cụ vẽ";
        array = ['paper'];
        pushCategoryToLocal(array);
    }
    if(x =='3.1'){
        document.querySelector('.name-product').innerText = "Bút vẽ";
        document.querySelector('.name-content').innerText = "Bút vẽ";
        array = ['paper'];
        pushCategoryToLocal(array);
    }
    if(x =='3.2'){
        document.querySelector('.name-product').innerText = "Màu vẽ";
        document.querySelector('.name-content').innerText = "Màu vẽ";
        array = ['paper'];
        pushCategoryToLocal(array);
    }
    if(x =='3.3'){
        document.querySelector('.name-product').innerText = "Khay - Cọ vẽ";
        document.querySelector('.name-content').innerText = "Khay - Cọ vẽ";
        array = ['paper'];
        pushCategoryToLocal(array);
    }
    if(x =='3.4'){
        document.querySelector('.name-product').innerText = "Tập vẽ - Giấy vẽ";
        document.querySelector('.name-content').innerText = "Tập vẽ - Giấy vẽ";
        array = ['paper'];
        pushCategoryToLocal(array);
    }
    if(x =='3.5'){
        document.querySelector('.name-product').innerText = "Bộ vẽ sáng tạo";
        document.querySelector('.name-content').innerText = "Bộ vẽ sáng tạo";
        array = ['paper'];
        pushCategoryToLocal(array);
    }if(x =='3.6'){
        document.querySelector('.name-product').innerText = "Giá vẽ - Khung vẽ";
        document.querySelector('.name-content').innerText = "Giá vẽ - Khung vẽ";
        array = ['paper'];
        pushCategoryToLocal(array);
    }
    if(x =='4'){
        document.querySelector('.name-product').innerText = "Bút Viết";
        document.querySelector('.name-content').innerText = "Bút Viết";
        array = ['pen'];
        pushCategoryToLocal(array);
    }
    if(x =='4.1'){
        document.querySelector('.name-product').innerText = "Bút Chì";
        document.querySelector('.name-content').innerText = "Bút Chì";
        array = ['pen'];
        pushCategoryToLocal(array);
    }
    if(x =='4.2'){
        document.querySelector('.name-product').innerText = "Bút Bi";
        document.querySelector('.name-content').innerText = "Bút Bi";
        array = ['pen'];
        pushCategoryToLocal(array);
    }
    if(x =='4.3'){
        document.querySelector('.name-product').innerText = "Bút nước";
        document.querySelector('.name-content').innerText = "Bút nước";
        array = ['pen'];
        pushCategoryToLocal(array);
    }
    if(x =='4.4'){
        document.querySelector('.name-product').innerText = "Bút lông";
        document.querySelector('.name-content').innerText = "Bút lông";
        array = ['pen'];
        pushCategoryToLocal(array);
    }
    if(x =='4.5'){
        document.querySelector('.name-product').innerText = "Bút dạ quang ";
        document.querySelector('.name-content').innerText = "Bút dạ quang ";
        array = ['pen'];
        pushCategoryToLocal(array);
    }
    if(x =='4.6'){
        document.querySelector('.name-product').innerText = "Bút Mực";
        document.querySelector('.name-content').innerText = "Bút Mực";
        array = ['pen'];
        pushCategoryToLocal(array);
    }
    if(x =='5'){
        document.querySelector('.name-product').innerText = "Sản phẩm về giấy";
        document.querySelector('.name-content').innerText = "Sản phẩm về Giấy";
        array = ['paper'];
        pushCategoryToLocal(array);
    }
    if(x =='5.1'){
        document.querySelector('.name-product').innerText = "Sổ Các Loại";
        document.querySelector('.name-content').innerText = "Sổ Các Loại";
        array = ['notebook'];
        pushCategoryToLocal(array);
    }
    if(x =='5.2'){
        document.querySelector('.name-product').innerText = "Tập vở";
        document.querySelector('.name-content').innerText = "Tập vở";
        array = ['notebook'];
        pushCategoryToLocal(array);
    }
    if(x =='5.3'){
        document.querySelector('.name-product').innerText = "Giấy Note";
        document.querySelector('.name-content').innerText = "Giấy Note";
        array = ['notebook'];
        pushCategoryToLocal(array);
    }
    if(x =='5.4'){
        document.querySelector('.name-product').innerText = "Sticker";
        document.querySelector('.name-content').innerText = "Sticker";
        array = ['notebook'];
        pushCategoryToLocal(array);
    }
    if(x =='5.5'){
        document.querySelector('.name-product').innerText = "Nhãn vở nhãn tên";
        document.querySelector('.name-content').innerText = "Nhãn vở nhãn tên";
        array = ['notebook'];
        pushCategoryToLocal(array);
    }
    if(x =='5.6'){
        document.querySelector('.name-product').innerText = "Các loại giấy khác";
        document.querySelector('.name-content').innerText = "Các loại giấy khác";
        array = ['notebook'];
        pushCategoryToLocal(array);
    }
    renderListPage();
    renderProductPage(1);
}
start();


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