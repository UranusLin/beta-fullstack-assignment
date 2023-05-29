import Text from "@/components/shared/text";

interface ProgressBarProps {
    percentage: number;
    bgColor: string;
    text: string;
    amount: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, bgColor, text, amount }) => {
    return (
        <div className={`relative h-8 w-360 bg-progress-bar rounded border border-progress-border `}>
            <div className={`absolute w-360 h-8 flex items-center`}>
                <div className={`pl-4`}>
                    <Text text={text} size={`text-sm`} other={`font-semibold`}/>
                </div>
                <div className={`flex w-360 justify-end pr-4`}>
                    <div className={`pr-4`}>
                        <Text text={amount.toString()} size={`text-[10px]`} other={``}/>
                    </div>
                    <div className={``}>
                        <Text text={`${percentage}%`} size={`text-sm`} other={`font-semibold`}/>
                    </div>
                </div>
            </div>
            <div className={`h-8 ${bgColor} rounded flex items-center`}
                 style={{width: `${percentage}%`}}>
            </div>
        </div>
    )
}

export default ProgressBar;
