import './App.css'
import Feature from "./Feature"
function App() {
  return (
    <main className="faq-accordion">
      <hgroup className="faq-accordion__heading">
        <img src={"./assets/images/icon-star.svg"} alt="" />
        <h1>FAQs</h1>
      </hgroup>

      <Feature
        key={1}
        question="What is Frontend Mentor, and how will it help me?"
        answer="Frontend Mentor offers realistic coding challenges to help developers improve their fronted skills with projects in HTML, CSS, and JavaScript. It's suitable for all leavels and ideal for portfolio building."
      />

      <Feature
        key={2}
        question="Is Frontend Mentor free?"
        answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
      />

      <Feature
        key={3}
        question="Can I use Frontend Mentor projects in my protfolio?"
        answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers! "
      />

      <Feature
        key={4}
        question="How can I get help if I'm stuck on a challenge?"
        answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members. "
      />
    </main>
  )
}

export default App
