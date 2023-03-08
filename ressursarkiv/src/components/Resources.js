import { resources } from "../data/ressurser";


export default function Resources({id}){
    return (
        <ul>
            {resources.map((item)=>(
                item.category === id ? 
                <li><a href={item.url}>{item.title}</a></li>:null))}
        </ul>
    )

}