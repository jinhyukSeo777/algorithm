function solution(triangle) {
    const height = triangle.length;
    const dp = new Array(triangle.length).fill(null).map((v)=>new Array(triangle.at(-1).length));
    
    for(let i = 0; i < triangle.at(-1).length; i++) {
        dp[height-1][i] = triangle[height-1][i];
    }
    
    for(let i = height-2; i >= 0; i--) {
        for(let j = 0; j < triangle[i].length; j++) {
            dp[i][j] = Math.max(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j];
        }
    }
    
    return dp[0][0];
}