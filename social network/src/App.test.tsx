import React from 'react';
import TestApp from "./App";
import ReactDom from "react-dom";

test('renders learn react link', () => {
    const div = document.createElement(('div'))
    ReactDom.render(<TestApp/>, div)
    ReactDom.unmountComponentAtNode(div)
});
