let spammer;

const buttons = [];
for (let i = 0; i <= 8; i++) {
    const button = document.getElementById(`ttt${i}`);
    if (button) {
        buttons.push(button);
    } else {
        console.error(`Button with ID ttt${i} not found.`);
    }
}

let loopCount = 0;

function clickAllButtons() {
    buttons.forEach(button => {
        button.click();
        console.log(`Button ${button.id} clicked`);
    });
}

function startSpamming() {
    function spamLoop() {
        clickAllButtons();
        loopCount++;
        if (loopCount < 1) {
            requestAnimationFrame(spamLoop);
        }
    }
    spamLoop();
}

startSpamming();

document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'p') {
        console.log("Spamming stopped.");
    }
});
