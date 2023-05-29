import Text from "@/components/shared/text";
import Result from "@/components/shared/result";


export default function ResultList() {
    return (
        <div className={`grid gap-1`}>
            <Result title={`Quorum`} subTitle={''} />
            <Result title={`Current Votes`} subTitle={`Required 000K`} />
            <Result title={`Differential`} subTitle={''} />
            <Result title={`Current Differential`} subTitle={`Required 00K`}/>
            <Result title={`Total Voting Power`} subTitle={''}/>
        </div>
    )
}
