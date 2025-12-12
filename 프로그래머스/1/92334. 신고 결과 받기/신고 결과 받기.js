function solution(id_list, report, k) {
    var answer = [];
    const report_set = new Set(report);
    const reporting = new Map();
    const reported = new Map();
    
    for(let id of id_list) {
        reporting.set(id, []);
        reported.set(id, 0);
    }
    
    for(let str of report_set) {
        const [from, to] = str.split(" ");
        reporting.get(from).push(to);
        reported.set(to, reported.get(to)+1);
    }
    
    const stopped = []
    for(let [id, count] of reported) {
        if(count >= k) stopped.push(id);
    }
    
    for(let id of id_list) {
        const report_history = reporting.get(id);
        const count = report_history.filter((v)=>stopped.includes(v)).length;
        answer.push(count);
    }
    
    return answer;
}