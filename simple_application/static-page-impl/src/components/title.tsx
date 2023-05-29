

export default function Title() {
    return (
        <div className="mt-5 relative">
            <div className="flex space-x-2">
                <h1 className="left-0 top-0 text-2xl leading-8 text-custom-color">
                    Lorem ipsum dolor sit amet
                </h1>
                <div className="pl-2">
                    <span
                        className="inline-flex w-52 h-6 items-center rounded bg-active-green px-2 py-1 text-xs font-medium text-white ">Active
                    </span>
                </div>
            </div>
            <div className="pt-11">
                <h1 className="text-xs">
                    Active ends in : 2 days
                </h1>
            </div>
        </div>
    )
}
