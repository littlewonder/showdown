getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

new Vue({
    el: '#ground',
    data: {
        playerHealth: 100,
        cpuHealth: 100
    },
    methods: {
        reload: function () {
            let temp = window.location.href;
            window.location = temp;
        },
        attack: function () {
            if (this.cpuHealth > 0) {
                let damage = getRandomInt(5, 15)
                this.cpuHealth -= damage;
                if (this.playerHealth > 0) {
                    let damage2 = getRandomInt(4, 14);
                    this.playerHealth -= damage2;
                } else {
                    alert("GAME OVER");
                }
            } else {
                alert("YOU WIN");
            }
        }
    }
});
