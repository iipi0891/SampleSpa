﻿namespace("com.samplespa.pages", function () {
    this.page3 = function (controller) {
        function jump() {
            controller.show('page1');
        }

        return {
            jump: jump
        }
    }
});