import React from "react";
import { Story } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {},
};

const Template: Story<ButtonProps> = ({ ...args }) => (
    <Button {...args} label="Button" func={console.log("clicked")} />
);

export const Default = Template.bind({});
