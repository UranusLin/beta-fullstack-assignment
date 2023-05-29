import React from 'react';
import ResultStatus from "@/components/shared/resultStatus";

interface ResultStatusProps {
    resultStatus: string;
    checked: boolean;
}

const ResultStatusList: React.FC = () => {
    const results: ResultStatusProps[] = [
        {resultStatus: 'Reached', checked: true},
        {resultStatus: '000K', checked: false},
        {resultStatus: 'Reached', checked: true},
        {resultStatus: '00.00K', checked: false},
        {resultStatus: '00,000,000', checked: false},
    ];

    return (
        <div className="grid gap-1">
            {results.map((result, index) => (
                <ResultStatus key={index} resultStatus={result.resultStatus} checked={result.checked} />
            ))}
        </div>
    );
};

export default ResultStatusList;
