import { groupAnagrams } from './49.group-anagrams'
describe('groupAnagrams', () => {
    it('should group anagrams correctly', () => {
        const input = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']
        const expectedOutput = [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]
        expect(groupAnagrams(input)).toEqual(expectedOutput)
    });

    it('should return an empty array if given an empty array', () => {
        const input: string[] = []
        const expectedOutput: string[][] = []
        expect(groupAnagrams(input)).toEqual(expectedOutput)
    });

    it('should handle single element empty quotes array ', () => {
        const input: string[] = [""]
        const expectedOutput: string[][] = [[""]]
        expect(groupAnagrams(input)).toEqual(expectedOutput)
    });

    it('should handle single element array', () => {
        const input = ['hello']
        const expectedOutput = [['hello']]
        expect(groupAnagrams(input)).toEqual(expectedOutput)
    });
});
