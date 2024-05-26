//your code here
function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    // Phase 1: Find a candidate for majority element
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Phase 2: Verify the candidate is actually the majority element
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    if (count > Math.floor(nums.length / 2)) {
        return candidate;
    } else {
        throw new Error("No majority element found");
    }
}

// Example usage:
const arr = [2, 1, 2];
console.log(majorityElement(arr)); // Output: 2
