import React from 'react';

const NavBack: React.FC = () => {
    return (
        <div className="mt-120 relative w-13 h-5 text-custom-color">
            <div>
                <svg className="absolute w-12 h-5 pr-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <p className="absolute left-5 top-0 text-xs leading-5 font-normal">Back</p>
            </div>
        </div>
    );
};

export default NavBack;
