import { fizzBuzz } from './412.fizz-buzz'
describe('fizzBuzz', () => {
  it('should return an empty array when n is 0', () => {
    const n = 0
    const expectedOutput: string[] = []
    const result = fizzBuzz(n)
    expect(result).toEqual(expectedOutput)
  })
  it('should return an proper array when n is 3', () => {
    const n = 3
    const expectedOutput: string[] = ["1","2","Fizz"]
    const result = fizzBuzz(n)
    expect(result).toEqual(expectedOutput)
  })
  it('should return an proper array when n is 5', () => {
    const n = 5
    const expectedOutput: string[] = ["1","2","Fizz","4","Buzz"]
    const result = fizzBuzz(n)
    expect(result).toEqual(expectedOutput)
  })
  it('should return an proper array when n is 15', () => {
    const n = 15
    const expectedOutput: string[] = ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
    const result = fizzBuzz(n)
    expect(result).toEqual(expectedOutput)
  })
})
