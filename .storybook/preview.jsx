import "../src/index.scss";

import { addDecorator } from "@storybook/react";
import { initializeWorker, mswDecorator } from "msw-storybook-addon";
import { MemoryRouter } from "react-router-dom";

initializeWorker();
addDecorator(mswDecorator);
addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
const customViewports = {
    mobile: {
        name: "iPhone XR",
        styles: {
            width: "414px",
            height: "896px",
        },
    },
    tablet: {
        name: "iPad Mini",
        styles: {
            width: "768px",
            height: "1024px",
        },
    },
    tabletBig: {
        name: "iPad Air",
        styles: {
            width: "820px",
            height: "1180px",
        },
    },
};
export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: "fullscreen",
    viewport: { viewports: customViewports },
};
