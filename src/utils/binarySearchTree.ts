import { TreeNode } from './binaryTree'

export function insertLevelOrderBST(arr: number[]|string[]): TreeNode<number|string> | null {
    let root:TreeNode<number|string>|null = null
    const insert = (value:number|string,node:TreeNode<number|string>|null)=>{
        if(node === null)
            return new TreeNode(value)
        if(value < node.val){
            node.left = insert(value,node.left)
        }else if(value >= node.val){
            node.right = insert(value,node.right)
        }
        return node
    }
    arr.forEach((item:number|string)=>{
        root = insert(item,root)
    })
    return root
}