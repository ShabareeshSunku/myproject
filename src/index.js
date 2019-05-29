import React from 'react';
import ReactDOM from 'react-dom';
//import ChatWindow from './Chats/ChatWindow'
//import Clock from './Clock'
//import VideoPlayer from './VideoPlayer/index'
//import ControlledForm from './Forms/ControlledForm'
//import UnControlledForm from './Forms/UnControlledForm'
//import { RandomComponent, ColoredComponent } from './hoc/Sample'
import Contacts from './hoc/index'
//import ContextDemo from './context/index'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Contacts />, document.getElementById('root'));
//ReactDOM.render(<LifeCycleOld />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
