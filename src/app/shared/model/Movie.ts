import { Actor } from './Actor';

export class Movie {
    id: number;
    title: string;
    description: string;
    picture: string;
    year: number;
    note: number;
    CategoryId: number;
    Actors: Actor[];
    createdAt: Date;
    updatedAt: Date;
    constructor(title: string, description: string, picture: string = '', year: number, note: number, CategoryId: number) {
        this.title = title;
        this.description = description;
        this.picture = picture;
        this.year = year;
        this.note = note;
        this.CategoryId = CategoryId;
    }
}
