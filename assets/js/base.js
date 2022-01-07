
/*
                 _   
                | | _    _     _
                | |/ /   \ \  / /
                |   <     \ \/ /
                |_|\_\     \/ /
                           / /
                          /_/


*/




var header = `<div class="grid wide">
<div class="header-wrap">
    <div class="header__logo">
        <a href="index.html" class="header__logo-link">
            <img src="//bizweb.dktcdn.net/100/434/558/themes/831317/assets/logo.png?1630398243026" alt="Home" class="header__logo-img">
            <img src="https://bizweb.dktcdn.net/100/434/558/themes/831317/assets/logo_mb.png?1630398243026" alt="" class="header__logo-img-mobile">
        </a>
    </div>
    
        <div class="header__search">
            <div class="header__search-input-wrap">
                <input type="text" class="header__search-input" placeholder="Tìm kiếm sản phẩm">
               
            </div>
            <button class="header__search-btn" onclick="moveToTimkiem()">
                <i class="header__search-btn-icon ti-search"></i>
            </button>
            <div class="header__search-result"></div>
            

        </div>

    <div class="header__hotline">
        <a href="tel:19006750" class="header__hotline-link" title="19999999">
            <svg class="header__hotline-img" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="19.9px" height="20px" viewBox="0 0 19.9 20" style="enable-background:new 0 0 19.9 20;" xml:space="preserve">
                <style type="text/css">
                    .st0 {
                        fill: #FFFFFF;
                    }
                </style>
                <defs>
                </defs>
                <path class="st0" d="M14.5,12c-0.2-0.1-1.5-0.7-1.7-0.8c-0.2-0.1-0.4-0.1-0.6,0.1c-0.2,0.2-0.6,0.8-0.8,1c-0.1,0.2-0.3,0.2-0.5,0.1
                                                                         c-0.7-0.3-1.4-0.7-2-1.2c-0.5-0.5-1-1.1-1.4-1.7C7.4,9.1,7.6,9,7.7,8.9c0.1-0.1,0.2-0.3,0.4-0.4C8.2,8.3,8.2,8.2,8.3,8
                                                                         c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1-0.1-0.2C8.2,7.5,7.7,6.3,7.5,5.8C7.3,5.3,7.1,5.3,7,5.3c-0.1,0-0.3,0-0.5,0c-0.1,0-0.2,0-0.4,0.1
                                                                         C6,5.5,5.9,5.5,5.8,5.6C5.5,5.9,5.3,6.2,5.2,6.6C5,6.9,5,7.3,5,7.7C5,8.6,5.4,9.5,6,10.3c1.1,1.6,2.5,2.9,4.2,3.7
                                                                         c0.5,0.2,0.9,0.4,1.4,0.5c0.5,0.2,1,0.2,1.6,0.1c0.3-0.1,0.7-0.2,1-0.4c0.3-0.2,0.5-0.5,0.7-0.8c0.2-0.4,0.2-0.8,0.1-1.2
                                                                         C14.9,12.2,14.8,12.1,14.5,12z M17,2.9c-1.7-1.7-4-2.7-6.4-2.9C8.2-0.1,5.9,0.6,4,2C2.1,3.5,0.7,5.6,0.3,8c-0.5,2.4-0.1,4.8,1.1,6.9
                                                                         L0,20l5.3-1.4c1.5,0.8,3.1,1.2,4.7,1.2h0c2,0,3.9-0.6,5.5-1.7c1.6-1.1,2.9-2.6,3.6-4.4c0.8-1.8,0.9-3.8,0.6-5.7S18.4,4.3,17,2.9
                                                                         L17,2.9z M14.4,16.9c-1.3,0.8-2.8,1.3-4.4,1.3h0c-1.5,0-2.9-0.4-4.2-1.1l-0.3-0.2l-3.1,0.8l0.8-3L3,14.3c-0.9-1.4-1.3-3-1.3-4.6
                                                                         c0-1.6,0.6-3.2,1.5-4.5c0.9-1.3,2.3-2.3,3.8-2.9s3.2-0.7,4.8-0.3s3,1.2,4.2,2.4c1.1,1.2,1.9,2.7,2.1,4.3c0.3,1.6,0.1,3.3-0.6,4.7
                                                                         C16.8,14.8,15.8,16,14.4,16.9z"></path>
            </svg>
            <div class="header__hotline-number">
                <span>Hotline: </span>
                19009999
            </div>
        </a>
    </div>
    
    <div class="header__user">
        <ul class="header__user-list">
            <li class="header__user-item">
                <a title="Sản phẩm yêu thích"  href="" class="header__user-item-link">
                    <i class="header__user-icon ti-heart"></i>
                    <span class="header__user-count">0</span>
                </a>
            </li>

            <li class="header__user-item" title="Giỏ hàng">
                <label for="cart-input-id" class="header__user-item-link change-cursor">
                    <i class="header__user-icon ti-shopping-cart"></i>
                    <span class="header__user-count">0</span>
                </label>
            </li>

            <li class="header__user-item header__user-item--log-in li_flex">
                <span class="header__user-item-link js-click-login">
                    <i class="header__user-icon far fa-user"></i>
                </span>
                <span class = "avt_user-home">
                <img src="//bizweb.dktcdn.net/thumb/compact/100/434/558/products/sp7.jpg" alt="" class="avt_user-home-img">
                    <ul class = "avt_user-home-list">
                        <li class = "avt_user-home-item">
                        <a title="Tài khoản của tôi"  href="./profile.html" class="avt_user-home-link">
                            Tài Khoản Của Tôi
                        </a>
                        </li>                      
                        <li class = "avt_user-home-item">
                            <span class="avt_user-home-link log_out-home"> Đăng Xuất</span>
                        </li>   
                    </ul>
                </span>

                <ul class="header__user-account">
                    <li class="header__user-account-item " id ="showLogin">
                        <span class="header__user-account-btn js-click-login" >Đăng nhập</span>
                    </li>
                    <li class="header__user-account-item header__user-account-item--separate " id = "showRegister">
                        <span class="header__user-account-btn js-click-register">Đăng kí</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>
</div>
<div class="header__navbar-wrap">
<div class="grid wide">
    <div class="header__navbar">
        <div class="category">
            <div class="category__outside">
                <i class="ti-align-justify category__outside-icon"></i>
                <div class="category__outside-label">Danh mục sản phẩm</div>
            </div>
    
            <div class="category__inside">
                <div class="category__inside-mobile-head">
                    <span>Danh mục sản phẩm</span>
                </div>
                <div class="category__inside-wrap">
                    <ul class="category__inside-list">
                        <a href="./danhmuc.html" class="category__inside-heading" onclick = "pushCategoryClickToLocal(1)">VPP Học sinh</a>
                        <i class="fas fa-sort-down"></i>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('1.1')">Vở</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('1.2')">Bút</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('1.3')">Balo</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('1.4')">Bọc vở</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('1.5')">Nhãn vở</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('1.6')">Tẩy</a>
                        </li>
                    </ul>
                    <ul class="category__inside-list">
                        <a href="./danhmuc.html" class="category__inside-heading" onclick = "pushCategoryClickToLocal('2')">VPP Văn phòng</a>
                        <i class="fas fa-sort-down"></i>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('2.1')">Kẹp tài liệu</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('2.2')">Sổ tài liệu</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('2.3')">Bắn ghim</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('2.4')">Giấy note</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('2.5')">Giấy in</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('2.6')">Trang trí văn phòng</a>
                        </li>
                    </ul>
                    <ul class="category__inside-list">
                        <a href="./danhmuc.html" class="category__inside-heading" onclick = "pushCategoryClickToLocal('3')">Dụng cụ vẽ</a>
                        <i class="fas fa-sort-down"></i>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('3.1')">Bút vẽ</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('3.2')">Màu vẽ</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('3.3')">Khay - Cọ vẽ</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link"onclick = "pushCategoryClickToLocal('3.4')">Tập vẽ - Giấy vẽ</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('3.5')">Bộ vẽ sáng tạo</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('3.6')">Giá vẽ - Khung vẽ</a>
                        </li>
                    </ul>
                    <ul class="category__inside-list">
                        <a href="./danhmuc.html" class="category__inside-heading" onclick = "pushCategoryClickToLocal('4')">Bút viết</a>
                        <i class="fas fa-sort-down"></i>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('4.1')">Bút chì</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('4.2')">Bút bi</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('4.3')">Bút nước</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('4.4')">Bút lông</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('4.5')">Bút dạ quang</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('4.6')">Bút mực</a>
                        </li>
                    </ul>
                    <ul class="category__inside-list">
                        <a href="./danhmuc.html" class="category__inside-heading" onclick = "pushCategoryClickToLocal('5')">Sản phẩm về giấy</a>
                        <i class="fas fa-sort-down"></i>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('5.1')">Sổ các loại</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('5.2')">Tập - Vở</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('5.3')">Giấy note</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('5.4')">Sticker</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('5.5')">Nhãn vở  - Nhãn tên</a>
                        </li>
                        <li class="category__inside-item">
                            <a href="./danhmuc.html" class="category__inside-item-link" onclick = "pushCategoryClickToLocal('5.6')">Các loại giấy khác</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="header__navbar-slogan">
            <span></span>
        </div>
        <div class="header__navbar-menu-wrap">
            <div class="header__navbar-menu-item">
                <a href="./nothing.html" class="header__navbar-link">
                    <i class="fas fa-fire header__navbar-icon"></i>
                    <span>Khuyến mãi</span>
                </a>
            </div>
            <div class="header__navbar-menu-item">
                <a href="./nothing.html" class="header__navbar-link">
                    <i class="ti-shield header__navbar-icon header__navbar-icon--padding"></i>
                    <span>Dịch vụ</span>
                </a>
            </div>
            <div class="header__navbar-menu-item">
                <a href="./nothing.html" class="header__navbar-link">
                    <i class="fas fa-bullhorn header__navbar-icon"></i>
                    <span>Tin tức</span>
                </a>
            </div>
            <div class="header__navbar-menu-item">
                <a href="./lienhe.html" class="header__navbar-link">
                    <i class="ti-email header__navbar-icon header__navbar-icon--padding"></i>
                    <span>Liên hệ</span>
                </a>
            </div>
        </div>
    </div>
</div>
</div>`;
var footer = `<div class="grid wide footer__content">
<div class="row">
    <div class="col l-5 m-12 c-12 no-gutter-default">
        <a href="" class="footer__content-logo-link">
            <img src="./assets/img/logo_footer.webp" alt="" class="footer__content-img">
        </a>
        <ul class="footer__content-list">
            <li class="footer__content-item">
                <i class="footer__content-item-icon fas fa-map-marker-alt"></i>
                <p class="footer__content-item-text">
                    <strong>Trụ sở: </strong>
                    273 An D. Vương, Phường 3, Quận 5, Thành phố Hồ Chí Minh 700000, Việt Nam
                </p>
            </li>
            <li class="footer__content-item">
                <i class="footer__content-item-icon fas fa-user"></i>
                <p class="footer__content-item-text">
                    <strong>Tổng đài: </strong>
                    <a href="tel:9999999999" class="footer__content-item-contact-link">9999999999</a>
                </p>
            </li>
            <li class="footer__content-item">
                <i class="footer__content-item-icon fas fa-envelope"></i>
                <p class="footer__content-item-text">
                    <strong>Email:</strong>
                    <a href="Email:support@sapo.vn" class="footer__content-item-contact-link">support@sapo.vn</a>
                </p>
            </li>
        </ul>
    </div>
    <div class="col l-2 m-4 c-12 no-gutter-default">
        <h3 class="footer__content-heading"><i class="ti-angle-down"></i>TÌM HIỂU THÊM</h3>
        <ul class="footer__content-list js-footer-list">
            <li class="footer__content-item">
                <a href="./index.html" class="footer__content-item-link">Trang chủ</a>
            </li>
            <li class="footer__content-item">
                <a href="./nothing.html" class="footer__content-item-link">Giới thiệu</a>
            </li>
            <li class="footer__content-item">
                <a href="./tatcasanpham.html" class="footer__content-item-link">Sản phẩm</a>
            </li>
            <li class="footer__content-item">
                <a href="./nothing.html" class="footer__content-item-link">Tin tức</a>
            </li>
            <li class="footer__content-item">
                <a href="./lienhe.html" class="footer__content-item-link">Liên hệ</a>
            </li>
        </ul>
    </div>
    <div class="col l-2 m-4 c-12 no-gutter-default">
        <h3 class="footer__content-heading"><i class="ti-angle-down"></i>HỖ TRỢ KHÁCH HÀNG</h3>
        <ul class="footer__content-list js-footer-list">
            <li class="footer__content-item">
                <a href="./index.html" class="footer__content-item-link">Trang chủ</a>
            </li>
            <li class="footer__content-item">
                <a href="./nothing.html" class="footer__content-item-link">Giới thiệu</a>
            </li>
            <li class="footer__content-item">
                <a href="./tatcasanpham.html" class="footer__content-item-link">Sản phẩm</a>
            </li>
            <li class="footer__content-item">
                <a href="./nothing.html" class="footer__content-item-link">Tin tức</a>
            </li>
            <li class="footer__content-item">
                <a href="./lienhe.html" class="footer__content-item-link">Liên hệ</a>
            </li>
        </ul>
    </div>
    <div class="col l-3  m-4 c-12 no-gutter-default">
        <h3 class="footer__content-heading"><i class="ti-angle-down"></i>THEO DÕI CHÚNG TÔI</h3>
        <ul class="footer__social-list js-footer-list">
            <li class="footer__social-item">
                <a href="https://www.facebook.com" class="footer__social-link">
                    <i class="footer__social-icon fab fa-facebook"></i>
                </a>
            </li>
            <li class="footer__social-item">
                <a href="" class="footer__social-link">
                    <i class="footer__social-icon fab fa-twitter-square"></i>
                </a>
            </li>
            <li class="footer__social-item">
                <a href="" class="footer__social-link">
                    <i class="footer__social-icon fab fa-instagram-square"></i>
                </a>
            </li>
            <li class="footer__social-item">
                <a href="" class="footer__social-link">
                    <i class="footer__social-icon fab fa-youtube"></i>
                </a>
            </li>
        </ul>
        <div class="footer__payment">
            <h3 class="footer__content-heading"><i class="ti-angle-down"></i>PHƯƠNG THỨC THANH TOÁN</h3>
            <div class="footer__payment-wrap js-footer-list">
                <img src="./assets/img/logo_acb.svg" alt="" class="footer__payment-img">
                <img src="./assets/img/logo_msb.svg" alt="" class="footer__payment-img">
            </div>
        </div>
    </div>
</div>
</div>
<div class="footer__bottom">
<p>@ Bản quyền thuộc về Awesome Team | Thiết kế lại bởi  
    <span>Nhóm 4</span>
</p>
</div>`;


