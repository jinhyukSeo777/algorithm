import java.util.*;

class Solution {
    public int bfs(int[][] wires, int n, int x) {
        Map<Integer, Set<Integer>> map = new HashMap<>();
        Set<Integer> set = new HashSet<>();
        
        for(int i = 0; i < wires.length; i++) {
            if(i == x) continue;
            int start = wires[i][0];
            int end = wires[i][1];
            
            if(!map.containsKey(start)) map.put(start, new HashSet());
            if(!map.containsKey(end)) map.put(end, new HashSet());
            map.get(start).add(end);
            map.get(end).add(start);
        }
        
        Deque<Integer> queue = new ArrayDeque<>();
        queue.offer(1);
        set.add(1);
        
        while(queue.size() > 0) {
            int current = queue.pop();
            if(!map.containsKey(current)) continue;
            for(int next : map.get(current)) {
                if(!set.contains(next)) {
                    queue.offer(next);
                    set.add(next);
                }
            }
        }
        
        return set.size();
    }
    
    public int solution(int n, int[][] wires) {
        int answer = 10000000;
        
        for(int i = 0; i < wires.length; i++) {
            int len = bfs(wires, n, i);
            
            answer = Math.min(answer, Math.abs(len - (n-len)));
        }
        
        return answer;
    }
}