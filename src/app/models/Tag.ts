export class Tag {
       
    static readonly ANGULAR = new Tag("assets/icons/angular-svgrepo-com.png", 'Angular');
    constructor(private readonly src: string,public readonly name: string) {
    
    } 
    toString() { 
        return this.src;
    } 
}