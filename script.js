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
            let cpuDamage = this.getRandomInt(3, 10);
            this.cpuHealth -= cpuDamage;
            if (this.winStatus()) {
                return;
            }
            let playerDamage = this.getRandomInt(5, 12);
            this.playerHealth -= playerDamage;
            this.winStatus();

        },
        spl: function () {
            let cpuDamage = this.getRandomInt(10, 20);
            this.cpuHealth -= cpuDamage;
            if (this.winStatus()) {
                return;
            }
            let playerDamage = this.getRandomInt(5, 12);
            this.playerHealth -= playerDamage;
            this.winStatus();
        },
        heal: function () {

        },
        quit: function () {

        },
        getRandomInt: function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        winStatus: function () {
            if (this.cpuHealth <= 0) {
                if (confirm("You won! New game?")) {
                    this.begin();
                } else {
                    this.gameStatus = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm("You lost! Try again?")) {
                    this.begin();
                } else {
                    this.gameStatus = false;
                }
                return true;
            }
            return false;
        }
    }
});