$('.header').html(header);
$('.footer').html(footer);



var listProducts = [
    {
        pID: '1',
        pName: 'Bóp mini đựng vật dụng nhỏ dễ thương',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/bag_01.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'bag',
    },
    {
        pID: '3',
        pName: 'Bộ bút highline tài liệu nhập khẩu',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/pen_02.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'pen',
    },
    {
        pID: '4',
        pName: 'Máy tính bỏ tui mini hình gấu dễ thương',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/calculator_01.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'calculator',
    },
    {
        pID: '5',
        pName: 'Sổ tay mini ghi chép nhanh thông tin',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/note_04.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'notebook',
    },
    {
        pID: '6',
        pName: 'Bìa bao sách đơn sắc ',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/cover_01.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'cover',
    },
    {
        pID: '7',
        pName: 'Bìa bao sách hình nhân vật hoạt hình',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/cover_02.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'cover',
    },
    {
        pID: '8',
        pName: 'Tẩy hình con gấu dễ thương',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/eraser_01.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'correctionpen',
    },
    {
        pID: '9',
        pName: 'Tẩy hình gấu 4B cute',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/eraser_02.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'correctionpen',
    },
    {
        pID: '10',
        pName: 'Giấy note vuông xinh xắn',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/paper_01.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'paper',
    },
    {
        pID: '11',
        pName: 'Vở viết hình trái tim dễ thương',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/note_01.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'notebook',
    },
    {
        pID: '12',
        pName: 'Vở viết hình trái cây',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/note_02.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'notebook',
    },
    {
        pID: '13',
        pName: 'Vở viết hình nhân vật hoạt hình dễ thương',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/note_03.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'notebook',
    },
    {
        pID: '14',
        pName: 'Vở viết hình nhân vật trái cây',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/note_04.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'notebook',
    },
    {
        pID: '15',
        pName: 'Vở viết trắng đơn giản sang trọng',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/note_05.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'notebook',
    },
    {
        pID: '16',
        pName: 'Vở viết kẻ ô ngang tiện lợi',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/note_06.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'notebook',
    },
    {
        pID: '17',
        pName: 'Giấy ghi chú hình vuông dễ thương',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/paper_01.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'paper',
    },
    {
        pID: '18',
        pName: 'Bộ bút màu mực nước siêu đẹp',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/pen_01.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'pen',
    },
    {
        pID: '19',
        pName: 'Bộ bút hightline cực đẹp',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/pen_02.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'pen',
    },
    {
        pID: '20',
        pName: 'Bộ bút bi hình bông hoa cực đẹp',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/pen_03.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'pen',
    },
    {
        pID: '21',
        pName: 'Bút xóa lăn mực khô',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/pen_04.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'correctionpen',
    },
    {
        pID: '22',
        pName: 'Bộ bút tô chữ nhanh tài liệu',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/pen_05.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'pen',
    },
    {
        pID: '23',
        pName: 'Bộ 10 cây bút mực nước',
        price: 80000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/pen_06.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'pen',
    },
    {
        pID: '24',
        pName: 'Bộ 6 cây bút mực nước',
        price: 29000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/pen_06.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'pen',
    },
    {
        pID: '25',
        pName: 'Bút bi đơn sách đơn giản',
        price: 20000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/pen_07.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'pen',
    },
    {
        pID: '26',
        pName: 'Bộ bút bi đơn sách đơn giản',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/pen_08.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'pen',
    },
    {
        pID: '27',
        pName: 'Bút bi hình chuột dễ thương',
        price: 50000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/pen_09.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'pen',
    },
    {
        pID: '28',
        pName: 'Thước kẻ hello kitty',
        price: 19000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/ruler_01.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'pen',
    },
    {
        pID: '29',
        pName: 'Bộ thước kẻ trong suốt tiện dụng',
        price: 9000,
        oldPrice: 40000,
        pOfUser: '1',
        img: './assets/img/products/ruler_02.jpg',
        des: '',
        info: '',
        quantity: 12,
        category: 'pen',
    },




];
// pushProductToLocal(listProducts);

