import { bookPreview } from "../data/bookTemplate.js";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../util.js";
import { getBooks } from "../data/services.js";


const myBooksTemplate = (books) => html` 
<section id="my-books-page" class="my-books">
<h1>My Books</h1>
${
    books.length === 0 ? html`<p class="no-books">No books in database!</p>` : html`
    <ul class="my-books-list">
    ${books.map(bookPreview)}
    </ul>` 
}
</section>`

export async function myBooksPage(ctx) { 
    const userData = getUserData()
    const books = await getBooks(userData._id);
    ctx.render(myBooksTemplate(books))



}