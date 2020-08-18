import React from 'react';


const list = () => {
    const handlClick = () => {
        console.log('clicked')
    }
    return (
        <svg className="Wedjet list" onClick={handlClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="5" width="17" height="14">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 9H8V5H4V9ZM8 14H4V10H8V14ZM8 19H4V15H8V19ZM21 14H9V10H21V14ZM9 19H21V15H9V19ZM9 9V5H21V9H9Z" fill="white" />
            </mask>
            <g mask="url(#mask0)">
                <rect width="24" height="24" fill="#9FAAB8" />
            </g>
        </svg>
    );
};


export default list;
