import { lowestCommonAncestor } from './236.lowest-common-ancestor-of-a-binary-tree'
import { insertLevelOrder } from './utils'

describe('236. Lowest common Ancestor of a binary tree', () => {
    test('Case 1', () => {
        const root = insertLevelOrder([3,5,1,6,2,0,8,null,null,7,4])
        const p = insertLevelOrder([5,6,2,null,null,7,4])
        const q = insertLevelOrder([1,0,8])
        const result = lowestCommonAncestor(root,p,q)
        expect(result).toMatchSnapshot()
    })
    test('Case 2', () => {
        const root = insertLevelOrder([3,5,1,6,2,0,8,null,null,7,4])
        const p = insertLevelOrder([5,6,2,null,null,7,4])
        const q = insertLevelOrder([5])
        const result = lowestCommonAncestor(root,p,q)
        expect(result).toEqual(p)
    })
    test('Case 3', () => {
        const root = insertLevelOrder([1,2])
        const p = insertLevelOrder([1,2])
        const q = insertLevelOrder([2])
        const result = lowestCommonAncestor(root,p,q)
        expect(result).toEqual(p)
    })
})