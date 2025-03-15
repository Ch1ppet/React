import React from "react";
import { createRoot } from 'react-dom/client';

const Avatar = (props) => {
    return (
        <div className="avatar-root">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Blue_merle_koolie_short_coat_heading_sheep.jpg"
                width={props.width}
            />
        </div>
    );
};

export default Avatar;