class Solution {
    public int solution(String skill, String[] skill_trees) {
        int answer = 0;
        
        for(int i = 0; i < skill_trees.length; i++) {
            String skill_tree = skill_trees[i];
            String temp = "";
            
            for(int j = 0; j < skill_tree.length(); j++) {
                if(skill.contains(skill_tree.substring(j, j+1))) temp += skill_tree.substring(j, j+1);
            }
            
            if(skill.startsWith(temp)) answer++;
        }
        
        return answer;
    }
}