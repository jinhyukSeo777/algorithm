function solution(sequence) {
    let sum = 0, sum1 = 0, sum2 = 0;

    for (let i = 0; i < sequence.length; i++) {
        let sign1 = i % 2 === 0 ? 1 : -1;
        let sign2 = i % 2 === 0 ? -1 : 1;

        sum1 = Math.max(sequence[i] * sign1, sum1 + sequence[i] * sign1);
        sum2 = Math.max(sequence[i] * sign2, sum2 + sequence[i] * sign2);
        
        sum = Math.max(sum, sum1, sum2);
    }
    
    return sum;
}
