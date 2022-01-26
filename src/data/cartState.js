import { atom, selector } from "recoil";

export const cartListState = atom({
    key: 'cart',
    default: [],
});

export const addToCart = (cart, food) => {
    const newCart = [...cart];
    const foundIndex = cart.findIndex(x => x.id === food.id);
    // Increase quantity if existing
    if (foundIndex >= 0) {
        newCart[foundIndex] = {
        ...cart[foundIndex],
        quantity: cart[foundIndex].quantity + 1,
        };
        return newCart;
    }
    // Add new food
    newCart.push({
        id: food.id,
        img: food.img,
        info: food.info,
        name: food.name,
        price: food.price,
        quantity: 1,
    });
    return newCart;
}

export const removeToCart = (cart, food) => {
    let newCart = [...cart];
    const foundIndex = cart.findIndex(x => x.id === food.id);
    // Increase quantity if existing
    if (foundIndex >= 0) {
        if(newCart[foundIndex].quantity >1) {
            newCart[foundIndex] = {
            ...cart[foundIndex],
            quantity: cart[foundIndex].quantity - 1,
            }
        } else {
            newCart = newCart.filter((item) => item.name !== food.name);
        };
        return newCart;
    }
}

export const cartTotal = selector({
    key: 'cartTotal',
    get: ({ get }) => {
        const cart = get(cartListState);

        return cart.reduce((total, food) => {
            return total + (food.price * food.quantity);
        }, 0);
    }
})