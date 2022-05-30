const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDPRODUCT":
      // Check if product already exists
      const exists = state.find((prod) => prod.id === product.id);
      if (exists) {
        // Increase the quantity
        return state.map((prod) =>
          prod.id === product.id ? { ...prod, qty: prod.qty + 1 } : prod
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELETEPRODUCT":
      const exist = state.find((prod) => prod.id === product.id);
      if (exist.qty === 1) {
        return state.filter((prod) => prod.id !== exist.id);
      } else {
        return state.map((prod) =>
          prod.id === product.id ? { ...prod, qty: prod.qty - 1 } : prod
        );
      }

    default:
      return state;
  }
};

export default handleCart;
