export const addToCart = (product) => {
  return{
    type: "ADDPRODUCT",
    payload: product
  }
}

export const deleteFromCart = (product) => {
  return {
    type: "DELETEPRODUCT",
    payload: product,
  };
};

