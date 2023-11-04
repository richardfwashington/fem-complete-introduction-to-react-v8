const Pet = () => {
    return Reac.createElement("div", {}, [
        React.createElement("h1", {}, "Luna"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Havanese"),
    ]);
}

const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt me!")
    )            
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));