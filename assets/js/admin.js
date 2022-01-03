



function checkEmail(email) { 
 
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    if (!filter.test(email)) { 
             return false; 
    }
    else{ 
            return true;
    } 
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

var btnShowSideBar = document.querySelector('.show-side-bar');
var sideBar = document.querySelector('.side_bar');
var content = document.querySelector('.content');
sideBar.classList.toggle('animation_side-bar');
content.classList.toggle('animation-margin');
btnShowSideBar.onclick = function(){
    sideBar.classList.toggle('animation_side-bar');
    content.classList.toggle('animation-margin');
}
var sbaritem = document.querySelectorAll('.s_bar-item');
function clearActive(){
    for(let i = 0;i<sbaritem.length;i++){
        sbaritem[i].classList.remove('active_sidebar');
    }
}



function hideALl(){
    let listsection = document.querySelectorAll('section');
    listsection.forEach(function(e){
        e.style.display = 'none';
    })
}
document.querySelector('.dashboard-click').onclick = function(){
    hideALl();
    clearActive();
    document.querySelector('.sec-social').style.display = 'block';
    document.querySelector('.head-page').innerHTML = 'Dashboard';
}
document.querySelector('.head-cont').onclick = function(){
    hideALl();
    clearActive();
    document.querySelector('.sec-social').style.display = 'block';
    document.querySelector('.head-page').innerHTML = 'Dashboard';

}
document.querySelector('#customer').onclick = function(e){
    hideALl();
    clearActive();
    e.target.classList.add('active_sidebar');
    document.querySelector('.section-content-1').style.display = 'block';
    document.querySelector('.head-page').innerHTML = 'Tài khoản khách hàng';

}
document.querySelector('#individual').onclick = function(e){
    hideALl();
    clearActive();
    e.target.classList.add('active_sidebar');
    document.querySelector('.section-content-2').style.display = 'block';
    document.querySelector('.head-page').innerHTML = 'Tài khoản cá nhân';

}
document.querySelector('#allProduct').onclick = function(e){
    hideALl();
    clearActive();
    e.target.classList.add('active_sidebar');
    document.querySelector('.section-content-3').style.display = 'block';
    document.querySelector('.head-page').innerHTML = 'Tất cả sản phẩm';

}
document.querySelector('#addProduct').onclick = function(e){
    hideALl();
    clearActive();
    e.target.classList.add('active_sidebar');
    document.querySelector('.section-content-4').style.display = 'block';
    document.querySelector('.head-page').innerHTML = 'Thêm mới sản phẩm';

}
document.querySelector('#editProduct').onclick = function(e){
    hideALl();
    clearActive();
    e.target.classList.add('active_sidebar');
    document.querySelector('.section-content-5').style.display = 'block';
    document.querySelector('.editMyProduct_product').style.display= 'none';
    document.querySelector('.myProduct').style.display = 'block';
    document.querySelector('.head-page').innerHTML = 'Chỉnh sửa sản phẩm';
}
document.querySelector('#soldoutsoon').onclick = function(e){
    hideALl();
    clearActive();
    e.target.classList.add('active_sidebar');
    document.querySelector('.section-content-6').style.display = 'block';
    document.querySelector('.head-page').innerHTML = 'Sắp bán hết';
}
document.querySelector('#statisticsbyday').onclick = function(e){
    hideALl();
    clearActive();
    e.target.classList.add('active_sidebar');
    document.querySelector('.section-content-7').style.display = 'block';
    document.querySelector('.head-page').innerHTML = 'Thống kê theo ngày';
}



// 
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
function pushOneProductToLocal(id){
    localStorage.setItem('o',JSON.stringify(id));
}
function getOneProductFromLocal(){
    return JSON.parse(localStorage.getItem('o'));
}

//  render My account
function renderInfoAdmin(){
    var html4Admin = '';
    let listUser = getUserFromLocal();
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].permission == 'admin' && listUser[i].login == true){
            document.querySelector('.header-right-span-img').style.display = 'block';
            document.querySelector('.header-right-fas-user').style.display = 'none';

            html4Admin += `
            <div class="col col-xl-2 col-lg-3 col-md-3 col-sm-5 col-5">
                                    <span class="sec-2-left">
                                        Họ Tên:
                                    </span>
                                </div>
                                <div class="col col-xl-10 col-lg-7 col-md-9 col-sm-7 col-7">
                                    <span class="sec-2-right">
                                        ${listUser[i].name}
                                    </span>
                                </div>
                                <div class="col col-xl-2 col-lg-3 col-md-3 col-sm-5 col-5">
                                    <span class="sec-2-left">
                                        Ngày Sinh:
                                    </span>
                                </div>
                                <div class="col col-xl-10 col-lg-7 col-md-7 col-sm-7 col-7">
                                    <span class="sec-2-right">
                                        ${listUser[i].day}
                                    </span>
                                </div>
                                <div class="col col-xl-2 col-lg-3 col-md-3 col-sm-5 col-5">
                                    <span class="sec-2-left">
                                        Email:
                                    </span>
                                </div>
                                <div class="col col-xl-10 col-lg-7 col-md-7 col-sm-7 col-7">
                                    <span class="sec-2-right">
                                        ${listUser[i].email}
                                    </span>
                                </div>
                                <div class="col col-xl-2 col-lg-3 col-md-3 col-sm-5 col-5">
                                    <span class="sec-2-left">
                                        Số điện thoại:
                                    </span>
                                </div>
                                <div class="col col-xl-10 col-lg-7 col-md-7 col-sm-7 col-7">
                                    <span class="sec-2-right">
                                        ${listUser[i].phone}
                                    </span>
                                </div>
                                <div class="col col-xl-2 col-lg-3 col-md-3 col-sm-5 col-5">
                                    <span class="sec-2-left">
                                        Địa chỉ:
                                    </span>
                                </div>
                                <div class="col col-xl-10 col-lg-7 col-md-7 col-sm-7 col-7">
                                    <span class="sec-2-right">
                                        ${listUser[i].address}
                                    </span>
                                </div>
            `;
        }
    }
   document.querySelector('.render4UserAdmin').innerHTML = html4Admin;
}
function renderCustomer(){
    let htmlCustomer ='';
    let listUser = getUserFromLocal();
    for(let k = 0;k<listUser.length;k++){
        if(listUser[k].login == true && listUser[k].permission =='admin'){
            for(let i = 0;i<listUser.length;i++){
                if(listUser[i].permission == "customer"){
                    htmlCustomer += `
                    <tr class="sec-1-body-r">
                        <th class="sec-1-body-c mid-img">
                            <span class="sec-1-body-span">
                                <img src="${listUser[i].img}" class ="customer_img">
                            </span>
                        </th>
                        <th class="sec-1-body-c">
                            <span class="sec-1-body-span">
                                ${listUser[i].name}
                            </span>
                        </th>
                        
                        <th class="sec-1-body-c">
                            <div class="sec-1-body-bonus">
                                <div class="sec-1-bonus-top">
                                    <span class="sec-1-bonus-level">
                                        Cấp 1
                                    </span>
                                    <span class="sec-1-bonus-level">
                                        125/375 exp
                                    </span>
                                    <span class="sec-1-bonus-level">
                                        Cấp 2
                                    </span>
                                </div>
                                <div class="sec-1-bonus-bot">
                                    <span class="sec-1-bonus-slick">
        
                                    </span>
                                </div>
                            </div>
        
                        </th>
                        <th class="sec-1-body-c">
                            <span class="sec-1-body-span">
                                Visa
                            </span>
                        </th>
                        <th class="sec-1-body-c">
                            <div class="sec-1-body-activity">
                                <span class="sec-1-ac-top">
                                    Last Login
                                </span>
                                <span class="sec-1-ac-bot">
                                    10 giây trước
                                </span>
                            </div>
                        </th>
                        <th class="sec-1-body-c ">
                            <div class="sec-1-body-span th-relative">
                                <i class="fas fa-ellipsis-v"></i>
                                <div class ="menu_edit">
                                <ul class = "menu_edit-list">
                                    
                                    <li class = "menu_edit-item" onclick = "deleteCustomer('${listUser[i].id}')">
                                         Xóa
                                    </li>
                                </ul>
                                
                                </div>
                            </div>
                            
                        </th>
                    </tr>
                    `;
                }
            }
        }
    }
    

    document.querySelector('.t-bodyrender').innerHTML = htmlCustomer;
}
function deleteCustomer(id){
    let listUser = getUserFromLocal();
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].id == id){
            listUser.splice(i,1);
        }
    }
   
    pushUsertoLocal(listUser);
    renderCustomer();
}
function logoutAdmin(){
    let listUser = getUserFromLocal();
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].permission == 'admin'){
            listUser[i].login = false;
        }
    }
    pushUsertoLocal(listUser);
    window.location.reload();
}

