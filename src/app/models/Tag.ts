export class Tag {
    //Frameworks:
    static readonly ANGULAR = new Tag("assets/icons/angular-svgrepo-com.png", 'Angular');
    static readonly REACT = new Tag("assets/icons/react-svgrepo-com.png", 'React');
    static readonly UNITY = new Tag("assets/icons/unity.png", 'Unity');
    static readonly UNREAL = new Tag("assets/icons/unreal-engine-svgrepo-com.png", 'Unreal');
    static readonly DOTNET = new Tag("assets/icons/dotnet-svgrepo-com.png", '.NET');
    //Libraries:
    static readonly THREE = new Tag("assets/icons/three-js-icon.png", 'Three.js');
    //Languages:
    static readonly TYPESCRIPT = new Tag("assets/icons/file-ts-svgrepo-com.png", 'Typescript');
    static readonly CSHARP = new Tag("assets/icons/csharp-svgrepo-com.png", 'C#');
    static readonly JAVA = new Tag("assets/icons/java-svgrepo-com.png", 'Java');
    static readonly CPP = new Tag("assets/icons/cpp-svgrepo-com.png", 'C++');
    static readonly PYTHON = new Tag("assets/icons/python-svgrepo-com.png", 'Python');

    constructor(private readonly src: string,public readonly name: string) {
    
    } 
    toString() { 
        return this.src;
    } 
}