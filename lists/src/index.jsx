import React from "react";
import { createRoot } from 'react-dom/client';
import UserList from './UserList.jsx';
import './style.scss';

const rootElem = document.getElementById('root');
const root = createRoot(rootElem);


const users = [
    {
        name: 'Jonh',
        age: 21,
        id: "id-0",
    },
    {
        name: 'Tom',
        age: 46,
        id: "id-1",
    },
    {
        name: 'Bob',
        age: 15,
        id: "id-2",
    },
    {
        name: 'Nick',
        age: 32,
        id: "id-3",
    },
];

root.render(<UserList users={users}/>);