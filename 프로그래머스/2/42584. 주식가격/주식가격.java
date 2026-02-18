import java.util.*;

class Solution {
    public int[] solution(int[] prices) {
        int[] answer = new int[prices.length];
        Deque<Integer> stack = new ArrayDeque<>();
        
        for(int i = 0; i < prices.length; i++) {
            while(stack.size() > 0 && prices[stack.peek()] > prices[i]) {
                answer[stack.peek()] = i - stack.peek();
                stack.pop();
            }
            
            stack.push(i);
        }
        
        while(stack.size() > 0) {
            answer[stack.peek()] = (prices.length - 1) - stack.peek();
            stack.pop();
        }
        
        return answer;
    }
}