import { resources } from "../data/ressurser";

export default function Resources({id}) {
  return (
    <ul>
      {resources.map((item, index) =>
          item.category === id ?
          <li key={index}>
            <a href={item.url}>{item.title}</a>
          </li> : null
      )}
    </ul>
  );
}
