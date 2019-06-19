// class Test{

//     constructor(public message: string){}
// }

// var hello = new Test("Hola JavaScript");
// console.log("Hola");

function GetAllBooks(){
    let books = [
    {tittle:"La Odisea",author:"Homero",avalible:false,categoria: Category.poesia},
    {tittle:"El transa",author:"Matias Quiroga",avalible:false,categoria:Category.infantiles},
    {tittle:"Vicios{digitales}",author:"Cristian Sielach",avalible:false,categoria:Category.biografia},
    {tittle:"Lolita",author:"Vladimir Nabokov",avalible:false,categoria:Category.ficcion},
    {tittle:"The Brothers Karamazov",author:"Fyodor Dostoyevsky",avalible:false,categoria:Category.ficcion},
    {tittle:"Dead Souls",author:"Nikolai Gogol",avalible:true,categoria:Category.ficcion},
    {tittle:"Eugene Onegin",author:"Alexander Pushkin",avalible:false,categoria:Category.poesia},
    ];

    return books;
}


function logFirstAvalible(books):void{
    let firstAvalible:string = "";
    let numberOfBooks:number = books.length;

    for (let currentBook of books) {
        if(currentBook.avalible){
            firstAvalible = currentBook.tittle;
            break;
        }
    }
    console.log("total de libros " + numberOfBooks);
    console.log("primer libro disponible " + firstAvalible);
}

function ScopeTest(){
    if(true){
        var foo = "use anywhere";
        
    }
    let bar = "use in this block"
    console.log(foo);
    console.log(bar);
}

function GetBooksTittlesByCategory(categoryFilter : Category) : Array<String>{
    console.log("Getting Book in category: " + Category[categoryFilter]);
    const AllBooks = GetAllBooks();
    const filteredTittles : string[] = [];

    for(let currentBook of AllBooks){
        if(currentBook.categoria === categoryFilter){
            filteredTittles.push(currentBook.tittle);
        }
    }
    return filteredTittles;
}

function logBookTittles(tittles:string[]):void{
    for(let tittle of tittles){
        console.log(tittle);
    }
    
}

enum Category{biografia, poesia, ficcion, historia, infantiles}

GetAllBooks();
ScopeTest();
const todosLosLibros = GetAllBooks();
todosLosLibros.push({tittle:"Dead Souls",author:"Nikolai Gogol",avalible:true,categoria:Category.ficcion});
todosLosLibros.push({tittle:"Eugene Onegin",author:"Alexander Pushkin",avalible:false,categoria:Category.poesia});

logFirstAvalible(todosLosLibros);
//GetBooksTittlesByCategory(Category.ficcion);
const librosDePoesia = GetBooksTittlesByCategory(Category.poesia);
logBookTittles(librosDePoesia);
const librosInfantiles = GetBooksTittlesByCategory(Category.infantiles);
const librosDeHistoria = GetBooksTittlesByCategory(Category.historia);
const librosDeFiccion = GetBooksTittlesByCategory(Category.ficcion);
const librosBiograficos = GetBooksTittlesByCategory(Category.biografia);
//logBookTittles(librosDePoesia);
