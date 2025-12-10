# Pagina-web-LMSGI

## Descripción del proyecto y temática elegida
Mi proyecto consiste en la creación de una página web estilo Wikipedia, dedicada al universo de Pokémon, donde los usuarios podrán encontrar información diversa sobre el mundo Pokémon, incluyendo las distintas regiones existentes, noticias recientes, curiosidades y hasta un ranking de los Pokémon más famosos.

La temática del proyecto surge por el gusto personal de Pokémon y del vasto universo que la franquicia ofrece, lleno de información diversa y detallada. Esto permite que la página sea ampliable de manera ilimitada pudiendo incorporar nuevas secciones según sea necesario. 

## Estructura del sitio
Todas las páginas comparten una estructura base donde cada página incluye un header con el logo de la web y un menú de navegación que permite acceder rápidamente a las distintas secciones del proyecto como Inicio, Tienda o Blog, evitando que el usuario tenga que regresar constantemente a la página principal.

También incluyen un footer que proporciona información de contacto, enlaces a las redes sociales y los créditos proporcionando un cierre uniforme a cada sección del sitio.

Por último el contenido principal se organiza dentro del main donde el contenido se divide en al menos tres section cada una con información específica de esa página.
### 1. index
El contenido principal de esta página se encuentra dentro del (`<main>`) y se divide en tres (`<section>`), cada una con su respectivo encabezado (`<h2>`) que describe el tema tratado en esa sección.

- La primera (`<section>`) es una introducción a la página y se utiliza un (`<p>`) para una descripción completa de PokeWiki.
- La segunda (`<section>`) es un Ranking de Pokémon más famosos, donde se introduce una imagen con (`<img>`), un párrafo (`<p>`) como introducción a la sección y un(`<ol>`) (lista ordenada) donde irán los Pokémon numerados.
- La tercera (`<section>`) está destinada a curiosidades sobre Pokémon usando un (`<img>`) para apoyo visual, (`<p>`) para introducir la sección y un (`<ul>`) (lista desordenada) para presentar la información estructurada.

### 2. servicios
El contenido principal de esta página se encuentra dentro del (`<main>`) y se divide en cuatro (`<section>`), cada una con su respectivo encabezado (`<h2>`) que indica el tema de la sección.

- La primera (`<section>`) introduce la tienda de PokeWiki, un (`<img>`) para ilustrar la sección y dos párrafos (`<p>`) que presentan de manera general los productos disponibles.
- La segunda (`<section>`) está dedicada a las figuras oficiales donde además de un par de párrafos (`<p>`) explicativos, incluye dos (`<article>`) cada uno representando un producto específico. Cada (`<article>`) contiene un (`<h3>`) como título, un (`<img>`) para mostrar los productos, un (`<p>`) con la descripción, otro (`<p>`) Para marcar el precio y por último un formulario (`<form>`) con (`<label>`), (`<input>`) y (`<button>`) para permitir la compra.
- La tercera (`<section>`) se centra en las cartas Pokémon, siguiendo un esquema similar al de las figuras: dos párrafos (`<p>`) para la introducción y dos (`<article>`), en cada uno encontraremos (`<figure>`) y (`<figcaption>`) para la imagen y su descripción, (`<p>`) para la información adicional y (`<form>`) para la compra.
- La cuarta (`<section>`) presenta los servicios digitales, contiene un (`<article>`) que incluye un (`<h2>`) para el título del servicio, un (`<img>`), un párrafo (`<p>`) explicando el servicio, una lista (`<ul>`) con los beneficios y un formulario(`<form>`) con (`<input>`) y (`<button>`) para suscribirse.

### 3. about
El contenido principal de esta página se encuentra dentro del (`<main>`) y se divide en tres (`<section>`), cada una con su respectivo encabezado (`<h2>`) que indica el tema de la sección.

