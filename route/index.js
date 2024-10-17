const userSigninController = require('../controller/usersignin.js');
const UserSignUpController = require('../controller/usersingup.js');
const userDetail = require('../controller/userDetail.js')
const express = require('express');
const athuUser = require('../middleware/lib/authToken.js');
const LOGOUT = require('../controller/userLogout.js');
const Alluser = require('../controller/Alluser.js');
const UpadeteUser = require('../controller/UpdateUserRole.js');
const router = express.Router();
const UploadProductController = require('../controller/uplaodProduct.js');
const uplaodProductPermission = require('../helper/permission.js');
const productController = require('../controller/getProduct.js');
const UpdateProduct = require('../controller/updateProduct.js');
const getcategory = require('../controller/product/getCategory.js');
const CategoryWiseProduct = require('../controller/product/CategoryWiseProduct.js');
const getProductDetails = require('../controller/product/getProductDetailes.js');
const AddTocartProduct = require('../controller/user/AddTocartProduct.js');
const Cart = require('../controller/product/Cart.js');
const Cartview = require('../controller/product/Cartview.js');
const UpdatecartProd = require('../controller/user/updateAddToCartProduct.js');
const DeleteCart = require('../controller/user/DeleteCart.js');
const searchProduct = require('../controller/product/Searchproduct.js');
router.post('/signup', UserSignUpController).post('/login', userSigninController)
router.get("/user-details", athuUser, userDetail)
router.get("/logout", LOGOUT)


//admin
router.get("/alluser", athuUser, Alluser)
router.post('/update-user', athuUser, UpadeteUser)
router.post('/upload-product', athuUser, uplaodProductPermission, UploadProductController)
router.get('/Get-allproduct', athuUser, productController)
router.post('/update-product', athuUser, uplaodProductPermission, UpdateProduct)

router.get('/get-catogory', getcategory)
router.post("/category-product", CategoryWiseProduct)
router.post("/prodect-details", getProductDetails)
router.get("/products", athuUser, Cart)
router.get("/Cart-product", athuUser, Cartview)
router.get('/search-product', searchProduct);
router.post("/addtocart", athuUser, AddTocartProduct)
router.post("/cart-product-update", athuUser, UpdatecartProd)
router.delete('/cart-delete-product', athuUser, DeleteCart);

module.exports = router
