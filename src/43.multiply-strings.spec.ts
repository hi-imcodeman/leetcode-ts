import { multiply } from './43.multiply-strings'

describe('multiply-strings',()=>{
    test('Case 1',()=>{
        const result=multiply("401716832807512840963","167141802233061013023557397451289113296441069")
        expect(result).toBe("67143675422804947379429215144664313370120390398055713625298709447")
    })
    test('Case 2',()=>{
        const result=multiply("1234","1")
        expect(result).toBe("1234")
    })
})