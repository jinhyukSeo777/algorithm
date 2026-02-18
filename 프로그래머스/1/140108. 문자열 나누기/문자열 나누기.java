class Solution {
    public int solution(String s) {
        int answer = 0;
        int index = 0;
        
        String x = "";
        int left = -1;
        int right = -1;
        
        while(index < s.length()) {
            if(x.equals("")) {
                x = s.substring(index, index+1);
                left = 1;
                right = 0;
                index++;
                continue;
            }
            
            if(s.substring(index, index+1).equals(x)) left++;
            else right++;

            if(left == right) {
                answer++;
                x = "";
            }

            index++;
        }
        
        if(!x.equals("")) answer++;
        
        return answer;
    }
}