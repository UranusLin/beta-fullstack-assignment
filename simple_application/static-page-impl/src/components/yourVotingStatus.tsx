import Button from "./shared/button"
import Text from "./shared/text"

export default function VotingStatus() {
    return (
       <div className={`h-20 w-884 bg-white rounded-xl lg:flex lg:items-center lg:justify-between`}>
           <div className={`flex justify-items-start pl-6`}>
               <Text text={`Your Voting`} size={`text-sm`} other={`whitespace-nowrap`}/>
           </div>
           <div className={`w-884 pe-10 flex items-center justify-end`}>
               <div className={`grid justify-items-end`}>
                    <Text text={`Voting Power`} size={`text-xs`} other={``}/>
                    <Text text={`00,000.00 VOTE`} size={`text-sm`} other={``}/>
               </div>
           </div>
           <div className={`pe-10 flex items-center justify-end space-x-2`}>
               <Button color={`bg-btn-support`} text={`Support`} />
               <Button color={`bg-btn-reject`} text={`Reject`} />
           </div>
       </div>
    )
}
