import {
    insertLevelOrder,
    inOrder,
    preOrder,
    postOrder,
    levelOrder,
    getAsciiTree
} from './binaryTree'
import {flatten} from 'lodash'


describe('Binary Tree Utils', () => {
    test('insertLevelOrder', () => {
        const bt = insertLevelOrder([1, 2, 3, 4, 5, 6, 6, 6, 6])
        expect(bt).toMatchSnapshot()
    })
    test('InOrder Traversal', () => {
        const bt = insertLevelOrder([1, 2, 3, 4, 5, 6, 6, 6, 6])
        const inOrderArr = inOrder(bt)
        expect(inOrderArr).toMatchSnapshot()
    })
    test('PreOrder Traversal', () => {
        const bt = insertLevelOrder([1, 2, 3, 4, 5, 6, 6, 6, 6])
        const preOrderArr = preOrder(bt)
        expect(preOrderArr).toMatchSnapshot()
    })
    test('PostOrder Traversal', () => {
        const bt = insertLevelOrder([1, 2, 3, 4, 5, 6, 6, 6, 6])
        const postOrderArr = postOrder(bt)
        expect(postOrderArr).toMatchSnapshot()
    })
    test('LevelOrder Traversal', () => {
        const bt = insertLevelOrder([1, 2, 3, 4, 5, 6, 6, 6, 6])
        const levelOrderArr = levelOrder(bt)
        expect(levelOrderArr).toMatchSnapshot()
    })
    test('LevelOrder Insert and Traversal with null', () => {
        const bt = insertLevelOrder([1, null, 2, null, null, 3])
        expect(bt).toMatchSnapshot('BT')
        const levelOrderArr = levelOrder(bt)
        expect(levelOrderArr).toMatchSnapshot('levelOrderArr')
    })
    test('Traversals with string', () => {
        const bt = insertLevelOrder(['a', 'b', 'c', null, 'e', 'f'])
        expect(bt).toMatchSnapshot('BT')
        const inOrderArr = inOrder(bt)
        const preOrderArr = preOrder(bt)
        const postOrderArr = postOrder(bt)
        expect(inOrderArr).toMatchSnapshot('inOrder')
        expect(preOrderArr).toMatchSnapshot('preOrder')
        expect(postOrderArr).toMatchSnapshot('postOrder')
    })
    test('Get ASCII Tree', () => {
        const asciiTree= getAsciiTree([3,5,1,6,2,0,8,null,null,7,4])
        expect(asciiTree).toMatchSnapshot()
    })

    test('Construct ASCII tree from BT', () => {
        const treeVals = [3,5,1,6,2,0,8,null,null,7,4]
        const asciiTreeFromArr= getAsciiTree(treeVals)
        const bt= insertLevelOrder(treeVals)
        const arr=levelOrder(bt)
        // arr.pop()
        const asciiTreeFromBT=getAsciiTree(flatten(arr))
        expect(asciiTreeFromBT).toBe(asciiTreeFromArr)
    })
})