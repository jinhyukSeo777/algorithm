function solution(bandage, health, attacks) {
    const [finish_time, heal_per_sec, bonus_heal] = bandage;
    let hp = health;
    let time = 0;
    
   for(let [attack_time, damage] of attacks) {
        const heal_time = attack_time-time-1;
        const heal = Math.floor(heal_time/finish_time)*bonus_heal + (heal_time)*heal_per_sec;
        hp = Math.min(health, hp+heal);
        
        hp-=damage
        time = attack_time;
        if(hp <= 0) return -1
    }
    
    return hp;
}