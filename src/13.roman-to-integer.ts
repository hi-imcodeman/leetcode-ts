/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    let integer=0
    const romanLettersMap:{[index:string]:number} = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
const romanLetters = s.split('')
let i=0
while(i < romanLetters.length){
    const firstLetter=romanLetters[i]
    const nextLetter=romanLetters[i+1]
    i++
    const v1=romanLettersMap[firstLetter]
    if(nextLetter){
        const v2=romanLettersMap[nextLetter]
        if(v1<v2){
            integer+=(v2-v1)
            i++
        }else{
            integer+=v1
        }
    }else{
        integer+=v1
    }
}
return integer
}
// @lc code=end

export { romanToInt }
