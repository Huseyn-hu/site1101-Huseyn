const knowledgeBase = [
  { question: "who are you", answer: "I am Huseyn Huseynzada, a mathematics student at ADA University." },
  { question: "what is your name", answer: "My name is Huseyn Huseynzada." },
  { question: "introduce yourself", answer: "Hi, I’m Huseyn Huseynzada, a math student who loves art, books, and volunteering." },
  { question: "tell me about yourself", answer: "I’m a math student at ADA University, interested in creativity, leadership, and community work." },
  { question: "who is huseyn", answer: "Huseyn Huseynzada is a math student at ADA University with strong volunteering and leadership experience." },
  { question: "where do you study", answer: "I study Mathematics at ADA University in Baku." },
  { question: "what do you study", answer: "I study Mathematics at ADA University." },
  { question: "what university do you attend", answer: "I attend ADA University." },
  { question: "when did you start university", answer: "I started ADA University in September 2024." },
  { question: "what is your major", answer: "My major is Mathematics." },
  { question: "what are your interests", answer: "I’m interested in mathematics, art, books, volunteering, leadership, and organizing events." },
  { question: "what hobbies do you have", answer: "I enjoy reading, drawing, volunteering, and organizing events." },
  { question: "what do you enjoy doing", answer: "I enjoy learning, creating art, reading books, and helping the community." },
  { question: "what motivates you", answer: "Learning new things, solving problems, and helping people motivates me." },
  { question: "favorite color", answer: "I like calm, creative colors like blue." },
  { question: "favorite food", answer: "I enjoy simple, homemade food." },
  { question: "what are your goals", answer: "My goals are to become a strong mathematician, study at a top university, and apply math to technology." },
  { question: "career goal", answer: "I want to grow as a mathematician and use math in research and technology." },
  { question: "what do you want to achieve", answer: "I want to connect math, creativity, and modern tech to make useful ideas." },
  { question: "what inspires you", answer: "Curiosity, creative problem solving, and seeing ideas help people inspire me." },
  { question: "how do you plan to grow", answer: "By studying hard, taking courses, building projects, and contributing to research." },
  { question: "languages you speak", answer: "I speak Azerbaijani (native), English (C1), Turkish (C2), and Russian (A2)." },
  { question: "english level", answer: "My English level is C1." },
  { question: "turkish level", answer: "My Turkish level is C2." },
  { question: "russian level", answer: "My Russian level is A2." },
  { question: "native language", answer: "My native language is Azerbaijani." },
  { question: "how can i contact you", answer: "Use the contact form on my Contact page or email me at hhuseyn465@gmail.com." },
  { question: "what is your email", answer: "You can reach me at hhuseyn465@gmail.com." },
  { question: "contact form", answer: "Visit my Contact page to send a message through the form." },
  { question: "get in touch", answer: "Send me a note on the Contact page; I’ll reply as soon as possible." },
  { question: "can i email you", answer: "Yes, email me at hhuseyn465@gmail.com." },
  { question: "what courses have you taken", answer: "I completed leadership, project management, AI, and entrepreneurship courses listed on my Courses page." },
  { question: "stepping up course", answer: "“Stepping Up: Preparing Yourself for Leadership” from Queen Mary University on Coursera." },
  { question: "foundations of project management", answer: "“Foundations of Project Management” from Google on Coursera." },
  { question: "effective leadership course", answer: "“Effective Leadership: Master Management Styles” on Coursera." },
  { question: "agile leadership course", answer: "“Agile Leadership: Introduction to Change” from University of Colorado on Coursera." },
  { question: "developing innovative ideas course", answer: "“Developing Innovative Ideas for New Companies” from University of Maryland on Coursera." },
  { question: "introduction to generative ai", answer: "“Introduction to Generative AI” from Google Cloud Skills Boost." },
  { question: "entrepreneurial mindset course", answer: "“Developing An Entrepreneurial Mindset” from Michigan State University on Coursera." },
  { question: "responsible ai course", answer: "“Introduction to Responsible AI” on Coursera." },
  { question: "where are your certificates", answer: "They are listed on my Courses page and in my Resume." },
  { question: "what books have you read", answer: "I’ve read The ONE Thing, Animal Farm, The 48 Laws of Power, and more on my Books page." },
  { question: "leadership book", answer: "I read “How to Win Friends and Influence People in the Digital Age.”" },
  { question: "entrepreneurship book", answer: "I read “The Opportunity Analysis Canvas.”" },
  { question: "productivity book", answer: "I read “The ONE Thing.”" },
  { question: "classic literature", answer: "I read “Animal Farm” by George Orwell." },
  { question: "fantasy books", answer: "I read the “Harry Potter” series." },
  { question: "strategy book", answer: "I read “The 48 Laws of Power.”" },
  { question: "where is your book list", answer: "My book list is on the Books page." },
  { question: "why do you read", answer: "Books help me learn, think critically, and stay creative." },
  { question: "favorite book", answer: "I enjoy books that mix practical lessons with clear storytelling." },
  { question: "what projects have you done", answer: "I built projects like Introduction to Computer Architecture and Learn C++ – Introduction." },
  { question: "computer architecture project", answer: "It explores basic computer architecture concepts and low-level organization." },
  { question: "c++ project", answer: "It’s an introductory C++ project practicing syntax, control flow, and problem solving." },
  { question: "where can i see your projects", answer: "You can see them on the Projects page." },
  { question: "do you code in c++", answer: "Yes, I practiced C++ basics in my Learn C++ project." },
  { question: "what tech do you like", answer: "I like tech that connects math with practical problem solving." },
  { question: "do you enjoy low level computing", answer: "Yes, I explored low-level organization in my architecture project." },
  { question: "do you build creative projects", answer: "Yes, I enjoy projects that blend structure and creativity." },
  { question: "what project are you proud of", answer: "I’m proud of projects that built strong fundamentals like architecture and C++." },
  { question: "what project skills", answer: "I practice planning, coding basics, and explaining concepts clearly." },
  { question: "what art do you create", answer: "I paint pieces like Blue Sky, Green Lake, and Summertime." },
  { question: "name an artwork", answer: "“Blue Sky” is one of my artworks from 2022." },
  { question: "green lake artwork", answer: "“Green Lake” is an acrylic painting I completed over two months." },
  { question: "summertime artwork", answer: "“Summertime” is an ongoing oil painting I’ve been working on for a year." },
  { question: "where can i see your art", answer: "View my Art page to see my paintings." },
  { question: "why do you draw", answer: "Drawing lets me express ideas visually and stay creative." },
  { question: "what mediums do you use", answer: "I use acrylics and oil paints for my artworks." },
  { question: "do you teach art", answer: "I assisted as an Art Teacher Assistant, guiding students in drawing basics." },
  { question: "what volunteering have you done", answer: "I coordinated volunteers, guided events, and supported community projects." },
  { question: "ada volunteers movement role", answer: "I was Coordinator of the Volunteers, directing teams at major events." },
  { question: "icpc role", answer: "I assisted the Director at ICPC World Finals Baku and organized volunteers." },
  { question: "art teacher assistant role", answer: "I helped plan lessons and teach kids drawing fundamentals." },
  { question: "art director role", answer: "I managed art events and mentored members in drawing techniques." },
  { question: "visitor services volunteer role", answer: "I guided guests at Heydar Aliyev Center and ensured good experiences." },
  { question: "regional development public union work", answer: "I joined initiatives on community development, environment, and cultural events." },
  { question: "why do you volunteer", answer: "Volunteering lets me help others, grow leadership, and support community." },
  { question: "how many volunteers did you manage", answer: "I supervised teams of 40–100+ volunteers at events." },
  { question: "what skills did volunteering build", answer: "Leadership, communication, organization, and teamwork." },
  { question: "do you have leadership experience", answer: "Yes, I led volunteer teams and organized events at ADA University." },
  { question: "how do you lead teams", answer: "I plan clearly, communicate often, and support people to succeed." },
  { question: "what is your leadership style", answer: "Supportive and organized, focused on clear goals and teamwork." },
  { question: "do you organize events", answer: "Yes, I organized admission and end-of-year events and guided open days." },
  { question: "why do you like leadership", answer: "I like helping teams work smoothly and see results together." },
  { question: "what did you learn from managing volunteers", answer: "I learned to coordinate tasks, handle feedback, and keep morale high." },
  { question: "how do you handle challenges", answer: "By breaking problems down, communicating, and staying calm." },
  { question: "what is your team communication style", answer: "Clear, respectful, and focused on quick solutions." },
  { question: "what motivates your leadership", answer: "Seeing people grow and events succeed motivates me." },
  { question: "do you coach others", answer: "Yes, I mentor peers and volunteers when they need guidance." },
  { question: "what is ada university", answer: "ADA University is a university in Baku where I study mathematics." },
  { question: "why ada university", answer: "It offers strong academics and an environment for leadership and volunteering." },
  { question: "what do you like about ada", answer: "I like the community, opportunities to volunteer, and strong courses." },
  { question: "what events did you support at ada", answer: "Admissions events, open days, commencement, and volunteer coordination." },
  { question: "what is aspire leaders program", answer: "It’s a leadership program at Aspire Institute I joined in 2025." },
  { question: "what is your status at aspire leaders program", answer: "I’m currently participating in the Aspire Leaders Program." },
  { question: "what art course did you take", answer: "I took an Art Course at Mashtaga Culture Center from 2017 to 2021." },
  { question: "what is your study focus", answer: "Connecting mathematics with creativity and technology." },
  { question: "what academic skills do you value", answer: "Critical thinking, problem solving, and clear communication." },
  { question: "how do you balance study and volunteering", answer: "By planning time, prioritizing tasks, and staying organized." },
  { question: "what do you like about mathematics", answer: "I like its clarity, structure, and how it powers technology." },
  { question: "how do you use math in projects", answer: "I apply logical thinking and structure to solve problems." },
  { question: "do you link math with creativity", answer: "Yes, I enjoy connecting math with art and design ideas." },
  { question: "what is your math goal", answer: "To master fundamentals and use math in research and technology." },
  { question: "how do you learn math", answer: "By studying theory, solving problems, and applying it to real tasks." },
  { question: "why is math important to you", answer: "Math teaches clear thinking and problem solving for any field." },
  { question: "do you enjoy problem solving", answer: "Yes, solving problems is one of my favorite parts of math." },
  { question: "do you teach math concepts", answer: "I like explaining concepts clearly when helping others." },
  { question: "do you like low level computing", answer: "Yes, I explored low-level organization in my architecture project." },
  { question: "how does math connect to tech", answer: "Math underpins algorithms, data structures, and system design." },
  { question: "work experience summary", answer: "I managed volunteers, worked as HR intern, and supported event operations." },
  { question: "hr intern role", answer: "I managed daily HR tasks, interviews, and coordination." },
  { question: "hr manager role", answer: "I evaluated volunteers, coordinated tasks, and supported recruitment." },
  { question: "visual design tasks", answer: "I design social posts and visual content for events." },
  { question: "hours as hr intern", answer: "I worked about 3–4 hours per day." },
  { question: "coordination experience", answer: "I directed teams of 40–100+ volunteers across events." },
  { question: "guide visitors", answer: "Yes, as a visitor services volunteer at Heydar Aliyev Center." },
  { question: "mentor students", answer: "Yes, I guided new students during open days." },
  { question: "support international guests", answer: "Yes, I assisted international participants at ICPC World Finals Baku." },
  { question: "where can i see your resume", answer: "View my Resume page; you can also download my CV there." },
  { question: "how to download your cv", answer: "Go to the Resume page and click Download CV." },
  { question: "what certifications do you hold", answer: "Multiple Coursera certificates in leadership, project management, AI, and entrepreneurship." },
  { question: "where to view courses", answer: "Open the Courses page to see all my certificates." },
  { question: "where are your books listed", answer: "They are listed on the Books page." },
  { question: "where are your projects listed", answer: "They are listed on the Projects page." },
  { question: "where are your art pieces listed", answer: "They are listed on the Art page." },
  { question: "where to learn more about you", answer: "Check the About page for my story and interests." },
  { question: "do you have a contact page", answer: "Yes, visit the Contact page to send me a message." },
  { question: "how fast do you reply", answer: "I try to reply as soon as possible." },
  { question: "default", answer: "I am not sure. Please check my Resume or Contact page." }
];

function getAnswer(userQuestion) {
  const normalized = (userQuestion || "").toLowerCase();
  for (const item of knowledgeBase) {
    const key = item.question.toLowerCase();
    if (normalized.includes(key)) {
      return item.answer;
    }
  }
  return "I am not sure. Please check my Resume or Contact page.";
}

function addMessage(role, text) {
  const messages = document.querySelector(".assistant__messages");
  if (!messages) return;
  const item = document.createElement("div");
  item.className = `assistant__message assistant__message--${role}`;
  item.textContent = text;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
}

function handleAssistantSend() {
  const input = document.querySelector(".assistant__input");
  if (!input) return;
  const question = input.value.trim();
  if (!question) return;
  addMessage("user", question);
  const answer = getAnswer(question);
  addMessage("bot", answer);
  input.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".assistant__button");
  const panel = document.querySelector(".assistant__panel");
  const sendBtn = document.querySelector(".assistant__send");
  const input = document.querySelector(".assistant__input");

  if (toggleBtn && panel) {
    toggleBtn.addEventListener("click", () => {
      panel.classList.toggle("assistant__panel--open");
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", handleAssistantSend);
  }

  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleAssistantSend();
      }
    });
  }
});
