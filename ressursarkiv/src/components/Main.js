import Resources from "./Resources";
import Title from "./Title";

export default function Main(){
    return (
        <>
        <div className="container">
        <main>
            <article id="htmlinfo">
                <Title className="category_name" name="HTML"/>
                <ul >
                    <Resources/>
                </ul>
            </article>
        </main>
        </div>
        </>
    )
}