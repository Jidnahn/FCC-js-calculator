function App() {
    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);
    const [counter, setCounter] = React.useState(0)

    const display = (symbol) => {

        let lastDigit = expression[expression.length - 1];
        
        if(lastDigit == "0") {
            if(/[0]/.test(symbol)) {
                setExpression(expression)
            } else {
                setExpression((prev) => prev + symbol);
            }
        } else if(counter == 1) {
            if(/[.]/.test(symbol)) {
                setExpression(expression)
            } else {
                setExpression((prev) => prev + symbol);
            }
        } else {
            setExpression((prev) => prev + symbol);
        }
        if (lastDigit == "=") {
            if (/[0-9.]/.test(symbol)) {
                setExpression(symbol);
            } else {
                setExpression(answer + symbol);
            }
        }
        if(/[.]/.test(symbol)) {
            setCounter(1);
        } else if((/[-/*=+]/).test(symbol)) {
            setCounter(0);
        }
    };

    const calculate = () => {
        setAnswer(eval(expression));
        setExpression((prev) => prev + "=");
    };

    const allClear = () => {
        setExpression("");
        setAnswer(0);
    };

    const clear = () => {
        setExpression((prev) =>
            prev
                .split("")
                .slice(0, prev.length - 1)
                .join("")
        );
        setAnswer(0);
    };

    return (
        <div className="container">
            <div className="grid">
                <div className="dis">
                    <input
                        id="display"
                        type="text"
                        value={expression}
                        placeholder="0"
                        disabled
                    />
                    <div className="total">{answer}</div>
                </div>
                <div onClick={allClear} id="clear" className="padButton AC red">
                    AC
                </div>
                <div onClick={clear} className="padButton C red">
                    C
                </div>
                <div onClick={() => display("/")} id ="divide" className="padButton div">
                    /
                </div>
                <div onClick={() => display("*")} id="multiply" className="padButton mult">
                    x
                </div>
                <div
                    onClick={() => display("7")} id="seven"
                    className="padButton seven dark-gray"
                >
                    7
                </div>
                <div
                    onClick={() => display("8")} id="eight"
                    className="padButton eigth dark-gray"
                >
                    8
                </div>
                <div
                    onClick={() => display("9")} id="nine"
                    className="padButton nine dark-gray"
                >
                    9
                </div>
                <div onClick={() => display("-")} id="subtract" className="padButton minus">
                    -
                </div>
                <div
                    onClick={() => display("4")} id="four"
                    className="padButton four dark-gray"
                >
                    4
                </div>
                <div
                    onClick={() => display("5")} id="five"
                    className="padButton five dark-gray"
                >
                    5
                </div>
                <div
                    onClick={() => display("6")} id="six"
                    className="padButton six dark-gray"
                >
                    6
                </div>
                <div onClick={() => display("+")} id="add" className="padButton plus">
                    +
                </div>
                <div
                    onClick={() => display("1")} id="one"
                    className="padButton one dark-gray"
                >
                    1
                </div>
                <div
                    onClick={() => display("2")} id="two"
                    className="padButton two dark-gray"
                >
                    2
                </div>
                <div
                    onClick={() => display("3")} id="three"
                    className="padButton three dark-gray"
                >
                    3
                </div>
                <div onClick={calculate} id="equals" className="padButton equals blue">
                    =
                </div>
                <div
                    onClick={() => display("0")} id="zero"
                    className="padButton zero dark-gray"
                >
                    0
                </div>
                <div
                    onClick={() => display(".")} id="decimal"
                    className="padButton point dark-gray"
                >
                    .
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
