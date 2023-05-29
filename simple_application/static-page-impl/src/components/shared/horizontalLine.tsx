interface HorizontalLineProps {
    width: string;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({ width }) => {
    return (
        <div className={`h-px ${width} bg-horizontal-line`} />
    );
}

export default HorizontalLine;
