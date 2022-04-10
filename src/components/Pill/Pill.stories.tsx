import React from "react";
import { Story } from "@storybook/react";
import { Pill, PillProps } from "./Pill";

export default {
    title: "Components/Pill",
    component: Pill,
    argTypes: {},
};

const Template: Story<PillProps> = ({ ...args }) => (
    <Pill
        {...args}
        fish={{
            id: 0,
            species: "Barsch",
            length: 10,
            points: 10,
            target: true,
        }}
    />
);

export const Default = Template.bind({});
