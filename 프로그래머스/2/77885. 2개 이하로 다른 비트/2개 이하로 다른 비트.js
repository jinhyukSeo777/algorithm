function solution(numbers) {
    return numbers.map((number) => {
        if (number % 2 === 0) {
            return number + 1;
        }

        let binary = number.toString(2);
        if (!binary.includes('0')) {
            return parseInt('10' + binary.slice(1), 2);
        }

        let i = binary.lastIndexOf('0');
        let j = binary.indexOf('1', i); 
        binary = binary.substring(0, i) + '10' + binary.substring(j + 1);

        return parseInt(binary, 2); 
    });
}