function clickMyAccout(){
    // window.location.reload();

    hideALl();
    clearActive();
    document.querySelector('#individual').classList.add('active_sidebar');
    document.querySelector('.section-content-2').style.display = 'block';
    document.querySelector('.head-page').innerHTML = 'Tài khoản cá nhân';
}
// render edit my account
document.querySelector('.button-edit').onclick = function(){
    let htmleAdmin = '';
    document.querySelector('.show_info').style.display = 'none';
    document.querySelector('.form-edit-myprofile').style.display = 'block';
    let listUser = getUserFromLocal();
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].login == true && listUser[i].permission == "admin"){
            let  date = listUser[i].day;
            let day = parseInt(date[0]+date[1]);
            let month = parseInt(date[3]+date[4]);
            let year = parseInt(date[6]+date[7]+date[8]+date[9]);
            var stringDay = '';
            var stringMonth = '';
            var stringYear = '';
            for(let i = 1;i<=30;i++){
                if(day == i){
                    stringDay+=`<option value="${i}" selected>${i}</option>`;
                }else {
                    stringDay+=`<option value="${i}">${i}</option>`;
                }
            }
            for(let i = 1;i<=12;i++){
                if(month == i){
                    stringMonth+=`<option value="${i}" selected>${i}</option>`;
                }else {
                    stringMonth+=`<option value="${i}">${i}</option>`;
                }
            }
            for(let i = 1990;i<=2100;i++){
                if(year == i){
                    stringYear+=`<option value="${i}" selected>${i}</option>`;
                }else {
                    stringYear+=`<option value="${i}">${i}</option>`;
                }
            }
            
            htmleAdmin = `<div class="form-edit-group">
            <label for="sec-2-pName" class="form_label">Tên Của Bạn</label>
            <input type="text" name="" value = "${listUser[i].name}" id="sec-2-pName" class="sec-2-input_control">
            <span class="sec-2-form-message"></span>
        </div>
        <div class="form-edit-group-date">
            <div class ="classDate">
                <label for="day" class="form_label">Ngày</label>
                <select name="day" id="day" class="select-form">
                    ${stringDay}
                </select>
            </div>
            <div class="classDate">
                <label for="month" class="form_label">Tháng</label>
                <select name="month" id="month" class="select-form">
                 ${stringMonth}  
                </select>
            </div>
            <div class="classDate">
                <label for="year" class="form_label">Năm</label>
                <select name="year" id="year" class="select-form">
                    ${stringYear}   
                </select>
            </div>
            
            <span class="sec-2-form-message"></span>
        </div>
        <div class="form-edit-group">
            <label for="sec-2-email" class="form_label">Emai của bạn: </label>
            <input type="text" name="" value ="${listUser[i].email}" id="sec-2-email" class="sec-2-input_control">
            <span class="sec-2-form-message"></span>
        </div>
        <div class="form-edit-group">
            <label for="sec-2-phone" class="form_label">Số điện thoại:</label>
            <input type="text" name="" id="sec-2-phone" value ="${listUser[i].phone}" class="sec-2-input_control">
            <span class="sec-2-form-message"></span>
        </div>
        <div class="form-edit-group">
            <label for="sec-2-address" class="form_label">Địa chỉ</label>
            <input type="text" name="" id="sec-2-address" value ="${listUser[i].address}" class="sec-2-input_control">
            <span class="sec-2-form-message"></span>
        </div>
        <span class="save_edit-profile" onclick = "saveEditProfile('${listUser[i].id}')">
            Lưu Thay Đổi
        </span>`;
        }
    }
    document.querySelector('.form-edit-myprofile').innerHTML = htmleAdmin;
}


