export interface IItems {
    applications: IItem[]
    illustrations: IItem[]
    websites: IItem[]
}

interface IItem {
    id: number
    title: string
    desc: string
    image: string
}

export const items: IItems = {
    applications: [
        {
            id: 1,
            title: "Creative Portfolio Applications",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image: "https://img.freepik.com/free-photo/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.jpg?w=900&t=st=1700008308~exp=1700008908~hmac=932b3c15c36602869893ab12d9c0d721a73e2d65c7f04327796161505baca133"
        },
        {
            id: 2,
            title: "Minimal Single Product Applications",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image:
                "https://img.freepik.com/free-photo/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.jpg?w=900&t=st=1700008308~exp=1700008908~hmac=932b3c15c36602869893ab12d9c0d721a73e2d65c7f04327796161505baca133"
        },
        {
            id: 3,
            title: "Strong Together Charity Applications",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image:
                "https://img.freepik.com/free-photo/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.jpg?w=900&t=st=1700008308~exp=1700008908~hmac=932b3c15c36602869893ab12d9c0d721a73e2d65c7f04327796161505baca133"
        }
    ],
    illustrations: [
        {
            id: 1,
            title: "Creative Portfolio Illustrations",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image:
                "https://img.freepik.com/free-photo/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.jpg?w=900&t=st=1700008308~exp=1700008908~hmac=932b3c15c36602869893ab12d9c0d721a73e2d65c7f04327796161505baca133"
        },
        {
            id: 2,
            title: "Minimal Single Product Illustrations",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image:
                "https://img.freepik.com/free-photo/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.jpg?w=900&t=st=1700008308~exp=1700008908~hmac=932b3c15c36602869893ab12d9c0d721a73e2d65c7f04327796161505baca133"
        },
        {
            id: 3,
            title: "Strong Together Charity Illustrations",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image:
                "https://img.freepik.com/free-photo/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.jpg?w=900&t=st=1700008308~exp=1700008908~hmac=932b3c15c36602869893ab12d9c0d721a73e2d65c7f04327796161505baca133"
        }
    ],
    websites: [
        {
            id: 1,
            title: "Creative Portfolio Websites",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image:
                "https://img.freepik.com/free-photo/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.jpg?w=900&t=st=1700008308~exp=1700008908~hmac=932b3c15c36602869893ab12d9c0d721a73e2d65c7f04327796161505baca133"
        },
        {
            id: 2,
            title: "Minimal Single Product Websites",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image:
                "https://img.freepik.com/free-photo/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.jpg?w=900&t=st=1700008308~exp=1700008908~hmac=932b3c15c36602869893ab12d9c0d721a73e2d65c7f04327796161505baca133"
        },
        {
            id: 3,
            title: "Strong Together Charity Websites",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image:
                "https://img.freepik.com/free-photo/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.jpg?w=900&t=st=1700008308~exp=1700008908~hmac=932b3c15c36602869893ab12d9c0d721a73e2d65c7f04327796161505baca133"
        }
    ],
}