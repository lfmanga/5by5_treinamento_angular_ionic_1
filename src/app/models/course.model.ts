import { Author } from './author.model';

export class Course {
    constructor(
        public _id : string,
        public title: string,
        public duration: number,
        public price: number,
        public tag: string,
        public category: number,
        public tags: string,
        public createDate: Date,
        public author: Author
    ) { }
}