import { threeSum } from './15.3-sum'

describe('threeSum', () => {
    test('should return an empty array when input is empty', () => {
      expect(threeSum([])).toEqual([])
    })
  
    test('should return an empty array when no elements sum up to zero', () => {
      expect(threeSum([1, 2, 3])).toEqual([])
    })
  
    test('should return one set of elements that sum up to zero', () => {
      expect(threeSum([-1, 0, 1])).toEqual([[-1, 0, 1]])
    })
  
    test('should return multiple sets of elements that sum up to zero', () => {
      const expectedOutput = [[-1, -1, 2],[-1, 0, 1]]
      expect(threeSum([-1, 0, 1, 2, -1])).toEqual(expectedOutput)
    })
  
    test('should handle arrays with duplicate elements', () => {
      const expectedOutput = [[-1, -1, 2],[-1, 0, 1]]
      expect(threeSum([-1, 0, 1, -1, 2])).toEqual(expectedOutput)
    })
  
    test('should handle arrays where all elements are the same', () => {
      expect(threeSum([1, 1, 1])).toEqual([])
    })
    test('Case 1', () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1,-1,2],[-1,0,1]])
    })
  })
  