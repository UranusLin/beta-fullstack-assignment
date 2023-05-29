import React from "react";
import Text from "@/components/shared/text";
import HorizontalLine from "@/components/shared/horizontalLine";
import ProgressBar from "@/components/shared/progressBar";
import ResultList from "@/components/shared/resultList";
import ResultStatusList from "@/components/shared/resultStatusList";

interface ProgressBarProps {
    percentage: number;
    bgColor: string;
    text: string;
    amount: string;
}

const VoteResult: React.FC = () => {
    const progressBarProps1: ProgressBarProps = {
        percentage: 90,
        bgColor: "bg-progress-bar-green",
        text: "Support",
        amount: "9,000,000 VOTE",
    };

    const progressBarProps2: ProgressBarProps = {
        percentage: 10,
        bgColor: "bg-progress-bar-red",
        text: "Reject",
        amount: "1,000,000 VOTE",
    };

    return (
        <div className={`relative h-[236px] w-884 bg-white rounded-xl lg:flex lg:items-center lg:justify-between`}>
            <div className={`absolute top-4 left-6`}>
                <Text text={`Voting results`} size={`text-sm`} other={`font-semibold`}/>
            </div>
            <div className={`absolute top-14 right-6`}>
                <HorizontalLine width={`w-836`} />
            </div>
            <div className={`absolute left-6 top-20`}>
                <div>
                    <ProgressBar {...progressBarProps1} />
                </div>
                <div className={`pt-6`}>
                    <ProgressBar {...progressBarProps2} />
                </div>
            </div>
            <div className={`absolute pl-6 bottom-6`}>
                <Text text={`View all votes`} size={`text-sm`} other={`font-semibold underline underline-offset-4`} />
            </div>
            <div className={`absolute left-[540px] bottom-6`}>
                <ResultList />
            </div>
            <div className={`absolute bottom-6 right-[27px]`}>
                <ResultStatusList />
            </div>
        </div>
    );
};

export default VoteResult;
