//handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);

})

//handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})

//product increase decrease calculation
function updateProductNumber(product, price, isIncrease) {
    const productInput = document.getElementById(product + '-input');
    let productValue = productInput.value;
    if (isIncrease) {
        productNumber = parseInt(productValue) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productValue) - 1;
    }
    productInput.value = productNumber;

    document.getElementById(product + "-total").innerText = productNumber * price;
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-input');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}