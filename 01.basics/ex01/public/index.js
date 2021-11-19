const App = function(){
    const app = document.createElement('h1');
    app.textContent = 'Hellooo';
    return app;
}

document
    .getElementById('root')
    .appendChild(App());