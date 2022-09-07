// import administration from "./administration"; 

import cartAuth from "../auth/Cart"

export default () => {
    console.log('Hellow there');
    // administration();

    $('.add-to-cart').on('click', e => {
        cartAuth.addProduct(e.currentTarget.dataset.cartproduct)
    })

    $('.remove-from-cart').on('click', e => {
        cartAuth.removeProduct(e.currentTarget.dataset.cartproduct)
    })
};