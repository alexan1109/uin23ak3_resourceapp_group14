export default function Main(category_name, category_info, url, url_title){
    return(
        <>
        <main>
            <article id="htmlinfo">
                <h2 className="category_name">{category_name}</h2>
                <p className="category_info">{category_info}</p>
                <ul >
                    <li className="category_list"><a href={url}>{url_title}</a></li>
                </ul>
            </article>
        </main>
        </>
    )
}

