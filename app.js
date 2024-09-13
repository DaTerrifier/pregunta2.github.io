let comentarios = [];

// función para agregar un comentario al array y mostrar en la tabla
function agregarComentario() {
    // obtener los valores del formulario
    let nombre = document.getElementById('nombre').value;
    let comentarioTexto = document.getElementById('comentario').value;

    // agregar el comentario al array
    comentarios.push({
        nombre: nombre,
        comentario: comentarioTexto,
    });

    // mostrar los comentarios en la tabla
    mostrarComentario();

    // limpiar el formulario
    document.getElementById('formulario').reset();
}

// función para mostrar los comentarios en la tabla
function mostrarComentario() {
    let tabla = document.getElementById('tablaComentarios').getElementsByTagName('tbody')[0];
    tabla.innerHTML = ''; // limpiar la tabla antes de actualizarla

    comentarios.forEach((comentario) => {
        let fila = document.createElement('tr');

        // crear las celdas para cada dato
        fila.innerHTML = `
            <td>${comentario.nombre}</td>
            <td>${comentario.comentario}</td>
        `;

        tabla.appendChild(fila);
    });
}
