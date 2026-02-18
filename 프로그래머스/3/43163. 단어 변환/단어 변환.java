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
    
    public void dfs(String str, String target, String[] words, int index, int[] check) {
        if(answer < index) return;
        if(str.equals(target)) {
            answer = Math.min(answer, index);
            return;
        }
        for(int i = 0; i < words.length; i++) {
            if(check[i] == 0 && near(words[i], str)) {
                check[i] = 1;
                dfs(words[i], target, words, index+1, check);
                check[i] = 0;
            }
        }
    }
    
    public int solution(String begin, String target, String[] words) {
        int[] check = new int[words.length];
        
        dfs(begin, target, words, 0, check);
        
        return answer == 1000000 ? 0 : answer;
    }
}