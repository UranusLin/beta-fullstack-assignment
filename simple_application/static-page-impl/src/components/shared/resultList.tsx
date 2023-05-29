import React from 'react';
import Result from "@/components/shared/result";

interface ResultProps {
    title: string;
    subTitle: string;
}

const ResultList: React.FC = () => {
    const results: ResultProps[] = [
        {title: 'Quorum', subTitle: ''},
        {title: 'Current Votes', subTitle: 'Required 000K'},
        {title: 'Differential', subTitle: ''},
        {title: 'Current Differential', subTitle: 'Required 00K'},
        {title: 'Total Voting Power', subTitle: ''}
    ];

    return (
        <div className="grid gap-1">
            {results.map((result, index) => (
                <Result key={index} title={result.title} subTitle={result.subTitle} />
            ))}
        </div>
    );
};

export default ResultList;
