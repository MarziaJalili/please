export default function Feature(props) {
    return (
        <section className="feature">
            <h2>{props.question}</h2>
            <p>{props.answer}</p>
        </section>
    )
}