Module.register("MMM-XmasCountdown", {
    defaults: {
        target: "2025-12-25T00:00:00",
        showSeconds: true,
        showTree: true,
        lowPowerMode: false,
        animations: {
            star: true,        // Twinkling star
            lights: true,      // Blinking lights
            sway: true,        // Swaying tree
            shimmer: true,     // Shimmering tree layers
            presents: true,    // Bouncing presents
            countdown: true    // Pulsing countdown numbers
        }
    },

    start: function () {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.uniqueId = this.identifier; // Use MagicMirror's unique module identifier
        this.updateTimer();
        setInterval(() => this.updateTimer(), 1000);
    },

    updateTimer: function () {
        const now = new Date();
        const target = new Date(this.config.target);
        const diff = target - now;

        if (diff <= 0) {
            this.days = 0;
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
        } else {
            this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            this.minutes = Math.floor((diff / (1000 * 60)) % 60);
            this.seconds = Math.floor((diff / 1000) % 60);
        }

        // Update DOM directly without full rerender
        this.updateCountdownDisplay();
    },

    updateCountdownDisplay: function () {
        const wrapper = document.getElementById("xmas-wrapper-" + this.uniqueId);
        if (!wrapper) return;

        const countdown = wrapper.querySelector("#xmas-countdown");
        if (!countdown) return;

        const items = countdown.querySelectorAll(".countdown-number");
        if (items[0]) items[0].textContent = this.days;
        if (items[1]) items[1].textContent = this.hours;
        if (items[2]) items[2].textContent = this.minutes;
        if (items[3]) items[3].textContent = this.seconds;
    },

    getDom: function () {
        const wrapper = document.createElement("div");
        wrapper.id = "xmas-wrapper-" + this.uniqueId;

        // Build class list based on config
        let classes = ["xmas-wrapper"];
        if (this.config.lowPowerMode) {
            classes.push("low-power");
        } else {
            // Add individual animation disable classes
            if (!this.config.animations.star) classes.push("no-star-anim");
            if (!this.config.animations.lights) classes.push("no-lights-anim");
            if (!this.config.animations.sway) classes.push("no-sway-anim");
            if (!this.config.animations.shimmer) classes.push("no-shimmer-anim");
            if (!this.config.animations.presents) classes.push("no-presents-anim");
            if (!this.config.animations.countdown) classes.push("no-countdown-anim");
        }
        wrapper.className = classes.join(" ");

        if (this.config.showTree) {
            // Animated Christmas tree
            const treeContainer = document.createElement("div");
            treeContainer.id = "xmas-tree-container";
            treeContainer.innerHTML = `
        <div class="xmas-tree">
          <div class="tree-star">⭐</div>
          <div class="tree-lights">
            <span class="light light-red">●</span>
            <span class="light light-blue">●</span>
            <span class="light light-yellow">●</span>
          </div>
          <div class="tree-body">
            <div class="tree-layer">🌲</div>
            <div class="tree-layer">🌲🌲</div>
            <div class="tree-layer">🌲🌲🌲</div>
          </div>
          <div class="tree-trunk">🟫</div>
          <div class="tree-presents-stack"></div>
        </div>
      `;
            wrapper.appendChild(treeContainer);

            // Add stacked presents - more presents as Christmas gets closer!
            // 25 days out = 0 presents, 0 days out = 25 presents
            const presentsStack = treeContainer.querySelector(".tree-presents-stack");
            if (presentsStack) {
                const presentEmojis = ["🎁", "🎀", "📦"];
                const daysRemaining = this.days + 1; // Count today as a full day
                const presentsToShow = Math.max(0, 25 - daysRemaining); // Inverse: closer = more presents

                let presentIndex = 0;
                let row = 1;

                while (presentIndex < presentsToShow) {
                    const rowDiv = document.createElement("div");
                    rowDiv.className = "presents-row";
                    rowDiv.style.zIndex = 100 - row; // Higher rows on top

                    // Add 'row' number of presents to this row
                    for (let i = 0; i < row && presentIndex < presentsToShow; i++) {
                        const present = document.createElement("span");
                        present.className = "present-item";
                        present.style.animationDelay = (presentIndex * 0.1) + "s";
                        present.textContent = presentEmojis[presentIndex % presentEmojis.length];
                        rowDiv.appendChild(present);
                        presentIndex++;
                    }

                    presentsStack.appendChild(rowDiv);
                    row++;
                }
            }
        }

        // Countdown numbers
        const countdown = document.createElement("div");
        countdown.id = "xmas-countdown";

        const daysEl = document.createElement("div");
        daysEl.className = "countdown-item";
        daysEl.innerHTML = `<span class="countdown-number">${this.days}</span><span class="countdown-label">Days</span>`;
        countdown.appendChild(daysEl);

        const hoursEl = document.createElement("div");
        hoursEl.className = "countdown-item";
        hoursEl.innerHTML = `<span class="countdown-number">${this.hours}</span><span class="countdown-label">Hours</span>`;
        countdown.appendChild(hoursEl);

        const minsEl = document.createElement("div");
        minsEl.className = "countdown-item";
        minsEl.innerHTML = `<span class="countdown-number">${this.minutes}</span><span class="countdown-label">Minutes</span>`;
        countdown.appendChild(minsEl);

        if (this.config.showSeconds) {
            const secsEl = document.createElement("div");
            secsEl.className = "countdown-item";
            secsEl.innerHTML = `<span class="countdown-number">${this.seconds}</span><span class="countdown-label">Seconds</span>`;
            countdown.appendChild(secsEl);
        }

        wrapper.appendChild(countdown);

        return wrapper;
    },

    getStyles: function () {
        return ["MMM-XmasCountdown.css"];
    }
});
