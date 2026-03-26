function calculateTax(amount){
    
    if (amount === 0){
        return 0
    }
    else if (amount < 0){
        console.log("Invalid amount!")
    }
    else {
        return (10/100) * amount;
    }
}
const tax = calculateTax(-1)
console.log(tax)

function convertToUpperCase(text){
    return text.toUpperCase();
}
console.log(convertToUpperCase("Brigid"))

function findMaximum (num1,num2){
    if (num1 > num2){
        return num1
    }
    else if (num2 > num1){
        return num2
    } else {
        return num1
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

function calculateDiscountedPrice (originalPrice,discountedPercentage){

    if (discountedPercentage === 0){
        return originalPrice
    }
    else if (discountedPercentage === 100){
        return 0
    } 
    else if (discountedPercentage > 100){
        console.log("Invalid discount")
    }
    else {
        let discountPrice = originalPrice * (discountedPercentage / 100)
        return discountPrice
    }
}
let discountedPrice = calculateDiscountedPrice(1000,110)
console.log(discountedPrice)


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
