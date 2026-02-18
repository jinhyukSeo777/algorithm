import java.util.*;

class Solution {
    public int[] solution(int n, int[][] roads, int[] sources, int destination) {
        int[] answer = new int[sources.length];
        int[] arr = new int[n+1];
        Map<Integer, Set<Integer>> map = new HashMap<>();
        
        for(int i = 0; i < arr.length; i++) arr[i] = -1;
        
        for(int i = 0; i < roads.length; i++) {
            int start = roads[i][0];
            int end = roads[i][1];
            
            if(!map.containsKey(start)) map.put(start, new HashSet<>());
            if(!map.containsKey(end)) map.put(end, new HashSet<>());
            map.get(start).add(end);
            map.get(end).add(start);
        }
        
        Deque<Integer> queue = new ArrayDeque<>();
        arr[destination] = 0;
        queue.offer(destination);
        
        while(queue.size() > 0) {
            int current = queue.pop();
            for(int next : map.get(current)) {
                if(arr[next] == -1) {
                    arr[next] = arr[current]+1;
                    queue.offer(next);
                }
            }
        }
        
        for(int i = 0; i < sources.length; i++) {
            answer[i] = arr[sources[i]];
        }
        
        return answer;
    }
}