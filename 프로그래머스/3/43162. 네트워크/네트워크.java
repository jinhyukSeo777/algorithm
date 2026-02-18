import java.util.*;

class Solution {
    HashSet<Integer> set =  new HashSet<>();
    
    public void bfs(int n, int[][] computers) {
        Deque<Integer> queue = new ArrayDeque<>();
        queue.push(n);
        set.add(n);
        
        while(queue.size() > 0) {
            int item = queue.poll();
            for(int i = 0; i < computers[item].length; i++) {
                if(set.contains(i) || computers[item][i] == 0 || i == n) continue;
                queue.push(i);
                set.add(i);
            }
        }
    }
    
    public int solution(int n, int[][] computers) {
        int answer = 0;
        
        for(int i = 0; i < n; i++) {
            if(set.contains(i)) continue;
            bfs(i, computers);
            answer++;
        }
        
        return answer;
    }
}