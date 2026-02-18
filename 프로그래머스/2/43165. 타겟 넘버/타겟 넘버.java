import java.util.*;

class Solution {
    int answer = 0;
    
    public void dfs(int[] numbers, int target, int sum, int index) {
        if(index == numbers.length) {
            if(sum == target) answer++;
            return;
        }
        dfs(numbers, target, sum+numbers[index], index+1);
        dfs(numbers, target, sum-numbers[index], index+1);
    }
    
    public int solution(int[] numbers, int target) {
        dfs(numbers, target, 0, 0);
        
        return answer;
    }
}