var listUser = [
    {
        id: '1',
        email: 'dinhky2468@gmail.com',
        password: 'kydinh123',
        img: './assets/img/avt/avt_01.jpg',
        name: 'Kỳ Đinh',
        phone: '1234556',
        day: '07/07/2002',
        login: false,
        permission: 'customer',
        address: '212 đập đá, quân 1, sài gòn',

    },
    {
        id: '2',
        email: 'nguyenthanh222@gmail.com',
        password: 'thanh123',
        img: './assets/img/avt/avt_02.jpg',
        name: 'Thành Nguyễn',
        phone: '1234556',
        day: '07/07/2002',
        login: false,
        permission: 'customer',
        address: '212 đập đá, quân 1, sài gòn',

    },
    {
        id: '3',
        email: 'kientran@gmail.com',
        password: 'kien123',
        img: './assets/img/avt/avt_03.jpg',
        name: 'Kiên Trần',
        phone: '1234556',
        day: '07/07/2002',
        login: false,
        permission: 'customer',
        address: '212 đập đá, quân 1, sài gòn',

    },
    {
        id: '4',
        email: 'kientran2f@gmail.com',
        password: 'kien123',
        img: './assets/img/avt/avt_04.jpg',
        name: 'Kiên Trần 2',
        phone: '1234556',
        day: '07/07/2002',
        login: false,
        permission: 'customer',
        address: '212 đập đá, quân 1, sài gòn',
        
         
    }
];

