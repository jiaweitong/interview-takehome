
/* Compare two times if the second time is earlier */
export const compareTwoTimesCheckTheSecondTimeIsEarlier = (
    time1: string,
    time2: string): boolean => {
    const result = new Date(time1).getTime() < new Date(time2).getTime();
    console.log(`Running compareTwoTimesCheckTheSecondTimeIsEarlier,\ntime-1: ${time1}, time-2: ${time2}`, result);
    return result;
}

/* Example of Question */
//Please generate a 6 digit random number string
export const generateSixDigitRandomNumberString = (): string => {

    return '';
};

const main = (async () => {
    /* Compare two times if the second time is earlier */
    compareTwoTimesCheckTheSecondTimeIsEarlier('2020-01-01 00:00:00', '2020-01-01 00:00:01');
    compareTwoTimesCheckTheSecondTimeIsEarlier('2020-01-01 00:00:01', '2020-01-01 00:00:00');

})();


/* 1. Write a function that takes in an array of numbers and returns the largest number in the array.*/
/* 2. Write a function that takes in an array of numbers and returns the sum of all of the odd numbers in the array.*/
/* 3. Given an array of strings, return the longest one in the array.*/
/* 4. Given an input of string(Assume that the input string only contains letters, no numbers or special characters),write a function that returns the number of vowels in the string. */
/* 5. Write a function that reverse the input string. For example: “Animal” to “laminA”. */
/* 6. Given two integers, write a function that takes returns the smallest common divisor of these two numbers.*/
/* 7. Given a word, return if this word is palindromes. For example, ‘level’, ‘civic’, ‘kayak’ are palindromes because they reads the same way forwards and backwards.*/
/* 8. Given an array of numbers, return a new array with all the even numbers doubled.*/
/* 9. Given two arrays of numbers, write a function that returns a new array containing all the numbers that are common to both arrays in ascending order.*/
/* 10. Given a string, write a function that returns the most common letter in the string.*/
