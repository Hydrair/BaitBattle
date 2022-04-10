import { Profile, ProfileProps } from "./Profile";
import { Story } from "@storybook/react";
import { rest } from "msw";

export default {
    title: "Pages/Profile",
    component: Profile,
};

const Template: Story<ProfileProps> = ({ ...args }) => <Profile id={0} />;

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
