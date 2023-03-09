import { useParams } from "react-router";
import Resources from "./Resources";
import Title from "./Title";

export default function Main() {
  let {id} = useParams()
  return (
    <>
      <div className="container">
        <main>
          <article id="htmlinfo">
            <Title className="category" />
            <Resources id={id}/>
          
          </article>
        </main>
      </div>
    </>
  );
}
