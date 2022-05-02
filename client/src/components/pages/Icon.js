import React from 'react';
import './Icon.css';

export const Icon = ({
    num
}) => {
    const filePath='../img/ico'+num+'.png';
    return (
        <div class="image-container">
            <img class="cat-ico" src={filePath} alt="Our_icon"/>
        </div>
    );
};