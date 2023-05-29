import Text from "@/components/shared/text";


export default function ProgressBar({percentage, bgColor, text, amount}) {
    return (
        <div className={`relative h-8 w-360 bg-progress-bar rounded`}>
            <div className={`absolute left-4 top-1.5 flex flex-row`}>
                <Text text={`${text}`} size={`text-sm`} other={`font-semibold`}/>
                <div className={`flex justify-end`}>
                <Text text={`${amount}`} size={`text-sm`} />
                <Text text={`${percentage}%`} size={`text-sm`} other={`font-semibold`}/>
                </div>
            </div>
            <div className={`h-8 ${bgColor} rounded flex items-center`}
                 style={{width: `${percentage}%`}}>
            </div>

        </div>
    )
}
