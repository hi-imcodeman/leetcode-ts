import { twoSum } from './index'

describe('Two Sum', () => {
    const testSets = [
        { input: [2, 3, 6, 8], target: 9, expectedResult: [1, 2] },
        { input: [1, 2, 3], target: 3, expectedResult: [0, 1] },
        { input: [1, 2, 3, 4, 5, 6], target: 9, expectedResult: [2, 5] },
        { input: [3, 2, 3], target: 6, expectedResult: [0, 2] }
    ]
    testSets.forEach((testSet, i) => {
        it(`Test case ${i + 1}`, () => {
            const { input, target, expectedResult } = testSet
            const result = twoSum(input, target)
            expect(result).toEqual(expectedResult)
        })
    })
})