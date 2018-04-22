console.log('app.js is running');



var user = {
    name: 'Gaurav Goyal',
    age: 25,
    location: 'Baran'
}
var app = {
    title: 'My Indecision App',
    subtitle: 'my subtitle',
    options: []
}
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value; //e.target.element.name attribute
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }

}
const onRemoveAll = () => {
    app.options = [];
    render();
}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}
const appRoot = document.getElementById('app');

const render = () => {
    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>

            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" className="" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name + ' ' + '!' : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age : {user.age}</p>}
        <p>Location : {user.location}</p>
    </div>
);

render();