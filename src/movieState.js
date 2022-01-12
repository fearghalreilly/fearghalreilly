
//Project1 - JD DIGITAL MEDIA
import project1 from "./img/project1.png";
import icon1preview  from './img/icon1preview.svg'
import project1feature1 from './img/project1feature1.png'
import project1feature2 from './img/project1feature2.png'
import project1video from './videos/video1.mp4'

//Project2 - ULTRA
import project2 from "./img/project2.png";
import icon2preview from './img/icon2preview.svg'
import project2video from './videos/video2.mp4'

//Project3 - ULTRA
import project3 from "./img/project3.png";
import icon3preview from './img/project3.png'
import project3video from './videos/video3.mp4'

//Project4 - ULTRA
import project4 from "./img/project4.png";
import icon4preview from './img/project4.png'
import project4video from './videos/video4.mp4'


export const MovieState = () => {
  return [
    {
      title: "JD Digital Media",
      mainImg: project1,
      secondaryImg: icon1preview,
      url: "/work/jddigitalmedia",
      projectURL: "https://jd-digital-media.netlify.app/",
      codeURL: "https://jd-digital-media.netlify.app/",
      awardstest: [
        {
          featurenumber: "Feature",
          title: "Mobile Friendly",
          description:
            "A mobile-friendly website gives your website visitors a visually appealing, enjoyable encounter with your company.",
            mainImg: icon1preview,
        },
        {
          featurenumber: "Feature",
          title: "Customer Review Carousel Menu ",
          description:
            "Reviews have the power to gain customer trust, and they encourage people to interact with the company. So why not showcase them in an interactive manner.",
            mainImg: project1feature1,
        },
        {
          featurenumber:  "Feature",
          title: "Question and Answer Toggle ",
          description:
          "FAQs improve SEO rankings as Google values your website for providing all the information needed to take an educated decision. A visual navigational will provide a seamless flow and interaction for your customer.",
          mainImg: project1feature2,
        },
      ],
      awardstest2: [
        {
          featuredvideo: project1video,
        },
      ],
    },
    {
      title: "ULTRA",
      mainImg: project2,
      secondaryImg: icon2preview,
      url: "/work/ultra",
      projectURL: "https://ultra-fearghal-reilly.netlify.app/",
      codeURL: "https://ultra-fearghal-reilly.netlify.app/",
      awardstest: [
        {
          featurenumber: "Feature",
          title: "Mobile Friendly",
          description:
            "A mobile-friendly website gives your website visitors a visually appealing, enjoyable encounter with your company.",
            mainImg: icon2preview,
            mainVideo: icon1preview,
        },
      ],
      awardstest2: [
        {
          featuredvideo: project2video,
        },
      ],
    },

    {
      title: "Cryptocurrency API Application",
      mainImg: project3,
      secondaryImg: icon3preview,
      url: "/work/cryptocurrencyapi",
      projectURL: "https://crypto-api-fearghal-reilly.netlify.app/",
      codeURL: "https://github.com/fearghalreilly/Crypto-Coin-API",
      awardstest: [
        {
          featurenumber: "Feature",
          title: "Cryptocurrency API Application",
          description:
            "A Crypto currency application that uses an API to retreive the information with the functionality to search and filter for all coins, increased and descreased coin values.",
            mainImg: icon3preview,
            mainVideo: icon1preview,
        },
      ],
      awardstest2: [
        {
          featuredvideo: project3video,
        },
      ],
    },

    {
      title: "Giphy Finder Application",
      mainImg: project4,
      secondaryImg: icon4preview,
      url: "/work/giphyfinder",
      projectURL: "https://giphy-api-fearghal-reilly.netlify.app/",
      codeURL: "https://github.com/fearghalreilly/giphy-finder.git",
      awardstest: [
        {
          featurenumber: "Feature",
          title: "Giphy Finder Application",
          description:
            "A React Application that uses the Giphy API to retrieve the Trending gifs with the ability to search, save and remove them. The application is mobile responsive and uses Context and Reducer for statement.",
            mainImg: icon4preview,
            mainVideo: icon4preview,
        },
      ],
      awardstest2: [
        {
          featuredvideo: project4video,
        },
      ],
    },
    
  ];
};