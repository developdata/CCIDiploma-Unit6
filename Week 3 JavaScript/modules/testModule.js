const discount = 0.50;

const couponCodes = ['BLACKFRIDAY', 'FREESHIP', 'HOHOHO'];

function printDiscountPrice(price) {
    let discountedPrice = addDiscount(price);
    console.log(discountedPrice);
}

function addDiscount(price){
    return price - discount;
}

export { couponCodes, printDiscountPrice, addDiscount};