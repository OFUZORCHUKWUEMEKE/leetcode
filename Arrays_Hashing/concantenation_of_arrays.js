


// less efficeint approach
function concat(nums) {
    const res = []
    for (let i = 0; i < 2; i++) {
        for (const num of nums) {
            res.push(num)
        }
    }
    return res
}


// more efficient approach
function concatenation(nums) {
    const res = []

    for (let i = 0; i < nums.length * 2; i++) {
        res.push(num[i % nums.length])
    }
    return res
}