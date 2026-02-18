import java.util.*;

class Solution {
    public String solution(String[] participant, String[] completion) {
        Map<String, Integer> map = new HashMap<>();
    
        for(String name : completion) {
            if(map.containsKey(name)) map.put(name, map.get(name)+1);
            else map.put(name, 1);
        }
        
        for(String name : participant) {
            if(!map.containsKey(name)) return name;
            
            int life = map.get(name);
            
            if(life == 0) return name;
            
            map.put(name, map.get(name)-1);
        }
        
        return "";
    }
}