- La primera (`<section>`) incluye una imagen(`<img>`) dentro de un(`<figure>`) y acompañado con un (`<figurecaption>`) para dar contexto de la imagen, también incluye un párrafo (`<p>`) dando la descripción de la página.
- La segunda (`<section>`) presenta al creador y al equipo del proyecto, contiene un párrafo (`<p>`) explicando el título y un subtítulo (`<h3>`) para introducir los miembros acompañados de una imagen con (`<figure>`) y (`<figcaption>`).
- La tercera (`<section>`) incluye los valores del equipo introducidos en una lista no ordenada (`<ul>`) y dentro sus respectivos (`<li>`).

### 4. blog
El contenido principal de esta página se encuentra dentro del (`<main>`) y se divide en tres (`<section>`), cada una con su respectivo encabezado (`<h2>`) que indica el tema de la sección.

- La primera (`<section>`) son las noticias, en esta tendremos dos noticias, cada una en un (`<article>`) donde cada uno incluira su respectivo subtítulo (`<h3>`), un (`<img>`) con (`<figure>`) y (`<figcaption>`) para contexto de la imagen, luego muchos párrafos con información de la noticia y por último un link para comprar un juego (`<a href=>`).
- La segunda (`<section>`) es el blog, contiene noticias del blog cada una representada por un (`<article>`), hay dos, pero tienen la misma estructura: un párrafo (`<p>`) con la fecha, seguido de una imagen y otro párrafo (`<p>`) con una pequeña descripcion y un link insertado con (`<a href>`) donde podras leer el blog completo.
  - Además, se añade una sección de comentarios, introducido por un (`<h3>`) que lleva un formulario (`<form>`), (`<label>`), (`<input>`), (`<textarea>`) y (`<button>`) donde puedes introducir tu nombre y un comentario añadiendo un required para que sea obligatorio los dos campos.
- La tercera (`<section>`) son eventos, incluye una imagen con figcaption para contexto, y divide muchas fechas con subtitulos (`<h3>`) y dentro de cada uno lleva una lista desordenada (`<ul>`) con sus respectivos (`<li>`) marcando las distintas fechas en la que se harán los eventos.

### 5. contacto
El contenido principal de esta página se encuentra dentro del (`<main>`) y se divide en tres (`<section>`), cada una con su respectivo encabezado (`<h2>`) que indica el tema de la sección.

- La primera (`<section>`) es la introducción a la página, tiene un (`<img>`) y dos párrafos (`<p>`) con la descripción. 
- La segunda (`<section>`) está dedicada al formulario para reportar un problema definido con (`<form>`) donde dentro se divide de tres bloques estructurados con (`<fieldset>`) y (`<legend>`).
  - El primer bloque recopila la información del usuario. El segundo los detalles del reporte utilizando (`<label>`), (`<input>`), (`<select>`), (`<textarea>`) para distintos tipos de datos.
  - El tercer bloque incorpora un campo de confirmación (`<input type="checkbox">`), seguido de un boton de envio.
- La tercera (`<section>`) son las preguntas frecuentes donde cada pregunta y cada respuesta tiene su (`<article>`) con un encabezado (`<h3>`) para la pregunta y un párrafo (`<p>`) para la respuesta.

### 6. regiones
El contenido principal de esta página se encuentra dentro del (`<main>`) y se divide en tres (`<section>`), cada una con su respectivo encabezado (`<h2>`) que indica el tema de la sección.

- La primera (`<section>`) es la introducción a las regiones e introduce un par de párrafo (`<p>`) con contexto sobre ellas.
- La segunda (`<section>`) es la más extensa, ya que aquí se encuentran las distintas regiones. Empieza con un párrafo (`<p>`) dando rapido contexto, y después dividimos cada región dentro de un (`<article>`) y cada uno contiene:
  - un subtítulo (`<h3>`) con el nombre de la región, un (`<img>`) con su respectivo (`<figcaption>`), otro subtítulo secundario (`<h4>`) para información secundaria el cual va seguido de muchos párrafos (`<p>`) con la distinta información de la región.
