const NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
    start: function () {
        console.log("Starting node_helper for: " + this.name);
    },

    socketNotificationReceived: function (notification, payload) {
        if (notification === "GET_CURRENT_DATE") {
            const now = new Date();
            const currentMonth = now.getMonth(); // 0-11 (December = 11)
            const dayOfMonth = now.getDate(); // 1-31
            const year = now.getFullYear();

            // Calculate presents to show (only in December)
            const presentsToShow = (currentMonth === 11) ? Math.min(dayOfMonth, 25) : 0;

            console.log(this.name + ": Current date - " + now.toISOString());
            console.log(this.name + ": Day of month - " + dayOfMonth);
            console.log(this.name + ": Presents to show - " + presentsToShow);

            this.sendSocketNotification("CURRENT_DATE_RESULT", {
                month: currentMonth,
                day: dayOfMonth,
                year: year,
                presentsToShow: presentsToShow,
                isDecember: currentMonth === 11
            });
        }
    }
});
