import { trap } from './42.trapping-rain-water'

describe('Trapping Rain Water', ()=>{
    test('Case 1',()=>{
        const heights = [0,1,0,2,1,3,2,0,3]
        const trappedWater = trap(heights)
        expect(trappedWater).toBe(6)
    })
    test('Case 2',()=>{
        const heights = [1,2,1,3,0,1,2,4]
        const trappedWater = trap(heights)
        expect(trappedWater).toBe(7)
    })
    test('Case 3',()=>{
        const heights = [1,2,3,4,0,0,1,2]
        const trappedWater = trap(heights)
        expect(trappedWater).toBe(5)
    })
    test('Case 4',()=>{
        const heights = [4,3,2,1,0,4,3]
        const trappedWater = trap(heights)
        expect(trappedWater).toBe(10)
    })
    test('Case 5',()=>{
        const heights = [1,2,1,3,0,1,2,1]
        const trappedWater = trap(heights)
        expect(trappedWater).toBe(4)
    })
    test('Case 6',()=>{
        const heights = [4,3,2,1,0,1,2,2]
        const trappedWater = trap(heights)
        expect(trappedWater).toBe(4)
    })
    test('Case 7',()=>{
        const heights = [4]
        const trappedWater = trap(heights)
        expect(trappedWater).toBe(0)
    })
    test('Case 8',()=>{
        const heights = [4,3,2,1,1]
        const trappedWater = trap(heights)
        expect(trappedWater).toBe(0)
    })
    test('Case 9',()=>{
        const heights = [9,6,8,8,5,6,3]
        const trappedWater = trap(heights)
        expect(trappedWater).toBe(3)
    })
})