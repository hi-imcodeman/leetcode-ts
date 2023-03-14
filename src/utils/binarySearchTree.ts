import { TreeNode } from './binaryTree'

export function insertLevelOrderBST(arr: number[]|string[]): TreeNode | null {
    let root:TreeNode|null = null
    const insert = (value:number|string,node:TreeNode|null)=>{
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