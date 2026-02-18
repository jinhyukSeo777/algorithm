import java.util.*;

class Solution {
    public int bfs(int[] start, int[] end, String[] maps) {
        int height = maps.length;
        int width = maps[0].length();
        int[][] arr = new int[height][width];
        int[][] d = {{-1, 0}, {1, 0}, {0, 1}, {0, -1}};
        
        for(int i = 0; i < height; i++) {
            for(int j = 0; j < width; j++) {
                arr[i][j] = -1;
            }
        }
        
        Deque<int[]> queue = new ArrayDeque<>();
        queue.offer(new int[]{start[0], start[1]});
        arr[start[0]][start[1]] = 0;
        
        while(queue.size() > 0) {
            int[] item = queue.pop();
            int y = item[0];
            int x = item[1];
            
            for(int[] dd : d) {
                int dy = dd[0];
                int dx = dd[1];
                int nx = x + dx;
                int ny = y + dy;
                if(ny >= 0 && ny < height && nx >= 0 && nx < width) {
                    if(arr[ny][nx] == -1 && maps[ny].charAt(nx) != 'X') {
                        arr[ny][nx] = arr[y][x]+1;
                        queue.offer(new int[]{ny, nx});
                    }
                }
            }
        }
        
        return arr[end[0]][end[1]];
    }
    
    public int solution(String[] maps) {        
        int[] S = new int[2];
        int[] L = new int[2];
        int[] E = new int[2];
        
        for(int i = 0; i < maps.length; i++) {
            for(int j = 0; j < maps[0].length(); j++) {
                if(maps[i].charAt(j) == 'S') {
                    S[0] = i;
                    S[1] = j;
                }
                if(maps[i].charAt(j) == 'L') {
                    L[0] = i;
                    L[1] = j;
                }
                if(maps[i].charAt(j) == 'E') {
                    E[0] = i;
                    E[1] = j;
                }
            }
        }
        
        int SToL = bfs(S, L, maps);
        int LToE = bfs(L, E, maps);
        
        if(SToL == -1 || LToE == -1) return -1;
        
        return SToL + LToE;
    }
}