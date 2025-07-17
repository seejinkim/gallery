import axios from "axios";

// 장바구니 상품 목록 조회
export const getItems = () => {
    return axios.get("/v1/api/cart/items").catch(e => e.response);
};

// 장바구니 상품 추가
export const addItem = (itemId) => {
    return axios.post("/v1/api/carts", { itemId }).catch(e => e.response);
};

// 장바구니 상품 삭제
export const deleteItem = (itemId) => {
    return axios.delete(`/v1/api/carts/items/${itemId}`).catch(e => e.response);
};