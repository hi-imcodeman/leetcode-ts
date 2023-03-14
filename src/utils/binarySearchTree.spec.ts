import { insertLevelOrderBST } from './binarySearchTree'

describe('Binary Search Tree',()=>{
    test('insertLevelOrderBST:number',()=>{
        const bst = insertLevelOrderBST([1,2,3,4])
        expect(bst).toMatchSnapshot()
    })
    test('insertLevelOrderBST:string',()=>{
        const bst = insertLevelOrderBST(['a','c','A'])
        expect(bst).toMatchSnapshot()
    })
})
