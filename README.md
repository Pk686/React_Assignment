                                         Instructions to Run the Application
1. Prerequisites --
Make sure you have the following installed on your machine:
•	Node.js (which includes npm) - Download from nodejs.org
2. Setting Up and Running the WebSocket Server.
1.	Navigate to the WebSocket Server Directory:
Open a terminal or command prompt and navigate to the server directory.
cd path/to/server
2.	Install Dependencies:
Run the following command to install the WebSocket server dependencies:
npm install ws
3.	Start the WebSocket Server:
Execute the following command to start the WebSocket server:
node websocketServer.js
You should see a message like WebSocket server is running on ws://localhost:8080. Leave this terminal open and running.
3. Setting Up and Running the React Application
1.	Navigate to the React Application Directory:
Open a new terminal or command prompt and navigate to the Assignment directory.
cd path/to/Assignment
2.	Install Dependencies:
Run the following command to install the React application dependencies:
npm install
3.	Start the React Application:
Execute the following command to start the React application:
This will start the development server, and your React application should be accessible in your web browser at http://127.0.0.1:5173. The terminal will display logs and any errors if they occur.


4. Access and Test the Application
1.	Open Your Web Browser:
Open a web browser and navigate to http://127.0.0.1:5173.
2.	Verify Functionality:
o	WebSocket Connection: Check the browser console (press F12 or Ctrl+Shift+I > Console) to see WebSocket connection logs and messages.
o	Course List: Verify that the course list is displayed and that the likes data is updated in real-time.

                                                                Summary
1.	Start WebSocket Server:
* cd path/to/server
* npm install ws
* node websocketServer.js
2.	Start React Application:
* cd path/to/Assignment
* npm install
* npm start
3.	View in Browser:
* Open http://127.0.0.1:5173 in your web browser to view the React application.
