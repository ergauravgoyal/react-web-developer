let visibility = false;
const toggleVisibility = () => {
    visibility = !visibility;
    render();
}
const render = () => {
    const myContent = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {
                visibility &&(
                    <div>
                        <p>Hey !! These are few details</p>
                    </div>
                )
            }
            
        </div>
    )
    ReactDOM.render(myContent, document.getElementById('app'));
}

render(); 