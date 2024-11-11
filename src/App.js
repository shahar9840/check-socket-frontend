import logo from './logo.svg';
import './App.css';
import React from 'react';
import { io } from 'socket.io-client';


function App() {
const socketRef = React.useRef();
const [checkSocket, setCheckSocket] = React.useState(null);



React.useEffect(() => {
  socketRef.current = io('http://localhost:5002');
  socketRef.current.emit('message', checkSocket);
  
  return () => {
    
    socketRef.current.disconnect();
  };
}, [checkSocket]);

React.useEffect(() => {
  socketRef.current.on('server_message', (data) => {
    console.log(data);
    setCheckSocket(null)
  })
}, [checkSocket]);


  return (
    <div className="App">

      hello 

      <button onClick={() => {
        setCheckSocket('send to server message ')}}>click</button>
    </div>
  );
}

export default App;
