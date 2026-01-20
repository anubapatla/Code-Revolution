import React from "react";
import ReactDOM  from "react-dom/client";
 const App  = () => {
    return React.createElement('h1',{className:'title'},'welcomee to code revolution');
 }
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
export default App;