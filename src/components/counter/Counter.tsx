import './counter.css'
function Counter(props: any) {
    const { num, incNum, decNum, handleChange } = props;
    return (
        <div>
            <div className="counterdiv">
                <div className="input-group counterinput" >
                    <div className="input-group-prepend">
                        <button type="button" onClick={decNum}>-</button>
                    </div>
                    <input type="text" className="countervalue " value={num} onChange={handleChange} />
                    <div className="input-group-prepend">
                        <button type="button" onClick={incNum}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { Counter };