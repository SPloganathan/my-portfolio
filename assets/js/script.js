const projectDetails = [
    {
        title: 'WITCHES BREW AND EATS',
        description:
            ' Witches Brew and Eats is a unique and enchanting food and beverage establishment, where customers can experience a mystical and magical atmosphere while enjoying delicious food and drinks. It is a place where people can come together to celebrate their love for witchcraft, magic, and all things supernatural.',
        github: 'https://github.com/SPloganathan/witches-brew-and-eats',
        deployed: 'https://witches-brew-and-eats.herokuapp.com',
        image: './assets/images/witches.png',
    },
    {
        title: 'LUV 2 H8',
        description:
            " This is an Interactive Full-Stack Application for creating negative posts/reviews with complaints regarding any place or business. Our motivation was to practice our collaborative skills, coding abilitiesthe and knowlege we've built the past six modules of the boot camp to create a real-world full-stack application. The aim was to create a blog sitesimilar to Yelp, where users can publish a claim to anything - this is world for the real HATERS. So other haters/users could look through the blog and give likes/dislikes to the posts.",
        github: 'https://github.com/SPloganathan/luv-2-h8',
        deployed: 'https://luv-2-h8.herokuapp.com/',
        image: './assets/images/luv.png',
    },
    {
        title: 'MARVEL MOVIE 3000',
        description:
            ' Marvel-Movies-3000 allows the user to search for movies and characters related to the Marvel universe which will in turn provide us with a full movie description, movie posters, rating of the searched movie and full character details.',
        github: 'https://github.com/SPloganathan/marvel-movies-3000',
        deployed: 'https://sploganathan.github.io/marvel-movies-3000/',
        image: './assets/images/marvel.jpeg',
    },
    {
        title: 'CMS STYLE TECH BLOG',
        description:
            ' Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies and here it is....A blog where developers can publish their blog posts and comment on other developers posts as well.',
        github: 'https://github.com/SPloganathan/cms-style-tech-blog',
        deployed: 'https://cms-style-tech-blogg.herokuapp.com/',
        image: './assets/images/cms.png',
    },
    {
        title: 'MARKDOWN README GENERATOR',
        description:
            ' When creating an open source project on GitHub, its important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.',
        github: 'https://github.com/SPloganathan/markdown-readme-generator',
        deployed: 'https://www.npmjs.com/package/markdown-readme-generator',
        image: './assets/images/markdown.png',
    },
    {
        title: 'WEATHER FORECAST',
        description:
            ' The challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. A third-party APIs is used to access data and functionality by making requests with specific parameters to a URL. Weather dashboard is displayed with city name and its current and future weather forecast details.',
        github: 'https://github.com/SPloganathan/weather-forecast',
        deployed: 'https://sploganathan.github.io/weather-forecast/',
        image: './assets/images/weather.png',
    },
];

const slides = document.getElementsByClassName('carousel-items');
const nextButton = document.getElementById('carousel-button-next');
const prevButton = document.getElementById('carousel-button-prev');

let position = 0;
const numberOfSlides = slides.length;

function hideAllSlides() {
    // remove all slides not currently being viewed
    for (const slide of slides) {
        slide.classList.remove('carousel-item-visible');
    }
}
const handleMoveToNextSlide = function (event, positionIndex) {
    hideAllSlides();

    if (positionIndex !== undefined) {
        position = positionIndex;
    }
    // check if last slide has been reached
    else if (position === numberOfSlides - 1) {
        position = 0; // go back to first slide
    } else {
        // move to next slide
        position++;
    }
    // make current slide visible
    slides[position].classList.add('carousel-item-visible');
};

const handleMoveToPrevSlide = function (e) {
    hideAllSlides();

    // check if we're on the first slide
    if (position === 0) {
        position = numberOfSlides - 1; // move to the last slide
    } else {
        // move back one
        position--;
    }
    // make current slide visible
    slides[position].classList.add('carousel-item-visible');
};
nextButton.addEventListener('click', handleMoveToNextSlide);
prevButton.addEventListener('click', handleMoveToPrevSlide);

document.querySelectorAll('.nav-text').forEach((element, index) => {
    element.addEventListener('click', (event) => handleMoveToNextSlide(event, index));
});

const getProjectList = () => {
    const projectListContainer = document.querySelector('#project-list');
    let textElement = '';
    projectDetails.forEach((project) => {
        textElement += `<p class="project-title" data-title="${project.title}">${project.title}</p>`;
    });
    projectListContainer.innerHTML = textElement;
};
getProjectList();

document.querySelectorAll('.project-title').forEach((element) => {
    element.addEventListener('click', (event) => {
        const title = event.target.getAttribute('data-title');
        const projectDetail = projectDetails.find((detail) => detail.title === title);
        document.querySelector('#project-title').textContent = projectDetail.title;
        document.querySelector('#project-description').textContent = projectDetail.description;
        document.querySelector('#project-github').setAttribute('href', projectDetail.github);
        document.querySelector('#project-deployed').setAttribute('href', projectDetail.deployed);
        document.querySelector('#image').setAttribute('src', projectDetail.image);
    });
});
const modal = document.querySelector('.modal');

const closeButton = document.querySelector('.close-button');

function toggleModal() {
    modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);
