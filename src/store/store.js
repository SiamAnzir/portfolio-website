import covidImg from "../assets/covid.png";
import noteImg from "../assets/note.png";
import movieImg from "../assets/movie.png";
import blogImg from "../assets/blogSite.png";
import messiImg from "../assets/messi.png";
import crImg from "../assets/cr7.png"

export const allProjects = [
    {
        id: 1,
        title: "Covid-19 Reports Worldwide",
        subtitle: "React Project",
        description:
            "React Web App for showing the reports of Covid - 19 all over the world.",
        image: covidImg,
        link: "https://siamanzir.github.io/covid-19-reports-worldwide/",
    },
    {
        id: 2,
        title: "Note App",
        subtitle: "React Project",
        description:
            "Keep Notes is a free, open-source notes app for the web. It is a demo project only, and does not integrate with any database or cloud.",
        image: noteImg,
        link: "https://siamanzir.github.io/react-keep-notes/#/",
    },
    {
        id: 3,
        title: "BlogSite",
        subtitle: "React Project",
        description:
            "Simple Blog app with react.It is a demo project only, and does not integrate with any database or cloud.",
        image: blogImg,
        link: "https://siamanzir.github.io/react-blogsite/#/",
    },
    {
        id: 4,
        title: "Movie Search App",
        subtitle: "React Project",
        description:
            "Simple Movie Search App by using OMDB API",
        image: movieImg,
        link: "https://siamanzir.github.io/react-movie-search-app/",
    },
];

export const allSkills = [
    {
        name:"HTML & CSS",
        id:1,
    },{
        name:"Javascript",
        id:2,
    },{
        name:"Bootstrap",
        id:3,
    },{
        name:"Material-UI",
        id:4,
    },{
        name:"React",
        id:5,
    },{
        name:"NodeJS",
        id:6,
    },{
        name:"Jquery",
        id:7,
    },
    {
        name:"C & C++",
        id:8,
    },
];

export const allTestimonials = [
    {
        id:1,
        quote:"'' Lorem ipsum dolor sit amet, consectetur adipisicing elit. cupiditate voluptas?Laborum? ''",
        name:"Ronaldo",
        image:crImg,
        company:"Juventus"
    },
    {
        id:2,
        quote:"'' Quilaborum quasi, incidunt dolore iste nostrum cupiditate voluptas? voluptas natus? ''",
        name:"Messi",
        image:messiImg,
        company:"PSG"
    }
]