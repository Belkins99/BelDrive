import { Bus, Car, Headset, HeartHandshake, Icon, Sofa } from "lucide-react";

const K = {
    NAVLINKS: [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about-us"
        },
        {
            name: "Collection",
            path: "/collection"
        },
        {
            name: "Contact",
            path: "/contact-us"
        },

    ],

    SERVICES: [
        {
            title: "Amazing Deals",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            icon: <HeartHandshake />,
            bgColor: "#fca5a5",
            iconBg:"#fef9c3"
        },
        {
            title: "Amazing Deals",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            icon: <Car />,
            bgColor:"#ffedd5",
            iconBg:"#CB9696"
        },
        {
            title: "Amazing Deals",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            icon: <Bus />,
            bgColor:"#fef9c3",
            iconBg:"#bbf7d0"
        },
        {
            title: "Amazing Deals",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            icon: <Headset />,
            bgColor:"#F5EBEB",
            iconBg:"#fca5a5"
        }
    ]
};

export default K;