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
            this.playerAttacks(3,10);
            this.cpuAttacks();

        },
        spl: function () {
            this.playerAttacks(10,20);
            this.cpuAttacks();
        },
        heal: function () {
            if(this.playerHealth<=90){
                this.playerHealth +=10;
            }else{
                this.playerHealth = 100;
            }
            this.cpuAttacks();
        },
        quit: function () {
            this.gameStatus = false;
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
        },
        cpuAttacks: function(){
            let playerDamage = this.getRandomInt(5, 12);
            this.playerHealth -= playerDamage;
            this.winStatus();
        },
        playerAttacks: function(x,y){
            let cpuDamage = this.getRandomInt(x,y);
            this.cpuHealth -= cpuDamage;
            if (this.winStatus()) {
                return;
            }
        }
    }
});
