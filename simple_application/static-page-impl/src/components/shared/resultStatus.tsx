import React from 'react';
import Text from "@/components/shared/text";

interface ResultStatusProps {
    resultStatus: string;
    checked: boolean;
}

const ResultStatus: React.FC<ResultStatusProps> = ({ resultStatus, checked }) => {
    return (
        <div className='flex justify-end items-center'>
            <Text text={resultStatus} size='text-xs' other='font-semibold'/>
            <div className='flex justify-center items-center'>
                {checked &&
                    <div className="flex justify-center items-center w-3 h-3 bg-circle-checked rounded-full ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-[10px] h-[10px] text-white text-base ">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                }
            </div>
        </div>
    );
}

export default ResultStatus;