function saveEditProfile(id){
    let listUser = getUserFromLocal();
    let name = document.querySelector('#sec-2-pName');
    let day = document.querySelector('#day');
    let month = document.querySelector('#month');
    let year = document.querySelector('#year');
    let email = document.querySelector('#sec-2-email');
    let phone = document.querySelector('#sec-2-phone');
    let address = document.querySelector('#sec-2-address');
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].id == id){
            if(name.value){
                listUser[i].name = name.value;
            }
            if(day.value && month.value && year.value){
                    listUser[i].day = day.value+"/"+month.value+"/"+year.value;
            }
            if(email.value){
                listUser[i].email = email.value;
            }
            if(phone.value){
                listUser[i].phone = phone.value;
            }
            if(address.value){
                listUser[i].address = address.value;
            }

        }
    }
    if(checkEmail(email.value) && checkPhone(phone.value)){

        pushUsertoLocal(listUser);
        alert("Chỉnh sửa thông tin thành công");
        window.location.reload();
    }else if(!checkEmail(email.value) && checkPhone(phone.value)){
        alert("Email sai định dạng");
    }else if(checkEmail(email.value) && !checkPhone(phone.value)){
        alert("Số điện thoại sai định dạng");
    }else {
        alert("Email và số điện thoại sai định dạng");
    }

}