- La tercera (`<section>`) trata sobre otras regiones, estructuralmente es muy parecida a la segunda. Contiene distintos (`<article>`) con un subtítulo (`<h3>`), una (`<img>`) con su (`<figcaption>`) para contexto y un párrafo (`<p>`) explicando el artículo. 

## Decisiones de diseño estructural
El diseño estructural de la página se ha basado en el uso de etiquetas semánticas de HTML5 para lograr una organización clara y coherente del contenido. Se ha priorizado la jerarquía de la información y la separación por bloques temáticos, de manera que cada parte del sitio tenga una función específica y fácilmente identificable.

Dentro del (`<main>`), decidi dividir el contenido en varias secciones (`<section>`) para agrupar los distintos temas relacionados con Pokémon. Cada sección representa un bloque de información completo e independiente.

El uso de (`<figure>`) y (`<figcaption>`) se consideró esencial para mantener la relación semántica entre las imágenes y sus descripciones, garantizando una presentación visualmente ordenada, y la jerarquia de encabezados (`<h1, h2, h3>`) sigue un orden lógico ayudando a la jerarquia de la información.

## Decisiones de diseño visual
- Se utilizan variables CSS (:root) para definir los colores principales, secundarios y de fondo, garantizando consistencia y facilidad de mantenimiento.
- Menú hamburguesa para mejorar la navegación en dispositivos móviles.
- Diseño responsivo mediante flexbox y media queries, asegurando que la página se vea correctamente en móviles y escritorio.
- Líneas decorativas sobre algunos títulos para separar visualmente secciones.
- Sombras y bordes redondeados en tarjetas y botones para mejorar la estética y percepción de profundidad.
- Modo oscuro automático basado en las preferencias del sistema, utilizando únicamente CSS mediante la media query prefers-color-scheme.

## Paleta de colores
La paleta de colores se basa en el logo de la página, con colores vivos y alegres, acorde con la temática Pokémon.

### Modo claro
- Fondo principal: un blanco ligeramente cálido.
- Azul oscuro: para textos principales y fondo del footer (buen contraste con el fondo).
- Naranja: para párrafos y detalles secundarios.
- Azul claro: para títulos y algunos párrafos.
- Rojo: para acentos y detalles importantes.
- Color claro: para fondos de secciones y elementos destacados.

### Modo oscuro
- Tonos más fríos y desaturados para reducir fatiga visual y mantener buen contraste.

## Tipografías
- **Science Gothic:** fuente principal, usada en encabezados y títulos.
- **Nunito Sans:** fuente secundaria, muy legible para párrafos y textos largos.
- **Chokokutai:** solo para elementos decorativos, dando un toque temático.

## Validación W3C Validator
He validado todas las páginas de mi proyecto utilizando el W3C Validator para asegurarme de que cumplen con los estándares web. A continuación, se presentan los enlaces a los resultados de la validación para cada página:

### 1. HTML
- [Validar Index](https://validator.w3.org/nu/?doc=https%3A%2F%2Fftellol.github.io%2FPagina-web-LMSGI%2Findex.html)
- [Validar Servicios](https://validator.w3.org/nu/?doc=https%3A%2F%2Fftellol.github.io%2FPagina-web-LMSGI%2Fservicios.html)
- [Validar About](https://validator.w3.org/nu/?doc=https%3A%2F%2Fftellol.github.io%2FPagina-web-LMSGI%2Fabout.html)
- [Validar Blog](https://validator.w3.org/nu/?doc=https%3A%2F%2Fftellol.github.io%2FPagina-web-LMSGI%2Fblog.html)
- [Validar Contacto](https://validator.w3.org/nu/?doc=https%3A%2F%2Fftellol.github.io%2FPagina-web-LMSGI%2Fcontacto.html)
- [Validar Regiones](https://validator.w3.org/nu/?doc=https%3A%2F%2Fftellol.github.io%2FPagina-web-LMSGI%2Fregiones.html)

### 2. CSS
- [Validar CSS](https://jigsaw.w3.org/css-validator/validator?uri=https://ftellol.github.io/Pagina-web-LMSGI/assets/css/style.css)
