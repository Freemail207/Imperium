let ReactDOM = require('react-dom');
let React = require('react');
let ItemsList = require('./components/ItemsList.jsx');

const propsValues = {
    title: "Список смартфонов",
    items: [
        "HTC U Ultra",
        "iPhon5ddd 7",
        "576567Pixel",
        "Huawei P9",
        "Asus Zenfone 3"
    ]
};

ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById("app")
)