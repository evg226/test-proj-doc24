import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store";
import {List} from "./components/List";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Welcome to app</h1>
                <List />
            </div>
        </Provider>
    );
}

export default App;
