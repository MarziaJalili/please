import { useState } from "react";

export default function Feature(props) {
    const [shown, setShown] = useState(false);
    const questionIcon = shown ? "./assets/images/icon-minus.svg" : "./assets/images/icon-plus.svg";

    const displayAnswer = shown ? "shown-answer" : "";

    const handleClick = (event) => {
        setShown(prevState => !prevState)
    };


    return (
        <section className="faq-accordion__feature">
            <div className="feature__question">
                <h2>{props.question}</h2>
                <button onClick={handleClick} className="feature__show-answer">
                    <img src={questionIcon} alt="" />
                </button>
            </div>
            <p className={`feature__answer ${displayAnswer}`}>{props.answer}</p>
        </section>
    )
}