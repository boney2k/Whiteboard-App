const addText = (e) => {
    if (currentMode !== 'text') return;

    const text = prompt("Enter text:");
    if (text) {
        ctx.font = '24px Arial';
        ctx.fillStyle = color;
        ctx.fillText(text, e.offsetX, e.offsetY);
    }
};

canvas.addEventListener('click', addText);
