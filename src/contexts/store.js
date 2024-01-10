import { create } from "zustand";

const store = {
  useProduct: create(set=>({
    isProducts: false,
    setIsProducts: products=>set({isProducts: products})
  })),
  useTotal: create(set=>({
    isTotalQuantity: 0,
    setIsTotalQuantity: quantity=>set(state=>({isTotalQuantity: state.isQuantity+quantity}))
  }))
}
export default store;