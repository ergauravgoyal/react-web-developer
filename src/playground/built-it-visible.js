class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
        console.log(this.state.visibility);
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>
                            Hey..These are details which you can see !!
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// let visibility = false;
// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// }
// const render = () => {
//     const myContent = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             {
//                 visibility &&(
//                     <div>
//                         <p>Hey !! These are few details</p>
//                     </div>
//                 )
//             }

//         </div>
//     )
//     ReactDOM.render(myContent, document.getElementById('app'));
// }

// render(); 