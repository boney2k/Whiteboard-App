let color = document.getElementById('colorPicker').value;

document.getElementById('colorPicker').addEventListener('input', (e) => {
    color = e.target.value;
});

const startDrawing = (e) => {
    if (currentMode !== 'draw') return;
    isDrawing = true;
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
};

const draw = (e) => {
    if (!isDrawing || currentMode !== 'draw') return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
};

const stopDrawing = () => {
    if (isDrawing) {
        isDrawing = false;
        ctx.closePath();
    }
};

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
