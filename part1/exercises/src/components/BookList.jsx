export default function BookList() {
   let pageTitle = "List of Books";
   let book1 = "https://skyryedhttps://skyryedesign.com/wp-content/uploads/2016/04/56c6f9bcdbf95-cover-books-design-illustrations.jpgesign.com/wp-content/uploads/2016/04/56c6f9bcdbf95-cover-books-design-illustrations.jpg";
   let book2 = "https://skyryedesign.com/wp-content/uploads/2016/04/56c6f9b7efad5-cover-books-design-illustrations.jpg://skyryedesign.com/wp-content/uploads/2016/04/56c6f9b7efad5-cover-books-design-illustrations.jpg";
   let book3 = "https://skyryedesign.com/wp-content/uploads/2016/04/The-Busker-by-Leo-Nickolls-cover-books-design-illustrations.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Was it a fox?" />
         <img src={book2} alt="This one had fire!" />
         <img src={book3} alt="Looked like art on the cover?" />
      </div>      
   );
}