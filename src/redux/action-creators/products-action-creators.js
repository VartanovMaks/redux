import { START_PRODUCTS_LOADING,
    END_PRODUCTS_LOADING,
    SET_PRODUCTS
} from '../action-types';

const startProductsLoading =()=>({type:START_PRODUCTS_LOADING})
const endProductsLoading =()=>({type:END_PRODUCTS_LOADING})
const setProducts =(payload)=>({type:SET_PRODUCTS, payload})
const loadProducts = ()=> async (dispatch) => {
    try{
        dispatch(startProductsLoading())
        //id, wine,winery, image, rating.average
        const resp= await fetch('https://api.sampleapis.com/wines/reds');
        const son= await resp.json();
        // массив большой, поэтому дергаем только первые 10 элементов
        const prepearedJson=[]
        for( let i = 0; i<20; i++){
          prepearedJson.push(son[i]);
          prepearedJson[i].price=Math.round(Math.random()*100);
        }
        dispatch(setProducts(prepearedJson))
    }catch (e){
        console.error(e);
    }finally{
        dispatch(endProductsLoading())
    }
        
}

export {
    startProductsLoading,
    endProductsLoading,
    setProducts,
    loadProducts,
}


// 