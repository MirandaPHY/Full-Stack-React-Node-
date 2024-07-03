import ".Blog.css";
import Postagem from "./Postagem";

function Blog() {
    return(
        <section className="blog">
            <h2>Postagem do Dia</h2>
            <Postagem />
            <Postagem />
            <Postagem />
            <Postagem />
            <Postagem />
        </section>
    )
}