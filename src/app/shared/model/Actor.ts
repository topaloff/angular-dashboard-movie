export class Actor {
    id: string;
    name: string;
    firstname: string;
    birth: Date;
    picture: string;
    CountryId: number;
    GenderId: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(name: string, firstname: string, birth: Date, picture: string = '', CountryId: number, GenderId: number) {
        this.name = name;
        this.firstname = firstname;
        this.birth = birth;
        this.picture = picture;
        this.CountryId = CountryId;
        this.GenderId = GenderId;
    }
}
