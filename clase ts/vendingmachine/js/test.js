// class Test{
//     constructor(public message: string){}
// }
// var hello = new Test("Hola JavaScript");
// console.log("Hola");
function GetAllBooks() {
    var books = [
        { tittle: "La Odisea", author: "Homero", avalible: false, categoria: Category.poesia },
        { tittle: "El transa", author: "Matias Quiroga", avalible: false, categoria: Category.infantiles },
        { tittle: "Vicios{digitales}", author: "Cristian Sielach", avalible: false, categoria: Category.biografia },
        { tittle: "Lolita", author: "Vladimir Nabokov", avalible: false, categoria: Category.ficcion },
        { tittle: "The Brothers Karamazov", author: "Fyodor Dostoyevsky", avalible: false, categoria: Category.ficcion },
        { tittle: "Dead Souls", author: "Nikolai Gogol", avalible: true, categoria: Category.ficcion },
        { tittle: "Eugene Onegin", author: "Alexander Pushkin", avalible: false, categoria: Category.poesia },
    ];
    return books;
}
function logFirstAvalible(books) {
    var firstAvalible = "";
    var numberOfBooks = books.length;
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.avalible) {
            firstAvalible = currentBook.tittle;
            break;
        }
    }
    console.log("total de libros " + numberOfBooks);
    console.log("primer libro disponible " + firstAvalible);
}
function ScopeTest() {
    if (true) {
        var foo = "use anywhere";
    }
    var bar = "use in this block";
    console.log(foo);
    console.log(bar);
}
function GetBooksTittlesByCategory(categoryFilter) {
    console.log("Getting Book in category: " + Category[categoryFilter]);
    var AllBooks = GetAllBooks();
    var filteredTittles = [];
    for (var _i = 0, AllBooks_1 = AllBooks; _i < AllBooks_1.length; _i++) {
        var currentBook = AllBooks_1[_i];
        if (currentBook.categoria === categoryFilter) {
            filteredTittles.push(currentBook.tittle);
        }
    }
    return filteredTittles;
}
function logBookTittles(tittles) {
    for (var _i = 0, tittles_1 = tittles; _i < tittles_1.length; _i++) {
        var tittle = tittles_1[_i];
        console.log(tittle);
    }
}
var Category;
(function (Category) {
    Category[Category["biografia"] = 0] = "biografia";
    Category[Category["poesia"] = 1] = "poesia";
    Category[Category["ficcion"] = 2] = "ficcion";
    Category[Category["historia"] = 3] = "historia";
    Category[Category["infantiles"] = 4] = "infantiles";
})(Category || (Category = {}));
GetAllBooks();
ScopeTest();
var todosLosLibros = GetAllBooks();
todosLosLibros.push({ tittle: "Dead Souls", author: "Nikolai Gogol", avalible: true, categoria: Category.ficcion });
todosLosLibros.push({ tittle: "Eugene Onegin", author: "Alexander Pushkin", avalible: false, categoria: Category.poesia });
logFirstAvalible(todosLosLibros);
//GetBooksTittlesByCategory(Category.ficcion);
var librosDePoesia = GetBooksTittlesByCategory(Category.poesia);
logBookTittles(librosDePoesia);
var librosInfantiles = GetBooksTittlesByCategory(Category.infantiles);
var librosDeHistoria = GetBooksTittlesByCategory(Category.historia);
var librosDeFiccion = GetBooksTittlesByCategory(Category.ficcion);
var librosBiograficos = GetBooksTittlesByCategory(Category.biografia);
//logBookTittles(librosDePoesia);
//# sourceMappingURL=test.js.map