import java.util.*;

class Solution {
    int answer = 1000000;
    
    public boolean near(String str1, String str2) {
        if(str1.length() != str2.length()) return false;
        
        int count = 0;
        for(int i = 0; i < str1.length(); i++) {
            if(str1.charAt(i) != str2.charAt(i)) {
                count++;
                if(count == 2) return false;
            }
        }
            
        return true;
    }
    
    public void dfs(String str, String target, String[] words, int index, Set<String> set) {
        if(answer < index) return;
        if(str.equals(target)) {
            answer = Math.min(answer, index);
            return;
        }
        for(String s : words) {
            if(!set.contains(s) && near(s, str)) {
                set.add(s);
                dfs(s, target, words, index+1, set);
                set.remove(s);
            }
        }
    }
    
    public int solution(String begin, String target, String[] words) {
        Set<String> set = new HashSet<>();
        
        dfs(begin, target, words, 0, set);
        
        return answer == 1000000 ? 0 : answer;
    }
}