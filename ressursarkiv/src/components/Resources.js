import { resources } from "../data/ressurser";


export default function Resources({id}){
    return
        <>         
        {resources.map((item)=>(
            item.category === id ? 
            <li><a href={item.url}>{item.title}</a></li>:null))}
        </>

}