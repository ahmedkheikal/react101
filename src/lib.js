import React from 'react';
import text from './titles.json';
import './stylesheets/master.scss';

export const hello = (<h1 className="important-title"
                // style={{backgroundColor: "orange", color: "white"}}
                id="title">
                {text.hello}
            </h1>);

export const goodbye = <h1 className="title"
                // style={{background: "orange", color: "white"}}
                id="title">
                {text.goodbye}
            </h1>;
