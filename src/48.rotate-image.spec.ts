import { rotate } from './48.rotate-image'
describe('groupAnagrams', () => {
    it('Case 1', () => {
        const arr=[[1,2,3],[4,5,6],[7,8,9]]
        rotate(arr)
        expect(arr).toEqual([[7,4,1],[8,5,2],[9,6,3]])
    });
});
