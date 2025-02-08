# Desafío de Lógica de Programación: Amigo Secreto

## Descripción

Este proyecto tiene como objetivo fortalecer las habilidades en lógica de programación mediante el desarrollo de una aplicación simple para realizar un sorteo de "Amigo Secreto". 

El proyecto permite a los usuarios agregar nombres de amigos, ver la lista y realizar un sorteo para saber quién es su amigo secreto todo esto mediante JS.

## Funcionalidades

- **Agregar amigos**: Permite al usuario agregar nombres a una lista.
- **Limpiar lista**: Ofrece la opción de limpiar la lista de amigos.
- **Sorteo de Amigo Secreto**: Al hacer clic en el botón de sorteo, se selecciona un amigo secreto de forma aleatoria de la lista.

## Estructura del código

### 1. `agregarLista(identificador, valor)`
Esta función agrega un nuevo elemento `li` a un `ul` especificado por su identificador.

- **Parámetros**:
  - `identificador`: El identificador del `ul` donde se agregará el `li`.
  - `valor`: El texto que se añadirá como contenido del `li`.

### 2. `limpiarLista(identificador)`
Limpia el contenido de una lista específica, eliminando todos los elementos `li` del `ul`.

- **Parámetro**:
  - `identificador`: El identificador del `ul` cuyo contenido se limpiará.

### 3. `agregarAmigo()`
Permite al usuario agregar un amigo a la lista de amigos. Si el campo de entrada está vacío, se muestra una alerta pidiendo que se ingrese un nombre. 
Después de agregar el nombre, la lista se actualiza y se muestra el nuevo amigo agregado.

### 4. `sortearAmigo()`
Realiza un sorteo aleatorio entre los amigos de la lista, eligiendo uno de ellos como "Amigo Secreto". 
Si la lista está vacía, se muestra una alerta indicando que no hay amigos para sortear.

## Tecnologías Utilizadas

- **JavaScript**: Lógica de programación para manejar la interacción de agregar amigos, limpiar la lista y realizar el sorteo.

## Instrucciones de Uso

1. Clona este repositorio o descarga el código en tu máquina.
2. Abre el archivo HTML en tu navegador.
3. Ingresa el nombre de un amigo en el campo de texto y haz clic en "Agregar" para agregarlo a la lista (pueden ser varios).
4. Haz clic en "Sortear" para seleccionar un amigo secreto de manera aleatoria.



    Clona este repositorio o descarga el código en tu máquina.
    Abre el archivo HTML en tu navegador.
    Ingresa el nombre de un amigo en el campo de texto y haz clic en "Agregar" para agregarlo a la lista.
    Haz clic en "Sortear" para seleccionar un amigo secreto de manera aleatoria.
    Si lo deseas, puedes limpiar la lista en cualquier momento.
