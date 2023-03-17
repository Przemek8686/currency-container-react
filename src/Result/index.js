import "./style.css";
const Result = ({ result }) => ( <
    p className = "result" > {!!result && ( <
            strong > { result.targetAmount.toFixed(2) } { result.currency } <
            /strong>

        )
    }

    <
    /p>
);

export default Result;