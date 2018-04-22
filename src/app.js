class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }
    handleDeleteOptions() {
        // this.setState((prevState) => {
        //     return {
        //         options: []
        //     }
        // });
        this.setState(() => ({
            options: []
        }));
    }
    handleDeleteOption(optionToRemove) {
        console.log('hdo', optionToRemove);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter Valid Value to Add Item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This Item already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} />
                <AddOption
                    handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    )
}

//This component is to iterate option component
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map(
                    (option) => <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption} />
                )
            }
            <Option />
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}>
                Remove</button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.addedOption.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({
            error: error
        }))
        e.target.elements.addedOption.value = '';
    }
    render() {
        return (
            <React.Fragment>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="addedOption" />
                    <button>Add Option</button>
                </form>
            </React.Fragment>
        )
    }
}


ReactDOM.render(<IndecisionApp options={['Option One', 'Option Two']} />, document.getElementById('app'));