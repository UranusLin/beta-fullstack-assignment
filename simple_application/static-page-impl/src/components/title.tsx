import Text from "./shared/text"
import Status from "./shared/status"

export default function Title() {
    return (
        <div className={`mt-5 relative`}>
            <div className={`flex space-x-2`}>
                <Text text={`Lorem ipsum dolor sit amet`} size={`text-2xl`} other={``}/>
                <div className={`pl-2`}>
                    <Status text={`Active`} status_size={`w-52 h-6`} bg_color={`bg-active-green`} text_color={`text-white`} font_size={`text-xs`} />
                </div>
            </div>
            <div className={`pt-11`}>
                <Text text={`Active ends in : 2 days`} size={`text-xs`} other={``}/>
            </div>
        </div>
    )
}
