let array = [1, 5, 7, 10, 11]

let total_sum = array.reduce((total, curr) => {
    return total + curr
}, 0)

// console.log(total_sum);
for (let i = 0; i < array.length; i++) {
    let replacable = total_sum - array[i]

    array[i] = replacable
}
console.log(array);