function renderEditAllProduct(){
    let htmledit = '';
    let listProducts = getProductFromLocal();
    for(let i = 0;i<listProducts.length;i++){
        htmledit += `<li class="sec-5-item">
        <div class="row">
            <div class="col col-xl-8">
                <div class="sec-5-info">
                    <span class="sec-5-info-image">
                        <img src="${listProducts[i].img}" alt="" class="sec-5-img">
                    </span>
                    <span class="sec-5-pName">
                        ${listProducts[i].pName}
                    </span>
                </div>
            </div>
      
            <div class="col col-xl-4 sec-5-align">
                <div class="sec-5-operation">
                    <span class="sec-5-operation-chan" onclick = "renderFormEdit('${listProducts[i].pID}')">
                        Chỉnh Sửa
                    </span>
                    <span class="sec-5-operation-del" onclick = "confirmFunction('${listProducts[i].pID}')">
                        Xóa
                    </span>
                </div>
            </div>
        </div>
    </li>`;
    }
    document.querySelector('.count_product').innerHTML = listProducts.length + " sản phẩm ";
    document.querySelector('.sec-5-list').innerHTML = htmledit;
}

function renderListBtnPage(){
    var htmlbtn = '';
    
    let page = 0;
    let listProducts = getProductFromLocal();
    page = Math.ceil(listProducts.length / 12);
    for(let i = 1;i <=page;i++){
            if(i ==1){
                htmlbtn += `<li class="product-page-item active_page" onclick  = "renderProductPage(${i})">
                                ${i}
                            </li>` 
            }else {
                htmlbtn += `<li class="product-page-item" onclick  = "renderProductPage(${i})">
                                 ${i}
                            </li>`
            }
    }
    document.querySelector('.product-page-list').innerHTML = htmlbtn;
}

function renderSoldOut(){
    let htmlSold = '';
    let count = 0;
    let listProduct = getProductFromLocal();
    for(let i =0;i<listProduct.length;i++){
        if(listProduct[i].quantity < 25){
            count++;
            htmlSold +=`<div class="col col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
            <a href="./sanpham.html" class="admin_oneProduct" onclick ="pushOneProductToLocal('${listProduct[i].pID}')">
    
            <div class="css-products">
    
                <img src="${listProduct[i].img}" alt="" class="product-img">
                <div class="product-description">
                    <h3 class="product-name">
                        ${listProduct[i].pName}
                    </h3>
                    <div class="product-price">
                        <span class="p-price">
                            ${listProduct[i].price}đ
                        </span>
                        <span class="old-price">
                            ${listProduct[i].oldPrice}đ
                        </span>
                    </div>
                </div>
            </div>
            </a>
        </div>`;
        }
    } 
document.querySelector('.rendersold-6').innerHTML = htmlSold;
document.querySelector('.count_product-6').innerHTML = count + " sản phẩm gần hết"
}


