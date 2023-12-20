function KeyPoints(props: { li: string; }) {
    const { li } = props;

    return (
        <li className="text-primary list-disc ml-4">{li}</li>
    )
}

export default KeyPoints;