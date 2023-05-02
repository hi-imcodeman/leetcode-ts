import { generateParenthesis } from './22.generate-parentheses'
describe('generateParenthesis', () => {
    it('should return an empty array when n is 0', () => {
      const n = 0
      const expectedOutput: string[] = []
  
      const result = generateParenthesis(n)
  
      expect(result).toEqual(expectedOutput)
    })
  
    it('should return an array with one element when n is 1', () => {
      const n = 1
      const expectedOutput = ['()']
  
      const result = generateParenthesis(n)
  
      expect(result).toEqual(expectedOutput)
    })
  
    it('should handle larger values of n', () => {
      const n = 3
      const expectedOutput = [
        '((()))',
        '(()())',
        '(())()',
        '()(())',
        '()()()'
      ]
  
      const result = generateParenthesis(n)
  
      expect(result).toEqual(expectedOutput)
    })
  })
  