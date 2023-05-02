import { canJump } from './55.jump-game'

describe('canJump', ()=>{
    test('Case 1',()=>{
        const result = canJump([2,3,1,1,4])
        expect(result).toBe(true)
    })
    test('Case 2',()=>{
        const result = canJump([3,2,1,0,4])
        expect(result).toBe(false)
    })
})
