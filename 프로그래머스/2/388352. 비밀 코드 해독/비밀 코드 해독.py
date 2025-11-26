def solution(n, q, ans):
    answer = 0
    
    def check(a,b,c,d,e):
        for i in range(len(q)):
            arr = q[i]
            count = 0
            if a in arr:
                count+=1
            if b in arr:
                count+=1
            if c in arr:
                count+=1
            if d in arr:
                count+=1
            if e in arr:
                count+=1
            if count != ans[i]:
                return False 
        return True
    
    for a in range(1, n-3):
        for b in range(a+1, n-2):
            for c in range(b+1, n-1):
                for d in range(c+1, n):
                    for e in range(d+1, n+1):
                        if check(a,b,c,d,e):
                            answer+=1
    
    return answer