var listCart = [
    {
        pID: '1',
        pOfID: '1',
        check: 'false',
        quantity: 1,
    },
    {
        pID: '2',
        pOfID: '1',
        check: 'false',
        quantity: 1,
    },
    {
        pID: '3',
        pOfID: '1',
        check: 'false',
        quantity: 1,
    },
    {
        pID: '4',
        pOfID: '1',
        check: 'false',
        quantity: 1,
    },
    {
        pID: '5',
        pOfID: '1',
        check: 'false',
        quantity: 1,
    },
    {
        pID: '6',
        pOfID: '1',
        check: 'false',
        quantity: 1,
    },
    {
        pID: '7',
        pOfID: '1',
        check: 'false',
        quantity: 1,
    },

];

var listInvoice = [
    {
        pID: '7',
        pOfID: '69',
        quantity: 1,
        date: '20/1/2022'
    }
]



var listHistory = [
    {
        id: '1',
        val: 'Bút bi',
        vOfid: '1',
    },
    {
        id: '2',
        val: 'Bút bi',
        vOfid: '1',
    },
    {
        id: '3',
        val: 'Bút bi',
        vOfid: '1',
    },
    {
        id: '4',
        val: 'Bút bi',
        vOfid: '3',
    },
    {
        id: '5',
        val: 'Bút bi',
        vOfid: '2',
    },
    {
        id: '6',
        val: 'Bút bi',
        vOfid: '2',
    },
];

