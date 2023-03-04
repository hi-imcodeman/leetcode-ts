import { insertLevelOrder, inOrder,preOrder,postOrder, levelOrder } from './binaryTree'

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
        const bt = insertLevelOrder([1,null,2,null,null,3])
        expect(bt).toMatchSnapshot('BT')
        const levelOrderArr = levelOrder(bt)
        expect(levelOrderArr).toMatchSnapshot('levelOrderArr')
    })
})