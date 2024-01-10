import { create } from "zustand";

const store = {
  useProduct: create(set=>({
    isProducts: false,
    setIsProducts: products=>set({isProducts: products})
  })),
  useTotal: create(set=>({
    isTotalQuantity: 0,
    setIsTotalQuantity: quantity=>set(state=>({isTotalQuantity: state.isTotalQuantity+quantity})),
    isTotalValue: 0,
    setIsTotalValue: value=>set(state=>({isTotalValue: state.isTotalValue+value}))
  })),
}
export default store;