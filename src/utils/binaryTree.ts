export type NumberOrNull = number | null
// Definition for a binary tree node.
export class TreeNode {
    val: NumberOrNull
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number | null, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? null : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export function insertLevelOrder(data:NumberOrNull[],i=0):TreeNode|null{
    let root = null
    if(i<data.length){
        root = new TreeNode(data[i])
        root.left = insertLevelOrder(data,2*i+1)
        root.right = insertLevelOrder(data,2*i+2)
    }
    return root
}

export function inOrder(root:TreeNode|null,arr:NumberOrNull[]=[]){
    if(root !== null){
        inOrder(root.left,arr)
        arr.push(root.val)
        inOrder(root.right,arr)
    }
    return arr
}

export function preOrder(root:TreeNode|null,arr:NumberOrNull[]=[]){
    if(root !== null){
        arr.push(root.val)
        inOrder(root.left,arr)
        inOrder(root.right,arr)
    }
    return arr
}

export function postOrder(root:TreeNode|null,arr:NumberOrNull[]=[]){
    if(root !== null){
        inOrder(root.left,arr)
        inOrder(root.right,arr)
        arr.push(root.val)
    }
    return arr
}

export function levelOrder(root:TreeNode|null,arr:Array<NumberOrNull[]>=[],level=0){
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