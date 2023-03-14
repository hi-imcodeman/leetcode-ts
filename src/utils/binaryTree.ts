const { Node } = require('ascii-binary-tree')
import { flatten } from 'lodash'

export type StringOrNumber = string | number

// Definition for a binary tree node.
export class TreeNode {
    val: StringOrNumber
    left: TreeNode | null
    right: TreeNode | null
    constructor(val: StringOrNumber, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export function insertLevelOrder(data: (StringOrNumber | null)[], i = 0): TreeNode | null {
    let root = null
    if (i < data.length && data[i] !== null) {
        const val = data[i]
        root = new TreeNode(val as StringOrNumber)
        root.left = insertLevelOrder(data, 2 * i + 1)
        root.right = insertLevelOrder(data, 2 * i + 2)
    }
    return root
}

export function insertLevelOrderASCII(data: (StringOrNumber | null)[], i = 0): any {
    let root = null
    if (i < data.length && data[i] !== null) {
        root = Node.from(data[i])
        root.left = insertLevelOrderASCII(data, 2 * i + 1)
        root.right = insertLevelOrderASCII(data, 2 * i + 2)
    }
    return root
}

export function getAsciiTree(data: (StringOrNumber | null)[]) {
    const bt = insertLevelOrderASCII(data)
    return bt.render()
}

export function getAsciiTreeFromBT(root: TreeNode | null) {
    const levelOrderArr = levelOrder(root)
    console.log(levelOrderArr);
    return getAsciiTree(flatten(levelOrderArr))
}

export function inOrder(root: TreeNode | null, arr: StringOrNumber[] = []) {
    if (root !== null) {
        inOrder(root.left, arr)
        arr.push(root.val)
        inOrder(root.right, arr)
    }
    return arr
}

export function preOrder(root: TreeNode | null, arr: StringOrNumber[] = []) {
    if (root !== null) {
        arr.push(root.val)
        preOrder(root.left, arr)
        preOrder(root.right, arr)
    }
    return arr
}

export function postOrder(root: TreeNode | null, arr: StringOrNumber[] = []) {
    if (root !== null) {
        postOrder(root.left, arr)
        postOrder(root.right, arr)
        arr.push(root.val)
    }
    return arr
}

export function levelOrder(root: TreeNode | null, arr: Array<(StringOrNumber | null)[]> = [], level = 0) {
    if (root) {
        if (!arr[level]) {
            arr[level] = []
        }
        arr[level].push(root.val)
        levelOrder(root.left, arr, level + 1)
        levelOrder(root.right, arr, level + 1)
    }
    return arr
}