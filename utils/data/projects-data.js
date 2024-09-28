import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Lifescript',
        description: "Lifescript helps its users create well-versed and featured auto-biography using AI tools,input questionnaire, voice memos and images. The product will have some free for all features and some premium features. I handle the backend side and develop the features like User written auto biography from Open Ai (GPT), along with editor functionalities, including, speech to text, Grammar suggestions. The Challenging task is to implement the Image enhancements from AI, if they required any image. To provide the easiness, I proposed the solution for creating the Multiple Chapters and their Questions, which user will answer for auto biography, and after enhancements, that biography will be used as a book.",
        tools: ['Nest JS', 'MongoDB', 'OpenAI API', 'AWS', 'Netlify', 'Node Mailer', 'EC2', 'PM2', 'Nginx', 'Next'],
        role: 'Backend Developer',
        image: crefin,
        demo: "https://www.thelifescript.com/",
        code: ""
    },
    {
        id: 2,
        name: 'Kyochon',
        description: "Kyochon is basically an ecommerce platform, developed for customers. I worked on the multiple features of ecommerce such as handling products, deals, discounts, coupons, customers, reporting, marketing, and many other features. It contains a website for customers and admin panel for internal use. I handled the integration with 3rd Party Point of sale called foodics, which syncs products and orders with our system.",
        tools: ['React JS', 'Redux', 'Nest JS', "MySQL", "TypeORM"],
        image: ayla,
        role: 'Full Stack Developer',
        demo: "https://www.kyochonme.com/",
        code: ""
    },
    {
        id: 3,
        name: 'Kien',
        description: 'Kien Travel experience Company. It’s one of my best project which helps to learn about the animations. The challenging task is to handle the Horizontal scroll as most of website UI is Vertical scroll. I have implemented the Horizontal scroll and control the scroll according to pages. I have implemented the Zoom In and slider animations. Also working on the 3d animations for the landing pages',
        tools: ['Typescript', 'Next JS'],
        role: 'Frontend Developer',
        image: realEstate,
        demo: "https://kien-seven.vercel.app/",
        code: ""
    },
    {
        id: 4,
        name: 'Rotobot',
        description: 'Rotobot revolutionizes fantasy football with cutting-edge AI technology, providing personalized trends, in-depth player insights, and real-time updates. Built chatbot screens and handled responsiveness for all devices. Implemented smooth animations throughout the app to enhance user interaction and overall experience',
        tools: ['NextJS', 'Material UI'],
        role: 'Frontend Developer',
        image: travel,
        demo: "https://rotobot.ai/",
        code: ""
    },
    {
        id: 5,
        name: 'Cluey',
        description: "Cluey targets an audience that selects brands based on their values and standards. Cluey keeps details about each brand, including what the brand is, how much and in what manner it participates in political campaigns, what impact it has on the public, and which alternative brands are available. I design and implement the client and server side logic using React and Node to support a platform catering to an audience driven by brand values. I oversee the storage and retrieval of detailed brand information, including political campaign involvement, societal impact, and alternatives. I was involved in crafting robust APIs, data flow, and optimizing performance. I contribute to maintain data integrity and uphold privacy standards. My responsibilities span frontend architecture to database management, and API development.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Nest JS', "MySQL"],
        image: ayla,
        role: 'Full Stack Developer',
        demo: "https://clueyconsumer.com/",
        code: ""
    },
    {
        id: 6,
        name: 'Tortilla Arabia',
        description: "Tortilla Arabia is an ecommerce platform, developed for customers. It includes multiple features of ecommerce such as handling products, deals, discounts, coupons, customers, reporting, marketing, loyalty and many other features. It contains a website and crm for customers and admin pannel for internal use. It also handles integration with 3rd Party System called GrubTech , which syncs products and orders with our system.",
        tools: ['React JS', 'Redux', 'Nest JS', "MySQL", "TypeORM"],
        image: ayla,
        role: 'Full Stack Developer',
        demo: "https://tortillaarabia.com/",
        code: ""
    },
    {
        id: 7,
        name: 'OPTP',
        description: "OPTP is an ecommerce platform, developed for customers. It includes multiple features of ecommerce such as handling products, deals, discounts, coupons, customers, reporting, marketing, and many other features. It contains a website and CRM for customers and admin panel for internal use.",
        tools: ['React JS', 'Redux', 'Nest JS', "MySQL", "TypeORM"],
        image: ayla,
        role: 'Full Stack Developer',
        demo: "https://optp.biz/",
        code: ""
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },