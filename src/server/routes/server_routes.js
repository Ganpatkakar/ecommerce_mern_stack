import {userSignUpController, userSignInController} from '../controllers/user_controler';
import {
    productGetController,
    productInsertController,
    categoryAndSubCategoryInsertController,
    categorySearch
} from "../controllers/product_controler";
import {
    getShoppingCartController,
    removeProductShoppingCart,
    shoppingCartController
} from "../controllers/shopping_cart_controller";

const routes = (app) => {
    app.route('/user/signup').post(userSignUpController);
    app.route('/user/signin').post(userSignInController);

    app.route('/product')
        .post(productInsertController)
        .get(productGetController);

    app.route('/product/category')
        .post(categoryAndSubCategoryInsertController)
        .get(categorySearch);

    app.route('/shoppingCart').post(shoppingCartController);
    app.route('/shoppingCart/:userId').get(getShoppingCartController);
    app.route('/shoppingCart/removeProductFromCart').post(removeProductShoppingCart);
};
export default routes;