function renderProductPage(key){
    let listPage = document.querySelectorAll('.product-page-item');
    for(let i = 0;i<listPage.length;i++){
        listPage[i].classList.remove('active_page');
    }
    listPage[key-1].classList.add('active_page');



    scrollTop();
    let listProducts = getProductFromLocal();
    let currentPage  = key;
    let htmlp = '';
     var list = listProducts.slice(
        (currentPage -1)*12,
        (currentPage -1)*12 +12
    );
    for(let i = 0;i<list.length;i++){
        htmlp = htmlp + `
                
        
        <div class="col col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
        <a href="./sanpham.html" class="admin_oneProduct" onclick ="pushOneProductToLocal('${list[i].pID}')">

        <div class="css-products">

            <img src="${list[i].img}" alt="" class="product-img">
            <div class="product-description">
                <h3 class="product-name">
                    ${list[i].pName}
                </h3>
                <div class="product-price">
                    <span class="p-price">
                        ${list[i].price}đ
                    </span>
                    <span class="old-price">
                        ${list[i].oldPrice}đ
                    </span>
                </div>
            </div>
        </div>
        </a>
    </div>
    `;
    }
    document.querySelector('.renderAll').innerHTML = htmlp;
   

    
}
function renderTailPage(){
    let listProduct  = getProductFromLocal();
    let count = listProduct.length;
    let pageTail = Math.ceil(count/12);
    renderProductPage(pageTail);
}
document.querySelector('.deleteAll-description').onclick = function(){
    deleteAllProduct();
}


// create product
function createID (){
    var id = "";
    id = Math.random().toString().substr(2,4) +"_"+ String(new Date().getTime()).substr(2,4);
    return id;
}

document.querySelector('.btn_create-product').onclick = function(){
    let pName = document.querySelector('#pName');
    let pPrice = document.querySelector('#pPrice');
    let pQuantity = document.querySelector('#pQuantity');
    let pImgLink = document.querySelector('#pImgLink');
    let pCategory  = document.querySelector('#pCategory');
    let listProduct = getProductFromLocal();
    var testimg = document.querySelector('#pImgfile');
    if((testimg.value||pImgLink.value)&&pName.value && pPrice.value && pQuantity.value && pQuantity.value && (pCategory.value != 0)){
        var obj = new Object;
        obj.pID = createID();
        obj.pName = pName.value;
        obj.price = pPrice.value;
        obj.oldPrice = parseFloat(pPrice.value)+ 20000;
        obj.quantity = pQuantity.value;
        obj.des ="";
        obj.info = "";
        if(pCategory.value == 1){
            obj.category = "bag";
        }
        if(pCategory.value == 2){
            obj.category = "book";
        }
        if(pCategory.value == 3){
            obj.category = "pen";
        }
        if(pCategory.value == 4){
            obj.category = "calculator";
        }
        if(pCategory.value == 5){
            obj.category = "notebook";
        }
        if(pCategory.value == 6){
            obj.category = "correctionpen";
        }
        if(pCategory.value == 7){
            obj.category = "paper";
        }
        if(pImgLink.value){
            obj.img = pImgLink.value;
            listProduct.unshift(obj);
            pushProductToLocal(listProduct);
            alert("Thêm sản phẩm thành công")
            window.location.reload();
        }else {
            const fileRead = new FileReader();
                  const filesupload = testimg.files;
                  obj.img = '';
                  fileRead.readAsDataURL(filesupload[0]);
                  fileRead.onload = function(e){
                      let img = e.target.result;
                      obj.img = img;
                      listProduct.unshift(obj);
                      pushProductToLocal(listProduct);
                      alert("Thêm sản phẩm thành công")
                      window.location.reload();
                  }
        }
    }else {
        alert("Bạn chưa nhập đủ thông tin");
    }
}



