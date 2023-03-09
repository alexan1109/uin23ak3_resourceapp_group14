import { resources } from "../data/ressurser";

export default function Resources() {
  return (
    <ul>
      {resources.map((item, index) =>
          <li key={index}>
            <a href={item.url}>{item.title}</a>
          </li>
      )}
    </ul>
  );
}
