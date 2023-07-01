import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CartState = {
  item: Game[]
}

const initialState: CartState = {
  item: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      state.item.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
