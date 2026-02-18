import java.util.*;

class Solution {
    public int bfs(int[][] newWires, int n) {
        int[][] arr = new int[1000][1000];
        Set<Integer> set = new HashSet<>();
        
        for(int i = 0; i < newWires.length; i++) {
            int[] newWire = newWires[i];
            arr[newWire[0]][newWire[1]] = 1;
            arr[newWire[1]][newWire[0]] = 1;
        }
        
        Deque<Integer> queue = new ArrayDeque<>();
        queue.push(1);
        set.add(1);
        
        while(queue.size() > 0) {
            int item = queue.poll();
            for(int i = 1; i <= n; i++) {
                if(arr[item][i] == 1 && !set.contains(i)) {
                    queue.push(i);
                    set.add(i);
                }
            }
        }
        
        return set.size();
    }
    
    public int solution(int n, int[][] wires) {
        int answer = 10000000;
        
        for(int i = 0; i < wires.length; i++) {
            int[][] newWires = new int[wires.length-1][2];
            
            int index = 0;
            for(int j = 0; j < wires.length; j++) {
                if(i == j) continue;
                newWires[index][0] = wires[j][0];
                newWires[index][1] = wires[j][1];
                index++;
            }
            
            int len = bfs(newWires, n);
            
            answer = Math.min(answer, Math.abs(len - (n-len)));
        }
        
        return answer;
    }
}