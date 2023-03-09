import Resources from "./Resources";
import Title from "./Title";

export default function Main() {
  return (
    <>
      <div className="container">
        <main>
          <article id="htmlinfo">
            <Title className="category" />
            <Resources />
          </article>
        </main>
      </div>
    </>
  );
}
