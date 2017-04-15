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
        begin: function () {
            this.gameStatus = true;
            this.playerHealth = 100;
            this.cpuHealth = 100;
        },
        attack: function () {
            let cpuDamage = getRandomInt(3, 10);
            this.cpuHealth -= cpuDamage;
            if (this.cpuHealth <= 0) {
                alert("YOU WON!");
                this.gameStatus = false;
                return;
            }
            let playerDamage = getRandomInt(5, 12);
            this.playerHealth -= playerDamage;
            if(this.playerHealth <= 0){
                alert("You're a loser");
                this.gameStatus = false;
            }

        },
        spl: function () {

        },
        heal: function () {

        },
        quit: function () {

        }
    }
});
