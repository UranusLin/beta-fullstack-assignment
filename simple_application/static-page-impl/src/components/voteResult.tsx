import Text from "@/components/shared/text"
import HorizontalLine from "@/components/shared/horizontalLine";
import ProgressBar from "@/components/shared/progressBar";

export default function VoteResult() {
    return (
        <div className={`relative h-236 w-884 bg-white rounded-xl lg:flex lg:items-center lg:justify-between`}>
            <div className={`absolute top-4 left-6`}>
                <Text text={`Voting results`} size={`text-sm`} />
            </div>
            <div className={`absolute top-14 right-6`}>
                <HorizontalLine width={`w-836`} />
            </div>
            <div className={`absolute left-6 top-20`}>
                <div>
                    <ProgressBar percentage={`90`} bgColor={`bg-progress-bar-green`} text={`Support`} amount={`9,000,000 VOTE`}/>
                </div>
                <div className={`pt-6`}>
                    <ProgressBar percentage={`10`} bgColor={`bg-progress-bar-red`} text={`Reject`} amount={`1,000,000 VOTE`}/>
                </div>
            </div>
        </div>
    )
}
