export type Book = {
    id: number;
    title: string;
    author: string;
    year: number;
    copies_number: number;
    pages_number: number;
    image: string;
}


export type BookPage = {
    content: Book[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    first: boolean;
    number: number;
    empty: boolean;
    numberOfElements: number;
}