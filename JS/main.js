// get element (inputs);

let NameProduct = document.getElementById('name-product')
let PriceProduct = document.getElementById('price-product')
let TaxesProduct = document.getElementById('taxes-product')
let ADSProduct = document.getElementById('ads-product')
let DiscountProduct = document.getElementById('discount-product')
let TotalPrice = document.getElementById('total')
let Count = document.getElementById('count')
let Category = document.getElementById('category')
let Submit = document.getElementById('submit')

// test var
// console.log(NameProduct,PriceProduct,TaxesProduct,ADSProduct,DiscountProduct,TotalPrice,Count,Category,Submit)

function gettotal() {
let price = parseFloat(PriceProduct.value) || 0;
let taxes = parseFloat(TaxesProduct.value) || 0;
let ads = parseFloat(ADSProduct.value) || 0;
let discount = parseFloat(DiscountProduct.value) || 0;

if(price != ''){
    let result = (price + taxes + ads) - discount
    TotalPrice.innerHTML = `Total : ${result.toFixed(2)} EGP`;
    TotalPrice.style.background = "green";
}else{
    TotalPrice.style.background = "red";
    TotalPrice.innerHTML = `Total : EGP`;
}

}
