
let counter = 0;
const someID = "myId";
const addOne = () => {
    counter++;
    renderCounterApp();
}
const minusOne = () => {
    counter--;
    renderCounterApp();
}
const reset = () => {
    counter=0;
    renderCounterApp();
}
var appRoot = document.getElementById('app');
const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count : {counter}</h1>
            <button id={someID} className="btn btn-primary" onClick={addOne}>+1</button>
            <button id={someID} className="btn btn-primary" onClick={minusOne}>-1</button>
            <button id={someID} className="btn btn-primary" onClick={reset}>Reset</button>
        </div>
    )
    ReactDOM.render(templateThree, appRoot);
}
// renderCounterApp();


// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleAddOne = this.handleAddOne.bind(this);
//         this.handleMinusOne = this.handleMinusOne.bind(this);
//         this.handleReset = this.handleReset.bind(this);
//         this.state = {
//             count: 0
//         }
//     }
//     handleAddOne() {
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count + 1
//             }
//         });
//     }
//     handleMinusOne() {
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count - 1
//             }
//         });
//     }
//     handleReset() {
//         // this.setState(() => {
//         //     return {
//         //         count: 0
//         //     }
//         // });
//         //this.setState call is asynchronous
//         this.setState({
//             count:0
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Count: {this.state.count}</h1>
//                 <button className="btn btn-primary" onClick={this.handleAddOne}>+1</button>
//                 <button className="btn btn-primary" onClick={this.handleMinusOne}>-1</button>
//                 <button className="btn btn-primary" onClick={this.handleReset}>Reset</button>

//             </div>
//         );
//     }
// }

// ReactDOM.render(<Counter />, document.getElementById('app')); 