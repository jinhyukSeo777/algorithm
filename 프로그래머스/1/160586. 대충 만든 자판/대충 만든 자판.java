import java.util.*;

class Solution {
    public int[] solution(String[] keymap, String[] targets) {
        int[] answer = new int[targets.length];
        Map<Character, Integer> map = new HashMap<>();
        
        for(int i = 0; i < keymap.length; i++) {
            String str = keymap[i];
            
            for(int j = 0; j < str.length(); j++) {
                char ch = str.charAt(j);
                
                if(map.containsKey(ch)) map.put(ch, Math.min(j+1, map.get(ch)));
                else map.put(ch, j+1);
            }
        }
        
        for(int i = 0; i < targets.length; i++) {
            String str = targets[i];
            int sum = 0;
            
            for(int j = 0; j < str.length(); j++) {
                char ch = str.charAt(j);
                
                if(!map.containsKey(ch)) {
                    sum = -1;
                    break;
                }
                
                sum+=map.get(ch);
            }
            
            answer[i] = sum;
        }
        
        return answer;
    }
}