class Solution {
    public int solution(String s) {
        int answer = 0;
        int index = 0;
        
        char x = '-';
        int left = -1;
        int right = -1;
        
        while(index < s.length()) {
            if(x == '-') {
                x = s.charAt(index);
                left = 1;
                right = 0;
                index++;
                continue;
            }
            
            if(x == s.charAt(index)) left++;
            else right++;

            if(left == right) {
                answer++;
                x = '-';
            }

            index++;
        }
        
        if(x != '-') answer++;
        
        return answer;
    }
}