// var dataStatisticalNew = [
//     {
//         year: '2021',
//         month: '12',
//         data: [
//             [122,523000],
//             [12,50230],
//             [12,50000],
//             [102,59300],
//             [12,10200],
//             [92,12000],
//             [12,50000],
//             [12,231230],
//             [52,50000],
//             [12,50000],
//             [12,50000],
//             [12,12300],
//             [82,50000],
//             [12,50000],
//             [12,50000],
//             [12,50000],
//             [72,32100],
//             [12,50000],
//             [62,50000],
//             [12,54400],
//             [12,50000],
//             [12,50000],
//             [12,5230],
//             [32,50000],
//             [12,50000],
//             [65,50000],
//             [12,53200],
//             [12,50000],
//             [122,50000],
//             [12,50000],
//             [92,50000],
//         ],
//     }
// ];

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
function pushCategoryClickToLocal(value){
    localStorage.setItem('cClick',JSON.stringify(value));
}
function getCategoryClickFromLocal(){
    return JSON.parse(localStorage.getItem('cClick'));
}
function pushDataStatisticalToLocal(array){
    localStorage.setItem('dataS',JSON.stringify(array));
}
function getDataStatisticalFromLocal(){
    return JSON.parse(localStorage.getItem('dataS'));
}


function getCategoryFromLocal(){
    return JSON.parse(localStorage.getItem('cate'));
}
function pushCategoryToLocal(array){
    localStorage.setItem('cate',JSON.stringify(array));
}

