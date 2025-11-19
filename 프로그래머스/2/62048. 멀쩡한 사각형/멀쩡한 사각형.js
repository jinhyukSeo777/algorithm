function gcd(a, b) {
    return a % b ? gcd(b, a % b) : b;
}

function solution(w, h) {
    return w*h - (w+h-gcd(w,h));
}