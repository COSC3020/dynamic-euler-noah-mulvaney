// COSC3020 Dynamic Euler's Number Exercise
// Noah Mulvaney, nmulvane@uwyo.edu
// 3 Apr 2024

function e(n) {
    let sum = 1;
    let fact = 1;
    
    for (let i = 1; i <= n; ++i)
        sum += 1 / (fact *= i);
    
    return sum;
}
