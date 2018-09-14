import React from 'react';
import '../App.css';

const Cover = ({cover}) => {
    const componentClasses = ['video-cover'];
    if (!cover) { componentClasses.push('off'); }

    return (
        <div className={componentClasses.join(' ')}>
        </div>
    );
};

export default Cover;