export class Country {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(name: string) {
        this.name = name;
    }
}
