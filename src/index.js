import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


ReactDOM.render(
    React.createElement("h1",
        {style: { color: "blue" } },
        "Hello World!"),
    document.getElementById('root')
);
