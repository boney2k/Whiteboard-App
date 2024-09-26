let startX, startY, endX, endY;

const startShape = (e) => {
    if (currentMode === 'rectangle' || currentMode === 'circle' || currentMode === 'line') {
        startX = e.offsetX;
        startY = e.offsetY;
        canvas.addEventListener('mousemove', drawShapePreview);
        canvas.addEventListener('mouseup', finishShape);
    }
};

const drawShapePreview = (e) => {
    if (currentMode === 'rectangle' || currentMode === 'circle' || currentMode === 'line') {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas to avoid overlaps
        endX = e.offsetX;
        endY = e.offsetY;

        if (currentMode === 'rectangle') {
            ctx.strokeRect(startX, startY, endX - startX, endY - startY);
        } else if (currentMode === 'circle') {
            const radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
            ctx.beginPath();
            ctx.arc(startX, startY, radius, 0, Math.PI * 2);
            ctx.stroke();
        } else if (currentMode === 'line') {
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
        }
    }
};

const finishShape = () => {
    canvas.removeEventListener('mousemove', drawShapePreview);
    canvas.removeEventListener('mouseup', finishShape);
};

canvas.addEventListener('mousedown', startShape);
