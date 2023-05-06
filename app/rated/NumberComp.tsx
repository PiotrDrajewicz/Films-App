interface NumberInt {
    num: number;
}

const NumberComp: React.FC<NumberInt> = ({num}) => {

    return (
        <p>{num}</p>
    )
}

export default NumberComp;