const { Node } = require('ascii-binary-tree')

// Definition for a binary tree node.
export class TreeNode<T=number> {
    val: T
    left: TreeNode<T> | null
    right: TreeNode<T> | null
    constructor(val: T, left?: TreeNode<T> | null, right?: TreeNode<T> | null) {
        this.val = val
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export function insertLevelOrder<T>(data:T[],i=0):TreeNode<T>|null{
    let root = null
    if(i<data.length && data[i] !== null){
        root = new TreeNode<T>(data[i])
        root.left = insertLevelOrder(data,2*i+1)
        root.right = insertLevelOrder(data,2*i+2)
    }
    return root
}

export function insertLevelOrderASCII<T>(data:T[],i=0):any{
    let root = null
    if(i<data.length && data[i] !== null){
        root = Node.from(data[i])
        root.left = insertLevelOrderASCII(data,2*i+1)
        root.right = insertLevelOrderASCII(data,2*i+2)
    }
    return root
}

export function getAsciiTree<T>(data:T[]){
    const bt = insertLevelOrderASCII(data)
    return bt.render()
}

export function inOrder<T>(root:TreeNode<T>|null,arr:(T|null)[]=[]){
    if(root !== null){
        inOrder(root.left,arr)
        arr.push(root.val)
        inOrder(root.right,arr)
    }
    return arr
}

export function preOrder<T>(root:TreeNode<T>|null,arr:(T|null)[]=[]){
    if(root !== null){
        arr.push(root.val)
        preOrder(root.left,arr)
        preOrder(root.right,arr)
    }
    return arr
}

export function postOrder<T>(root:TreeNode<T>|null,arr:(T|null)[]=[]){
    if(root !== null){
        postOrder(root.left,arr)
        postOrder(root.right,arr)
        arr.push(root.val)
    }
    return arr
}

export function levelOrder<T>(root:TreeNode<T>|null,arr:Array<(T|null)[]>=[],level=0){
    if(root){
        if(!arr[level]){
            arr[level]=[]
        }
        arr[level].push(root.val)
        levelOrder(root.left,arr,level+1)
        levelOrder(root.right,arr,level+1)
    }else{
        if(!arr[level]){
            arr[level]=[]
        }
        arr[level].push(null)
    }
    return arr
}