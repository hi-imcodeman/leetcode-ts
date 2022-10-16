/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    const nums:string[]=[]
    let i=0
    while(i<s.length){
        if(s[i] === ' ' && !nums.length){
            i++
            continue;
        }
        if(s[i] === '-' || s[i] === '+'){
            const nextCharCode = s.charCodeAt(i+1)
            if(nextCharCode >= 48 && nextCharCode <=58 && !nums.length){
                nums.push(s[i])
            }else{
                break
            }
            i++
            continue
        }
        const charCode = s.charCodeAt(i)
        if(charCode >= 48 && charCode <=58){
            nums.push(s[i])
        }else{
            break
        }
        i++
    }
    const number = Number(nums.join(''))
    const range = [-1 * (2**31), (2**31)-1]
    if(number < range[0]){
        return range[0]
    }else if(number > range[1]){
        return range[1]
    }
    return number
}
// @lc code=end

export { myAtoi }