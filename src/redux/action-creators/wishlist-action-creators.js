import { ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST
} from '../action-types';

const addProductToWishlist =(id) =>({ADD_PRODUCT_TO_WISHLIST, payload: id})
const removeProductFromWishlist =(id) =>({REMOVE_PRODUCT_FROM_WISHLIST, payload: id})
const toggleItemInWishlist = (id)=> (dispatch, getState)=>{
    const {wishlist:{productsInWishlist}} = getState();
    const alreadyExist = !!productsInWishlist.find(el => el === id)
    dispatch(alreadyExist ? removeProductFromWishlist(id) : addProductToWishlist(id))

}
export {
    addProductToWishlist,
    removeProductFromWishlist,
    toggleItemInWishlist    
}