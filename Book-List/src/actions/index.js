export function selectBook(book) {
    //  selectBook is an ActionCreator
    //  returns an object with a type property
    return{
        type: 'BOOK_SELECTED',
        payload: book
    };
}