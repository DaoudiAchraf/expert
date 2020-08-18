import React from 'react';


const widjet = () => {
    return (
        <svg className="Wedjet" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.34 3.03L20.5 3C20.78 3 21 3.22 21 3.5V18.62C21 18.85 20.85 19.03 20.64 19.1L15 21L9 18.9L3.66 20.97L3.5 21C3.22 21 3 20.78 3 20.5V5.38C3 5.15 3.15 4.97 3.36 4.9L9 3L15 5.1L20.34 3.03ZM9 16.89L15 19V7.11L9 5V16.89Z" fill="white" />
            </mask>
            <g mask="url(#mask2)">
                <rect width="24" height="24" fill="url(#paint0_linear)" />
            </g>
            <defs>
                <linearGradient id="paint0_linear" x1="-21.9526" y1="13.436" x2="16.4873" y2="54.7981" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1ABEC5" />
                    <stop offset="1" stopColor="#007696" />
                </linearGradient>
            </defs>
        </svg>
    );
};


export default widjet;
