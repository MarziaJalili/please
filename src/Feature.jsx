export default function Feature(props) {
    return (
        <section className="feature">
            <div className="question">
                <img src="./assets/images/icon-plus.svg" alt="" />
                <h2>{props.question}</h2>
            </div>
            <p>{props.answer}</p>
        </section>
    )
}