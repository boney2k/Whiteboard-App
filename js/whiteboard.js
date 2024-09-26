const canvas = document.getElementById('whiteboard');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

// Helper function to clear the board
const clearBoard = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

document.getElementById('clearBoard').addEventListener('click', clearBoard);

// Initialize the drawing mode and text mode
let isDrawing = false;
let currentMode = 'draw';

document.getElementById('drawMode').addEventListener('click', () => {
    currentMode = 'draw';
});

document.getElementById('textMode').addEventListener('click', () => {
    currentMode = 'text';
});
// New shape mode switching
document.getElementById('rectMode').addEventListener('click', () => {
    currentMode = 'rectangle';
});

document.getElementById('circleMode').addEventListener('click', () => {
    currentMode = 'circle';
});

document.getElementById('lineMode').addEventListener('click', () => {
    currentMode = 'line';
});