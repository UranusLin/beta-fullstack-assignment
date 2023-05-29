import React from 'react';
import Text from "@/components/shared/text";

interface ResultProps {
    title: string;
    subTitle: string;
}

const Result: React.FC<ResultProps> = ({ title, subTitle }) => {
    return (
        <div className='flex'>
            <Text text={title} size='text-xs' other={``} />
            <div className='pl-1'>
                <Text text={subTitle} size='text-[10px]' other='opacity-50' />
            </div>
        </div>
    );
}

export default Result;
