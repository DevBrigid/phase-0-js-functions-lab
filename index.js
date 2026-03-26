function calculateTax(amount){
    return (10/100) * amount;
}
 let tax = calculateTax(10000)
 console.log(tax)

function convertToUpperCase(text){
    return text.toUpperCase();
}
console.log(convertToUpperCase("brigid mukami"))

function findMaximum (num1,num2){
    if (num1 > num2){
        return num1
    }
    else if (num2 > num1){
        return num2
    } else{
        return 0
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

console.log(isPalindrome("madam"))

function calculateDiscountedPrice (originalPrice,discountedPercentage){
    return originalPrice * (discountedPercentage / 100)
}
console.log(calculateDiscountedPrice(1000,10))


// This is required for the test to function properly  
// module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
