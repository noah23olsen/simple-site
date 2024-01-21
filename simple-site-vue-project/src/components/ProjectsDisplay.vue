<template>
  <div>
    <br />
    <h3>personal projects</h3>
    <projects-vue
      v-for="project in projects"
      :key="project.title"
      :description="project.description"
      :link="project.link"
      :title="project.title"
      :languages="project.languages"
    />
  </div>
</template>

<script>
import ProjectsVue from "@/components/ProjectsVue.vue";
export default {
  name: "ProjectsDisplay",
  components: {
    ProjectsVue,
  },
  data() {
    return {
      projects: [
        {
          languages: [
            "OpenAI",
            "Java",
            "Javascript",
            "Vue.js",
            "PostgreSQL",
            "Springboot",
            "Spring Boot",
            "RapidAPI",
          ],
          title: "Chatbot",
          link: "https://github.com/noah23olsen/m3-capstone",
          // imgSrc: require("@/assets/chatbotPic.png"),
          description:
            "[Final capstone] My final capstone project was a chatbot that served as a middle ground between simplistic customer-service chatbots and custom LLMs like chatGPT. The chatbot allowed users to speak, listen, ask technical questions, receive custom emailed jobs, interpret code, take profile pictures, and keep context. I worked on this project with three other students, and we followed an Agile methodology with multi-day sprints, daily standups, code reviews, and a final presentation.",
        },
        {
          languages: ["React", "Java", "Javascript", "PostgreSQL", "Postman"],
          title: "HealthTracker",
          link: "https://github.com/noah23olsen/HealthTracker",
          // imgSrc: require("@/assets/heart2.png"),
          description:
            "A tool to track rudimentary biometrics such as sleep, hydration, and diet. This project is my first experience using React in an actual application. Very exciting things!",
        },
        {
          languages: ["Vue.js", "OpenAI", "Javascript"],
          title: "Quiz.AI",
          link: "https://github.com/noah23olsen/hackathonAtCohatch",
          // imgSrc: require("@/assets/Quiz.AI.png"),
          description:
            "[Hackathon Project] Generate custom quizzes with ChatGPT's turbo 3.5 large language model in seconds! This project was created by me and a fellow Tech Elevator alumnus during a Google Developer Group hackathon this past weekend. In approximately 10 hours, we progressed from ideation to building the MVP, crafting a pitch, and presenting the product to local Columbus developers.",
        },
        {
          languages: ["Laravel", "PHP", "Vue.js", "PostgreSQL"],
          title: "Car Dealership",
          link: "https://github.com/noah23olsen/LaravelCrud",
          // imgSrc: require("@/assets/carLogo.jpg"),
          description:
            "Create, read, update, and delete cars from a dealership. The premise of this project was to get more familiar with PHP and the Laravel framework.",
        },
        {
          languages: ["Java", "Spring Boot", "PostgreSQL", "JUnit"],
          title: "Tenmo",
          link: "https://github.com/noah23olsen/module-2-capstone",
          // imgSrc: require("@/assets/tenmo.png"),
          description:
            "[Second capstone] Utilized Java, PostgreSQL, Integration testing, and Springboot to implement a client/serverside transfer service. Utilizing the MVC design pattern, the application allows users to register, login, send, and approve transfers to other users.",
        },
        {
          languages: ["Java", "Spring Boot", "PostgreSQL", "JUnit"],
          title: "Cash Register Application",
          link: "https://github.com/noah23olsen/m1-capstone",
          // imgSrc: require("@/assets/cashRegister.png"),
          description:
            "[First capstone] Utilizing Java, the POS application allows users to deposit money into their accounts, add items to their carts, and checkout at a respective store. The application also logs past transaction history, viewable as a list of transactions.",
        },
        {
          languages: ["Arduino", "Electrical Engineering"],
          title: "Telegraph",
          // imgSrc: require("@/assets/telegraph.jpg"),
          description:
            "[Side Project] This project enables users to transmit Morse code onto a computer using their fingertips. I employed Arduino IDE for software development and Arduino Uno/electrical components for the hardware. When the user inputs Morse code using the button, the corresponding text is displayed on an external monitor.",
        },
        {
          languages: [
            "Python",
            "AWS Lambda",
            "AWS EventBridgeScheduler",
            "AWS IAM",
          ],
          title: "Chorebot",
          // imgSrc: require("@/assets/chorebot.png"),
          description:
            "[Side Project] Recognizing the perpetual untidiness in my shared living space, I leveraged my newfound development skills to create a Slack bot using Java and Python. The bot assigns designated chores to household members every Sunday morning, effectively addressing the cleanliness issue.",
        },
        {
          languages: ["Arduino", "3D Printing", "Electrical Engineering"],
          title: "Reflected Light To Solar Panel Capturer",
          link: "https://youtu.be/z2Mgc4NLjW4?si=7EE4ZmBwIKO6rcoa",
          // imgSrc: require("@/assets/solarCapturer.png"),
          description:
            '[Hackathon] Part of MakeOHI/O, this project reads photos and moves the contraption to the most efficient light-position. The project utilizes Arduino IDE, 3d-printed cad models, and electrical hardware components. I was one of the two "business" major students at the hackathon, coupled with my partners expertise in electrical engineering. This project has really instilled a passion inside me for designing cool hardware/software projects.',
        },
        {
          languages: [
            "Python",
            "Machine Learning",
            "Kaggle",
            "Linear Regression",
            "KNN",
            "Data Cleaning",
          ],
          title: "Enhancing Autonomous Wine Quality Prediction",
          // imgSrc: require("@/assets/IMG_0418.jpg"),
          description:
            "[Hackathon] My first hackathon, in which I didn't know how to code at all. I wanted to learn more about AI and coding, so I went anyway. Our team used a kaggle dataset, google colab notebooks, python, and some ML libraries to clean a wine quality dataset and predict the quality of wine based on ~10 variables. We originally used linear regression, but pivoted to KNN.",
        },
        {
          languages: ["HTML", "CSS"],
          title: "FreeCodeCamp Certification/Projects",
          link: "https://www.freecodecamp.org/certification/NoahOlsen/responsive-web-design",
          // imgSrc: require("@/assets/fcc.png"),
          description:
            "[Extra coursework I took on the side during college] A Responsive Web Design Certification(~300 hours), educating one on the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design. You can check out some of the sites I designed, mainly to see how far my coding skills have come. In hindsight, the design for many of the sites is absolutely atrocious!",
        },
      ],
    };
  },
};
</script>