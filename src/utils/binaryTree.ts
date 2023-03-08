export type NumberOrNull = number | null
// Definition for a binary tree node.
export class TreeNode<T=number> {
    val: T | null
    left: TreeNode<T> | null
    right: TreeNode<T> | null
    constructor(val?: T | null, left?: TreeNode<T> | null, right?: TreeNode<T> | null) {
        this.val = (val === undefined ? null : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export function insertLevelOrder<T>(data:T[],i=0):TreeNode<T>|null{
    let root = null
    if(i<data.length){
        root = new TreeNode<T>(data[i])
        root.left = insertLevelOrder(data,2*i+1)
        root.right = insertLevelOrder(data,2*i+2)
    }
    return root
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
    }
    return arr
}