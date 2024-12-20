import { useState } from "react";

export default function Feature(props) {
    const [shown, setShown] = useState(false);
    const questionIcon = shown ? "./assets/images/icon-minus.svg" : "./assets/images/icon-plus.svg";


    const handleClick = (event) => {
        setShown(prevState => !prevState)
    };


    return (
        <section className="faq-accordion__feature">
            <div className="feature__question">
                <h2>{props.question}</h2>
                <button onClick={handleClick} className="feature__show-answer" aria-label="Toggle the answer">
                    <i className="icon-toggle" aria-hidden="true" />
                    <img src={questionIcon} alt="" />
                </button>
            </div>
            {shown && <p className="feature__answer">{props.answer}</p>}
        </section>
    )
}