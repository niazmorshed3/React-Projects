import Book from "./Book";
export default function BookStore(books) {
  return (
    <div>
      <h3>Book Name :{books.length}</h3>

      {books.map((i) => (
        <Book book={i}></Book>
      ))}
    </div>
  );
}
