const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

const courseLikes = {
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
    6: 60,
    7: 70,
    8: 80,
    9: 90,
    10: 100
};

server.on('connection', (ws) => {
    console.log('Client connected');

    // Send initial likes data
    ws.send(JSON.stringify(courseLikes));

    // Simulate likes updates every 10 seconds
    const interval = setInterval(() => {
        // Simulate updating likes
        Object.keys(courseLikes).forEach(id => {
            courseLikes[id] = Math.floor(Math.random() * 100); // Random number for demonstration
        });
        ws.send(JSON.stringify(courseLikes));
    }, 10000);

    ws.on('close', () => {
        clearInterval(interval);
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');



//checking data in console
// const ws = new WebSocket('ws://localhost:8080');

// ws.onopen = () => {
//     console.log('WebSocket connection opened');
// };

// ws.onmessage = (event) => {
//     console.log('Message from server:', event.data);
// };

// ws.onclose = () => {
//     console.log('WebSocket connection closed');
// };

// ws.onerror = (error) => {
//     console.error('WebSocket error:', error);
// };
