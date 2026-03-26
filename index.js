function calculateTax(amount){
    
    if (amount === 0){
        return 0
    }
    else {
        return (10/100) * amount;
    }
}
const tax = calculateTax(10)
console.log(tax)

function convertToUpperCase(text){
    return text.toUpperCase();
}
console.log(convertToUpperCase("Brigid"))

function findMaximum (num1,num2){
    if (num1 > num2){
        return num1
    }
    else {
        return num2
    }
}
console.log(findMaximum(2,6))

function isPalindrome(word){
    const reversed = word.split('').reverse().join('')

    if (reversed === word){
        return true
    }
    else{
        return false
    }
}

console.log(isPalindrome(" "))

function calculateDiscountedPrice(originalPrice,discountedPercentage){

    if (discountedPercentage === 0 || discountedPercentage < 0){
        return originalPrice
    }
    else if (discountedPercentage === 100){
        return 0
    } 
    else {
        let discountAmount = originalPrice * (discountedPercentage / 100)
        return originalPrice - discountAmount
    }
}
let discountedPrice = calculateDiscountedPrice(1000, 5)
console.log(discountedPrice)


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
