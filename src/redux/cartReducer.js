import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    products:[]
}

console.log(initialState.products)
export const cartSlice = createSlice({ 
    name: 'cart', 
    initialState, 
    reducers: { 
        addCart:(state, action)=>{ 
            const item = state.products.find(item => item.id === action.payload.id)
            if(item){ 
                item.quantity+=action.payload.quantity
            }else { 
                state.products.push(action.payload)
            }
        },
        removeItem:(state, action) => { 
            state.products = state.products.filter(item=> item.id !== action.payload)
        }, 
        resetItem:(state, action) =>{ 
            state.products = []
        },
    },
})


export const {addCart, removeItem, resetItem} = cartSlice.actions

export default cartSlice.reducer