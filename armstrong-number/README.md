[Armstrong Number](http://shivajivarma.com/code-base/2014/12/28/armstrong-number/)
===============

An __Armstrong number__ is a number such that the sum of its digits raised to the third power is equal to the number itself.  

For example, 371 is an Armstrong number, since 3^3 + 7^3 + 1^3 = 371.  
Another example, 153. 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.

> Program to find whether the given number is an Armstrong number or not.

###CODE
```c
function isArmstrong(num){
    
    var temp = num, sum = 0, digit;
    
    while (temp !== 0) {
    	digit = parseInt(temp % 10);
		sum = sum + (digit * digit * digit);
		temp = parseInt(temp/10);
	}
    
    if(num === sum)
        return true; // Success
    
    return false; // Failure
}
```
