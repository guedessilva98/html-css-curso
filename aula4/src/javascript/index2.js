var listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"];
//                  0            1            3

//adicionando novos elementos
listaFilmes.push("Harry Potter 2");

listaFilmes.push("Harry Potter 3");

listaFilmes.push("Harry Potter 4");

listaFilmes.push("Harry Potter 5");

// experimente o h1, strong, 
//document.write("<p>" + listaFilmes[0] + "</p>");
//document.write("<p>" + listaFilmes[1] + "</p>");
//document.write("<p>" + listaFilmes[2] + "</p>");
//document.write("<p>" + listaFilmes[3] + "</p>");

for (var indice = 0; indice < listaFilmes.length; indice++) {
    document.write("<p>" + listaFilmes[indice] + "</p>");

}