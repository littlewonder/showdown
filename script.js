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
        userwidth: 100,
        cpuwidth: 100
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
                this.cpuwidth -= damage;
                console.log("CPU LOST " + damage + " points");
                if (this.playerHealth > 0) {
                    let damage2 = getRandomInt(5, 15);
                    this.playerHealth -= damage2;
                    this.userwidth -= damage2;
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
