import ResultStatus from "@/components/shared/resultStatus";


export default function ResultStatusList() {
    return (
        <div className={`grid gap-1`}>
            <ResultStatus resultStatus={`Reached`} checked={true}/>
            <ResultStatus resultStatus={`000K`} checked={false} />
            <ResultStatus resultStatus={`Reached`}  checked={true}/>
            <ResultStatus resultStatus={`00.00K`} checked={false}/>
            <ResultStatus resultStatus={`00,000,000`} checked={false}/>
        </div>
    )
}