$('.btn_back').on('click',function(){
    $('.modal_admin').css('display','none');
    $('#form-login-1').css('display','none');
})
$('.modal_admin').on('click',function(){
    $('.modal_admin').css('display','none');
    $('#form-login-1').css('display','none');
})
$('.btn_login-head').on('click',function(){
    $('.modal_admin').css('display','block');
    $('#form-login-1').css('display','block');
})

$('.btn_login').on('click',function(){
    let listUser = getUserFromLocal();
    
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].email == $('#email_admin').val() && listUser[i].password == $('#password_admin').val() && listUser[i].permission == 'admin'){
            listUser[i].login = true;
        }
    }
    pushUsertoLocal(listUser);
    window.location.reload();
})


function renderFormEdit(id){
    let listProduct = getProductFromLocal();
    var selectArray = [
        'Cặp, túi sách',
        'Sách',
        'Bút',
        'Máy tính',
        'Sổ tay',
        'Bìa bao',
        'Tẩy, bút xóa',
        'Các loại giấy',
    ];
    let value = 0;
    for(let i = 0;i<listProduct.length;i++){
        if(listProduct[i].pID == id){
            if(listProduct[i].category == 'bag'){
                value = 1;
            }
            if(listProduct[i].category == 'book'){
                value = 2;
            }
            if(listProduct[i].category == 'pen'){
                value = 3;
            }
            if(listProduct[i].category == 'calculator'){
                value = 4;
            }
            if(listProduct[i].category == 'notebook'){
                value = 5;
            }
            if(listProduct[i].category == 'correctionpen'){
                value = 6;
            }
            if(listProduct[i].category == 'paper'){
                value = 7;
            }
            break;
        }
    }
    let option = `<option value="0" class="category_option">Chọn ngành hàng phù hợp</option>`;
    for(let i = 0;i<selectArray.length;i++){
        if(i == value-1){
            option += `<option value="${i+1}" class="category_option" selected>${selectArray[i]}</option>`;
        }else {
           option +=` <option value="${i+1}" class="category_option">${selectArray[i]}</option>`;
        }
    }
    console.log(option)
    console.log(value);
    let htmledit = '';
    document.querySelector('.editMyProduct_product').style.display= 'block';
    document.querySelector('.myProduct').style.display = 'none';

    
    for(let i = 0;i<listProduct.length;i++){
        if(listProduct[i].pID== id){
            htmledit = `
            <form action="" class="sec-4-form_edit">
            <div class="sec-4-form-group">
                <label for="epName" class="form_label">Tên sản phẩm</label>
                <input type="text" name="" id="epName" class="input_control-e" value="${listProduct[i].pName}">
                <span class="sec-4-form-message"></span>
            </div>
            <div class="sec-4-form-group">
                <label for="epImgfile" class="form_label">Hình ảnh</label>
                <input type="file" name="" id="epImgfile" class="file_control">
                <span class="sec-4-form-message"></span>
            </div>
            <div class="sec-4-form-group">
                <label for="epImgLink" class="form_label">Hoặc đường dẫn của sản phẩm</label>
                <input type="text" name="" id="epImgLink" class="input_control-e">
                <span class="sec-4-form-message"></span>
            </div>
            <div class="sec-4-form-group">
                <label for="epPrice" class="form_label">Giá bán</label>
                <input type="number" value ="${listProduct[i].price}" min="0" name="" id="epPrice" class="input_control-e">
                <span class="sec-4-form-message"></span>
            </div>
            <div class="sec-4-form-group">
                <label for="epQuantity" class="form_label">Số lượng</label>
                <input type="number" min = "0" value ="${listProduct[i].quantity}" name="" id="epQuantity" class="input_control-e">
                <span class="sec-4-form-message"></span>
            </div>
            <div class="sec-4-form-group">
                <label for="epCategory" class="form_label">Phân loại sản phẩm</label>
                <select name="" id="epCategory" name="selector" class="option_control">
                    ${option}
                </select>
                <span class="sec-4-form-message"></span>
            </div>
            <div class="sec-4-form-group">
                <label for="epInfo" class="form_label">Thông tin sản phẩm</label>
                <textarea name="" id="epInfo" cols="30" rows="10" class="textarea_control"></textarea>
                <span class="sec-4-form-message"></span>
            </div>
            
            
            <button type="button" class="btn_save-product" onclick = "saveEditProduct('${listProduct[i].pID}')" >Lưu thay đổi</button>
        </form>
          `;
        }
    }
document.querySelector('.editMyProduct_product').innerHTML = htmledit;

}


