new Vue({
    el: '#ground',
    data: {
        playerHealth: 100,
        cpuHealth: 100,
        gameStatus: false,
        comments: [],
        trigger: false
    },
    methods: {
        begin: function () {
            this.gameStatus = true;
            this.playerHealth = 100;
            this.cpuHealth = 100;
            this.comments = [];
        },
        attack: function () {
            this.playerAttacks(3, 10);
            this.cpuAttacks();
        },
        spl: function () {
            this.playerAttacks(10, 20);
            this.cpuAttacks();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.comments.unshift({
                isPlayer: true,
                text: 'Player Healed'
            });
            this.cpuAttacks();
        },
        quit: function () {
            this.reset();
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
                    this.reset();
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm("You lost! Try again?")) {
                    this.begin();
                } else {
                    this.reset();
                }
                return true;
            }
            return false;
        },
        cpuAttacks: function () {
            let playerDamage = this.getRandomInt(5, 12);
            this.playerHealth -= playerDamage;
            this.comments.unshift({
                isPlayer: false,
                text: 'Player lost ' + playerDamage + ' points'
            });
            this.winStatus();
        },
        playerAttacks: function (x, y) {
            let cpuDamage = this.getRandomInt(x, y);
            this.cpuHealth -= cpuDamage;
            this.comments.unshift({
                isPlayer: true,
                text: 'CPU lost ' + cpuDamage + ' points'
            });
            if (this.winStatus()) {
                return;
            }
        },
        reset: function () {
            this.gameStatus = false;
            this.comments = [];
        }
    }
});
