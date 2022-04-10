import { Table, TableProps } from "./Table";
import { Story } from "@storybook/react";
import { rest } from "msw";

export default {
    title: "Components/Table",
    component: Table,
};

const Template: Story<TableProps> = () => <Table />;

export const Default = Template.bind({});
Default.parameters = {
    msw: [
        rest.get("/user/0", (req, res, ctx) => {
            return res(
                ctx.json({
                    id: 0,
                    firstName: "Mikey",
                    lastName: "Kainz",
                    avatar: "./img/mikey.jpg",
                    rank: 1,
                    points: 100,
                    fish: [
                        {
                            id: 0,
                            species: "Barsch",
                            length: 10,
                            points: 10,
                            target: true,
                        },
                        {
                            id: 1,
                            species: "Zander",
                            length: 10,
                            points: 10,
                            target: true,
                        },
                        {
                            id: 2,
                            species: "Hecht",
                            length: 10,
                            points: 10,
                            target: true,
                        },
                        {
                            id: 3,
                            species: "Lachs",
                            length: 10,
                            points: 10,
                            target: false,
                        },
                        {
                            id: 4,
                            species: "Karpfen",
                            length: 10,
                            points: 10,
                            target: false,
                        },
                        {
                            id: 5,
                            species: "Weißfisch",
                            length: 10,
                            points: 10,
                            target: false,
                        },
                    ],
                })
            );
        }),
    ],
};
