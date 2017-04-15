getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

new Vue({
    el: '#ground',
    data: {
        playerHealth: 100,
        cpuHealth: 100,
        gameStatus: false
    },
    methods: {
        begin: function(){
            this.gameStatus= true;
            this.playerHealth = 100;
            this.cpuHealth = 100;
        },
        attack: function () {
            if (this.cpuHealth > 0) {
                let damage = getRandomInt(5, 15)
                this.cpuHealth -= damage;
                console.log("CPU LOST " + damage + " points");
                if (this.playerHealth > 0) {
                    let damage2 = getRandomInt(5, 15);
                    this.playerHealth -= damage2;
                    console.log("YOU LOST " + damage2 + " points");
                } else {
                    alert("YOU LOST NIGGA");
                }
            } else {
                alert("YOU WIN");
            }
        }
    }
});
