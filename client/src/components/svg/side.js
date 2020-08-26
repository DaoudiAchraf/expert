import React from 'react';


const side = () => {
    return (
        <svg className="Wedjet" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="5" width="17" height="13">
                <path fillRule="evenodd" clipRule="evenodd" d="M9 11H4V5H9V11ZM9 18H4V12H9V18ZM10 18H15V12H10V18ZM21 18H16V12H21V18ZM10 11H15V5H10V11ZM16 11V5H21V11H16Z" fill="white" />
            </mask>
            <g mask="url(#mask1)">
                <rect width="24" height="24" fill="#9FAAB8" />
            </g>
        </svg>
    );
};


export default side;
