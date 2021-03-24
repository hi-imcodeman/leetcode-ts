function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;
        const offsetIndex = nums.indexOf(diff, i + 1);
        if (offsetIndex > i) {
            return [i, offsetIndex]
        }
    }
    return []
}

export { twoSum }