let arraytest = [];
pushCategoryToLocal(arraytest);
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




// var d = new Date;
// var currentMonth = d.getMonth()+1;
// var currentYear  = d.getFullYear();

// function checkDataStatisNext(){
//     var array = getDataStatisticalFromLocal();
//     var check  = false;
//     var obj = new Object;
//     for(let i = 0;i<array.length;i++){
//         if(array[i].month == currentMonth && array[i].year == currentYear){
//             check = true;
//         }
//     }
//     if(!check){    
//         obj.year = currentYear;
//         obj.month = currentMonth;
//         obj.data = createDateinMonth();
//         array.push(obj);
//         pushDataStatisticalToLocal(array);
//     }
// }


function getInvoiceFromLocal(){
    return JSON.parse(localStorage.getItem('i'));
}
function pushInvoiceToLocal(array){
    localStorage.setItem('i',JSON.stringify(array));
}


function start(){
    if(!getProductFromLocal()){
        pushProductToLocal(listProducts);
    }
    if(!getUserFromLocal()){
        pushUsertoLocal(listUser);
    }
    if(!getCartFromLocal()){
        pushCartToLocal(listCart);
    }
    // if(!getDataStatisticalFromLocal()){
    //     pushDataStatisticalToLocal(dataStatisticalNew);
    // }
    // checkDataStatisNext();
    if(!getInvoiceFromLocal()){
        pushInvoiceToLocal(listInvoice);
    }
}
start();

