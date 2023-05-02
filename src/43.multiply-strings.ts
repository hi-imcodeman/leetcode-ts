/*
 * @lc app=leetcode id=43 lang=typescript
 *
 * [43] Multiply Strings
 *
 * https://leetcode.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (38.30%)
 * Likes:    6051
 * Dislikes: 2722
 * Total Accepted:    651.2K
 * Total Submissions: 1.7M
 * Testcase Example:  '"2"\n"3"'
 *
 * Given two non-negative integers num1 and num2 represented as strings, return
 * the product of num1 and num2, also represented as a string.
 * 
 * Note: You must not use any built-in BigInteger library or convert the inputs
 * to integer directly.
 * 
 * 
 * Example 1:
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 * Example 2:
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= num1.length, num2.length <= 200
 * num1 and num2 consist of digits only.
 * Both num1 and num2 do not contain any leading zero, except the number 0
 * itself.
 * 
 * 
 */

// @lc code=start
// function multiply1(num1: string, num2: string): string {
//     if (num1 == '0' || num2 == '0') return '0';

//     const acyclicConvolutionArr: number[] = Array(num1.length + num2.length - 1).fill(0);
//     for (let i = 0; i < num2.length; i++) {
//         for (let j = 0; j < num1.length; j++) {
//             acyclicConvolutionArr[i + j] += +num2[i] * +num1[j];
//         }
//     }

//     acyclicConvolutionArr.reverse();

//     let carry: number = 0;
//     const result: number[] = [];
//     for (let x = 0; x < acyclicConvolutionArr.length; x++) {
//         let k = Math.floor(acyclicConvolutionArr[x] % 10) + carry;
//         carry = Math.floor(acyclicConvolutionArr[x] / 10);
        
//         if (k >= 10) {
//             carry += Math.floor(k / 10);
//             k = Math.floor(k % 10);
//         }
//         result.push(k);
//     }
//     if (carry) {
//         result.push(carry);
//     }

//     return result.reverse().join('');
// };
function multiply(num1: string, num2: string): string {
    const num1Arr = num1.split('')
    const num2Arr = num2.split('')
    const maxResultLength = (num1Arr.length + num2Arr.length) + 1
    let n2Index = num2Arr.length - 1
    const partialProductList = []
    while (num2Arr[n2Index] !== undefined) {
        const multiplier = num2Arr[n2Index]
        let carry = 0
        const partialProduct: string[] = []
        let n1Index = num1Arr.length - 1
        while (num1Arr[n1Index] !== undefined) {
            const num = num1Arr[n1Index]
            const result = (+num * (+multiplier)) + carry
            if (result > 9) {
                const valueArr = result.toString().split('')
                carry = parseInt(valueArr[0])
                partialProduct.push(valueArr[1])
            } else {
                partialProduct.push(result.toString())
                carry = 0
            }
            n1Index--;
        }
        if (carry) {
            partialProduct.push(carry.toString())
        }
        partialProductList.push([...partialProduct].reverse())
        n2Index--;
    }
    const finalList = partialProductList.map((list, index) => {
        let i = index
        while (i) {
            list.push('0')
            i--
        }
        let j = maxResultLength - list.length
        while (j > 0) {
            list.unshift('0')
            j--
        }
        return list
    })

    let k = maxResultLength - 1
    let carry = 0
    const finalResult = []
    while (k) {
        let sum = 0 + (carry%10)
        carry = Math.floor(carry/10)
        finalList.forEach(item => {
            sum += +item[k]
        })
        if (sum > 9) {
            finalResult.push(sum%10)
            carry += Math.floor(sum/10)
        } else {
            finalResult.push(sum.toString())
        }
        k--
    }
    return [...finalResult].reverse().join('').replace(/^0+/, '') || '0'
}
// @lc code=end

export { multiply }
