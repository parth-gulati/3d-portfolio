import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  pytorch,
  carrent,
  deloitte,
  jobit,
  tripguide,
  rbc,
  threejs,
  assigncorp,
  intuitive,
  mui,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Computer Vision Engineer",
    icon: mobile,
  },
  {
    title: "Programming Enthusiast ",
    icon: backend,
  },
  {
    title: "Average Gamer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "pytorch",
    icon: pytorch,
  },
  {
    name: "mui",
    icon: mui,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Deloitte India",
    icon: deloitte,
    iconBg: "#383E56",
    date: "March 2021 - September 2022",
    points: [
      "Worked in a two-pizza Scrum team to re-develop an existing Fintech application of a major banking client on a faster, mobile-supported architecture to be used by all employees of the bank across India",
      "Collaborated with the client in review discussions and advised adjustments to application requirements and interface designs",
      "Developed and integrated 30+ highly responsive and functional UI components using Reactjs",
      "Significantly reduced instances of bugs by implementing a peer code review policy, resulting in reduced development and testing time",
    ],
  },
  {
    title: "Data Engineer",
    company_name: "RBC",
    icon: rbc,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
      "Worked as a Data Engineer in a team of 4 to solve a business problem provided by RBC in a startup-like environment.",
      "Utilized Elastic Search and Pandas for data extraction, filtering, cleaning, and preparation for the Machine Learning Model.",
      "Trained the model using H2O AutoML and identified the features that most influence the decision, achieving an accuracy of 92%.",
      "Developed the front-end of the project using React.js and MUI and integrated the backend using Axios.",
    ],
  },
  {
    title: "Software Engineer - Part Time",
    company_name: "Assigncorp",
    icon: assigncorp,
    iconBg: "#383E56",
    date: "Aug 2023 - Nov 2023",
    points: [
      "Designed the NLP framework for Lawbotics.ai document parsing and question-answering using Haystack.",
      "Created the entire question-answering pipeline by extracting information from PDF and DOCX files through Haystack.",
      "Integrated Gmail and Google Drive APIs to help extract information from emails, Google Drive files, and email attachments into the React.js frontend application.",
    ],
  },
  {
    title: "Full stack Engineer - Computer Vision",
    company_name: "Intuitive AI",
    icon: intuitive,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Performed data collection, augmentation, preparation, and trained YOLOv8x and YOLOv8l, achieving an mAP of 92%.",
      "Contributed to the development of an in-house object detection annotation software using React.js by implementing key features that enhanced data labeling accuracy and efficiency.",
      "Managed an annotation team and performed quality assurance, overseeing the completion of over a million annotations with a 99% accuracy rate, which improved training data quality and increased network performance by 20%.",
      "Developed a tool to pull data from S3 and create simultaneous visualizations of up to four networks on the same image dataset using PyTorch on EC2, streamlining data analysis.",
      "Implemented custom UI modifications for clients using Electron.js, ensuring alignment with their specific requirements and preferences.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