function saveEditProduct(id){
    let pName = document.querySelector('#epName');
    let pPrice = document.querySelector('#epPrice');
    let pQuantity = document.querySelector('#epQuantity');
    let pImgLink = document.querySelector('#epImgLink');
    let pCategory  = document.querySelector('#epCategory');
    let listProduct = getProductFromLocal();
    var testimg = document.querySelector('#epImgfile');
    for(let i = 0;i<listProduct.length;i++){
        if(listProduct[i].pID == id){
            console.log(1);
            if((testimg.value||pImgLink.value)&&pName.value && pPrice.value && pQuantity.value && pQuantity.value && (pCategory.value != 0)){
                var obj = new Object;
                obj.pID = createID();
                obj.pName = pName.value;
                obj.price = pPrice.value;
                obj.oldPrice = parseFloat(pPrice.value)+ 20000;
                obj.quantity = pQuantity.value;
                obj.des ="";
                obj.info = "";
                if(pCategory.value == 1){
                    obj.category = "bag";
                }
                if(pCategory.value == 2){
                    obj.category = "book";
                }
                if(pCategory.value == 3){
                    obj.category = "pen";
                }
                if(pCategory.value == 4){
                    obj.category = "calculator";
                }
                if(pCategory.value == 5){
                    obj.category = "notebook";
                }
                if(pCategory.value == 6){
                    obj.category = "correctionpen";
                }
                if(pCategory.value == 7){
                    obj.category = "paper";
                }
                if(pImgLink.value){
                    obj.img = pImgLink.value;
                    listProduct.unshift(obj);
                    pushProductToLocal(listProduct);
                    alert("Chỉnh sửa sản phẩm thành công")
                    window.location.reload();
                }else {
                    const fileRead = new FileReader();
                          const filesupload = testimg.files;
                          obj.img = '';
                          fileRead.readAsDataURL(filesupload[0]);
                          fileRead.onload = function(e){
                              let img = e.target.result;
                              obj.img = img;
                              listProduct.unshift(obj);
                              pushProductToLocal(listProduct);
                              alert("Chỉnh sửa sản phẩm thành công")
                              window.location.reload();
                          }
                }
            }else {
                alert("Bạn chưa nhập đủ thông tin");
            }
            break;
        }
    }
    
}





function confirmFunction(id) {
    var txt;
    var r = confirm("Xóa Sản Phẩm ? Chắc Chưa :v");
    if (r == true) {
      deleteOneProductAdmin(id);
    } else {
      
    }
    
}

function deleteOneProductAdmin(id){
    let listProducts = getProductFromLocal();
    for(let i = 0;i<listProducts.length;i++){
        if(listProducts[i].pID == id){
            
            listProducts.splice(i,1);
        }
    }
    pushProductToLocal(listProducts);
    renderEditAllProduct();
}
function deleteAllProduct(){
    let listProducts = [];
    pushProductToLocal(listProducts);
    renderEditAllProduct();
}

function headPage(){
    
}  

function scrollTop(){
    $('body,html').animate({
        scrollTop: 0
    },0)
}

// theme
function light(){
    $('.side_bar').css('backgroundColor','#996d14');
    $('.content').css('backgroundColor','#ebedef');

}

function dark(){

$('.side_bar').css('backgroundColor','#000');
$('.content').css('backgroundColor','#686767');

}

function checkAdmin(){
    let listUser = getUserFromLocal();
    for(let  i = 0;i<listUser.length;i++){
        if(listUser[i].login == true && listUser[i].permission == 'admin'){
            renderProductPage(1);
            renderListBtnPage();
            renderCustomer();
            renderEditAllProduct();
            renderSoldOut();
            $('.sec-4-form').css('display','block');
            $('.sec-2-description,.sec-4-title').css('display','block');
            $('.create_newProduct-1').css('display','none');
        }
    }
}


function start(){
    checkAdmin();
    renderInfoAdmin();
    
    
    
    
    
}

start();


// statistical


var orderListBuy = [];




// class Date
var d = new Date;
var currentMonth =d.getMonth()+1;   // getCurrent Month    return 0 - 11
var currentYear = d.getFullYear();   // getCurrent Year  return yyyy
var currentDay = d.getDate();       // get Current Day   return 1 - 31
// check leap year      
function checkYear(year){
    if (year % 400 == 0) 
        return true; 
    if (year % 4 == 0 && year % 100 != 0) 
        return true;
    return false;
}
// work with localStorage
function pushDataStatisticalToLocal(array){
    localStorage.setItem('dataS',JSON.stringify(array));
}
function getDataStatisticalFromLocal(){
    return JSON.parse(localStorage.getItem('dataS'));
}





// create blank data for each month  => return array :v
function createDateinMonth(month){
    let array = new Array;
    if(month==2){
        if(checkYear(d.getFullYear())){
            for(let i = 1;i<30;i++){
                array.push([0,0]);
            }
        }else {
            for(let i = 1;i<29;i++){
                array.push([0,0]);
            }
        }
    }else if(month == 4 || month == 6 || month == 9 || month == 11){
        for(let i = 1;i<31;i++){
            array.push([0,0]);
        }
    }else {
        for(let i = 1;i<32;i++){
            array.push([0,0]);
        }
    }
    return array;
}


// value chart

var timelineWeek = new Array;

function setFullDay(month){
    var array = new Array;
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        for(let i = 1;i<32;i++){
            array.push(i.toString());
        }
    }
    if(month == 4 || month == 6 || month == 9 || month == 11) {
        for(let i = 1;i<31;i++){
            array.push(i.toString());
        }
    }
    if(month == 2){
        var year = d.getFullYear();
        if(checkYear(year)){
            for(let i = 1;i<30;i++){
                array.push(i.toString());
            }
        }else {
            for(let i = 1;i<29;i++){
                array.push(i.toString());
            }
        }
    }
    return array;
}


// draw Chart
// set timeline in month         ví dụ: ngày hiện tại là 5 thì trả về  ['Ngày 1','Ngày 2','Ngày 3','Ngày 4','Ngày 5'] :v
var timeline = new Array;
for(let i = 1;i<=currentDay;i++){
    timeline.push("Ngày " +i.toString());
}

// getdatafromlocalstorage
var dataArray = getDataStatisticalFromLocal();

var dataCurrentMonth = new Array;

for(let i = 0;i<dataArray.length;i++){
    if(dataArray[i].month == currentMonth && dataArray[i].year== currentYear){
        dataCurrentMonth = dataArray[i].data;
    }
}

var currentQuantityMonth = new Array;   // số lượng bán được
var currentRevenueMonth  = new Array;   // doanh thu bán được
for(let i = 0;i<dataCurrentMonth.length;i++){
    currentQuantityMonth.push(dataCurrentMonth[i][0].toString());
    currentRevenueMonth.push(dataCurrentMonth[i][1].toString());
}

let myCharMonth = document.getElementById('myChartMonth').getContext('2d');

let hehe = new Chart(myCharMonth, {
  type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels: timeline,
    datasets:[{
      label:'Số lượng sản phẩm bán theo từng ngày',
      data:currentQuantityMonth,
      backgroundColor:'green',
      backgroundColor:[
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(255, 99, 132, 0.6)',
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Largest Cities In Massachusetts',
      fontSize:25
    },
    legend:{
      display:true,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:50,
        bottom:50,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});

let myChartRevenue = document.getElementById('myChartRevenue').getContext('2d');

let revenue = new Chart(myChartRevenue, {
  type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels: timeline,
    datasets:[{
      label:'Doanh thu theo từng ngày (VND)',
      data:currentRevenueMonth,
      backgroundColor:'green',
      backgroundColor:[
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(255, 99, 132, 0.6)',
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Largest Cities In Massachusetts',
      fontSize:25
    },
    legend:{
      display:true,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:50,
        bottom:50,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});




