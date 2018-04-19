console.log('app.js is running');



var user = {
    name: 'Gaurav Goyal',
    age: 25,
    location: 'Baran'
}
var app = {
    title: 'My Indecision App',
    subtitle: 'my subtitle',
    options: ['one', 'two']
}
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);
var templateTwo = (
    <div>
        <h1>{user.name ? user.name + ' ' + '!' : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age : {user.age}</p>}
        <p>Location : {user.location}</p>
    </div>
);