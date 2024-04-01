# Viajes Chile 


![image](https://github.com/marelycarcamo/ViajesChile/assets/44790921/617b748d-9387-478d-a526-75d83ddd4001)



https://github.com/marelycarcamo/ViajesChile.git

## CONTENIDO

- [Viajes Chile](#Viajes-Chile)
  - [Descripción del Proyecto](#Descripción-del-Proyecto)
  - [Calidad del Código](#Calidad-del-Código)
  - [Proceso de Desarrollo](#Proceso-de-Desarrollo)
  - [Características del Sitio](#Características-del-Sitio)
    - [**Barra de Menú Dinámica**](#Barra-de-Menú-Dinámica)
    - [**Smooth Scrolling**](#Smooth-Scrolling)
    - [**Tooltips Informativos**](#Tooltips-Informativos)
    - [**Contenido Dinámico**](#Contenido-Dinámico)
  - [Funciones JavaScript Destacadas](#Funciones-JavaScript-Destacadas)
    - [`crearCard(i)`](#crearCardi)
    - [`crearArticle(i)`](#crearArticlei)
    - [Función `crearIconosFooter(i)`](#Función-crearIconosFooteri)
    - [Propósito de las Funciones en la Programación](#Propósito-de-las-Funciones-en-la-Programación)
  - [Utilidad Educativa](#Utilidad-Educativa)
  - [Tecnologías Utilizadas](#Tecnologías-Utilizadas)
  - [Instalación y Uso](#Instalación-y-Uso)
  - [Contribución](#Contribución)
  - [Licencia](#Licencia)
  - [Viajes Chile © 2024. Proyecto educativo de código abierto.](#Viajes-Chile-©-2024-Proyecto-educativo-de-código-abierto)


## Descripción del Proyecto

"Viajes Chile es un proyecto educativo que ayuda a programadores emergentes a aprender y mejorar sus habilidades de desarrollo web. El sitio web ofrece una experiencia de aprendizaje interactiva con código bien documentado, ejemplos prácticos y características útiles como una barra de menú dinámica, desplazamiento suave y tooltips informativos."

## Calidad del Código

El código de Viajes Chile se ha desarrollado con un enfoque en la claridad, la eficiencia y la adherencia a los estándares de la industria. Se ha prestado especial atención a la semántica HTML, el diseño responsivo con CSS y la interactividad con JavaScript y jQuery.

## Proceso de Desarrollo

El desarrollo del sitio web se realizó en etapas, desde la conceptualización hasta el despliegue, asegurando un proceso iterativo que enfatiza la calidad y la funcionalidad.

## Características del Sitio

### **Barra de Menú Dinámica**
<br>
Una barra de navegación que cambia de color al desplazarse, mejorando la experiencia del usuario y la accesibilidad del sitio.

Beneficios:
Mejora la experiencia de usuario al navegar por el sitio web.
Permite un acceso rápido a las diferentes secciones del sitio.
Aporta un toque de dinamismo y modernidad al diseño.

imagen-menu-1

  ![image](https://github.com/marelycarcamo/ViajesChile/assets/44790921/dabbdf95-6a52-4f4d-9c76-3bd0b9c61c29)

imagen-menu-2

![image](https://github.com/marelycarcamo/ViajesChile/assets/44790921/cddcf1da-bd1c-4438-a585-5ce825247354)


  ````

// Función para cambiar color del menú al descender

	// Almacena el elemento HTML de la barra de menú
	const $navbar = $(".navbar");

	// Función para cambiar el color del menú al desplazarse
	$(window).scroll(function () {
		const scroll = $(window).scrollTop();

		if (scroll > 0) {
			// Cambia el color de fondo y agrega la clase 'scrolled'
			$navbar.css("background-color", "rgba(0, 0, 0, 0.7)");
			$navbar.addClass("scrolled");
		} else {
			// Restablece el color de fondo y elimina la clase 'scrolled'
			$navbar.css("background-color", "transparent");
			$navbar.removeClass("scrolled");
		}
	});

  ````

En el CSS:
Atención a la clase 'scrolled' esta asocia el cambio de color del :hover con el desplazamiento del menú.
````

.navbar a {
	color: white; /* Color del texto del menú */
	transition: background-color 0.5s ease; /* Transición suave */
}
````

Ver imagen-menu-1
````

.navbar a:hover {
	background-color: black; /* Cambia el fondo a negro al pasar el cursor */
	color: white; /* Cambia el color del texto a blanco al pasar el cursor */
}
````
Ver imagen-menu-2
````
.navbar.scrolled a:hover {
	background-color: rgba(0,234,255,0.943); /* Cambia el fondo al pasar el cursor cuando se ha desplazado hacia abajo */
	color: white; /* Mantiene el color del texto en blanco al pasar el cursor cuando se ha desplazado hacia abajo */
}
````

### **Smooth Scrolling**
<br>
Crea una experiencia más natural y fluida al navegar por el sitio. Elimina los saltos bruscos al navegar entre diferentes secciones.

En el HTML: <br>
1. Asignamos un id a la sección formulario: ``<section id="form-section">``
2. En la barra de menú, se agrega un enlace a la sección Formulario ``href='#form-section'``
````
<li class="nav-item">
	<a class="nav-link text-white" href="#form-section">Contacto</a>
</li>
````
En el CSS: <br>
   Se activa el comportamiento de "scroll suave" para toda la página:<br>

````
/* CSS - SMOOTH SCROOL */
html {
	scroll-behavior: smooth;
}
````
<br>


### **Tooltips Informativos**
Los Tooltips Informativos son pequeñas ventanas emergentes que aparecen al pasar el cursor sobre un elemento específico. Estos brindan información adicional de manera elegante y sin estorbar la visual general de la página.
<br>

![image](https://github.com/marelycarcamo/ViajesChile/assets/44790921/83924095-2633-4895-b92e-877e2f904cf4)

<br>


![image](https://github.com/marelycarcamo/ViajesChile/assets/44790921/f7dbfc54-3d20-4823-8b47-08adb5c76a42)




Implementación Técnica

En HTML:

Se agrega la clase form-control al elemento textarea para darle estilo básico.<br>
Se utilizan atributos de data personalizados de Bootstrap para configurar el tooltip: <br>
	- `data-bs-custom-class="custom-tooltip"`: Define una clase CSS personalizada para aplicar estilos específicos al tooltip. <br>
	- `data-bs-toggle="tooltip"`: Habilita la funcionalidad del tooltip. <br>
	- `data-bs-placement="bottom"`: Indica la posición del tooltip (en este caso, debajo del elemento). <br>
	- `title="Consulte por nuestras promociones y descuentos"`: Define el texto que se mostrará en el tooltip.<br>

````
<textarea class="form-control"
		 data-bs-custom-class="custom-tooltip"
		 data-bs-toggle="tooltip"
		 data-bs-placement="bottom"
		title="Consulte por nuestras promociones y descuentos"
		></textarea>
````

En CSS:

Se crea una clase CSS custom-tooltip para personalizar la apariencia del tooltip.
Se utilizan variables de Bootstrap para definir el color de fondo (--bs-tooltip-bg) y el color del texto (--bs-tooltip-color) del tooltip.

````
/* aplica colores a tootip del formulario  */
.custom-tooltip {
	--bs-tooltip-bg: rgba(0, 234, 255, 0.943);
	--bs-tooltip-color: white;
}
````

En Javascript:

Se utiliza librería de Javascript de Bootstrap para inicializar los tooltips.
Se seleccionan todos los elementos que tengan el atributo data-bs-toggle="tooltip" utilizando jQuery.
Se recorre cada elemento y se inicializa un nuevo objeto Bootstrap Tooltip para cada uno. <br>

````
	// Tooltips
	const tooltipTrigger = $('[data-bs-toggle="tooltip"]');
	$.each(tooltipTrigger, function (index, tooltipTriggerEl) {
		new bootstrap.Tooltip(tooltipTriggerEl);
	});
````
<br>
Nota:

Este código asume que ya tienes incluídas las librerías de Bootstrap (CSS y Javascript) en tu proyecto.

<br>
  
### **Contenido Dinámico**
<br>
  Creación de artículos, tarjetas destacadas e iconos de redes sociales mediante funciones JavaScript que fomentan la reutilización del código. <br>
  ![image](https://github.com/marelycarcamo/ViajesChile/assets/44790921/9b20cb10-dfcb-49e7-9448-6b5d772e9e79)
<br>

## Funciones JavaScript Destacadas


### `crearCard(i)`
Esta función genera una nueva tarjeta con una imagen y texto predeterminado. Utiliza una base URL para las imágenes y las numera secuencialmente. La tarjeta se compone de una imagen y un cuerpo con un título y un texto de relleno. Finalmente, se añade al contenedor `#tarjetas-destacados`.

### `crearArticle(i)`
`crearArticle` crea un nuevo artículo que incluye un ícono y un párrafo de texto. Los íconos y el texto se alternan en posición dependiendo de si el índice `i` es par o impar. El artículo completo se agrega al contenedor `#article-box`.

### Función `crearIconosFooter(i)`
La función `crearIconosFooter` se encarga de agregar íconos de redes sociales al pie de página. Cada ícono está vinculado a su respectiva red social y se inserta dentro del contenedor `#icons-box`.

![image](https://github.com/marelycarcamo/ViajesChile/assets/44790921/79e762d2-417b-4589-b7f9-87c75c2390ae) <br>






````
function crearIconosFooter(i) {
	// Lista de íconos de redes sociales
	let iconos = [
		"fa-brands fa-linkedin",
		"fa-brands fa-github",
		"fa-brands fa-twitter",
		"fa-brands fa-facebook",
	];

	// Lista de enlaces a las redes sociales
	let enlaces = [
		"https://www.linkedin.com",
		"https://www.github.com",
		"https://www.twitter.com",
		"https://www.facebook.com",
	];

	// Creando el icono con sus respectivos enlaces.

	let element = `<a	
		class="text-white"
		href="${enlaces[i]}"
		target="_blank"
		rel="noopener noreferrer"
		><i class="${iconos[i]}"></i
	></a>`;

	// Agregando el icono a la caja de iconos del footer.
	$("#icons-box").append(element);
}

````
````
// SECCION PRINCIPAL - Crear los iconos con enlaces a rrss
	for (let i = 0; i <= 5; i++) {
		crearIconosFooter(i);
	}
````



### Propósito de las Funciones en la Programación

- **Modularidad**: Cada función realiza una tarea específica y bien definida. Esto hace que el código sea más fácil de entender y mantener. Por ejemplo, `crearCard` se enfoca exclusivamente en la creación de tarjetas, lo que permite que otros desarrolladores comprendan rápidamente su propósito.

- **Reutilización del Código**: Las funciones están diseñadas para ser reutilizables, lo que significa que pueden ser invocadas con diferentes valores para generar nuevos elementos sin necesidad de duplicar código. Esto no solo ahorra tiempo sino que también reduce la posibilidad de errores.

- **Claridad**: Al separar el código en funciones, se logra un nivel de abstracción que ayuda a otros programadores a entender el flujo del programa sin tener que sumergirse en los detalles de implementación.

- **Buenas Prácticas**: Estas funciones siguen buenas prácticas como la nomenclatura consistente y el uso de plantillas literales para la inserción de variables, lo que facilita la lectura y el manejo del código.

- **Aporte a Programadores Iniciales**: Para un programador que está empezando, estudiar estas funciones puede ayudar a comprender cómo estructurar el código de manera eficiente y cómo manipular el DOM usando jQuery. Además, puede servir como un buen ejemplo de cómo documentar el código y escribir comentarios explicativos.



## Utilidad Educativa

Este proyecto es una excelente herramienta para nuevos programadores por varias razones:

- **Código Comentado**: Cada función y estilo viene acompañado de comentarios que explican su propósito y funcionamiento.
- **Estructura Lógica**: El código está organizado de manera intuitiva, facilitando el seguimiento y la comprensión del flujo de trabajo.
- **Prácticas de Desarrollo**: Se demuestran prácticas de desarrollo modernas, como la programación responsiva y el uso de librerías populares como jQuery y Bootstrap. Además, se destacan las buenas prácticas de codificación, asegurando que el código no solo funcione bien, sino que también sea un ejemplo de cómo escribir código limpio y mantenible. El proyecto muestra buenas prácticas de desarrollo, como la modularidad y la reutilización de funciones, que son aspectos importantes en la programación.

## Tecnologías Utilizadas

- **Bootstrap 5.3**: Para componentes estilizados y responsivos.
- **Google Font Roboto**: Para una tipografía clara y moderna.
- **Iconos Awesome 6.5.1**: Para iconografía elegante y coherente.
- **jQuery 3.7.1**: Para funcionalidades JavaScript simplificadas y efectos visuales.
- **Poppers 2.11**: Para tooltips y posicionamiento de elementos emergentes.

## Instalación y Uso

1. Clona el repositorio: ``git clone https://github.com/marelycarcamo/ViajesChile.git``. <br>
2. Accede a la carpeta del proyecto: ``cd viajeschile``. <br>
3. Abre el archivo ``index.html`` en tu navegador.

## Contribución

¿Te gustaría contribuir a mi proyecto Viajes Chile? <br>
¡Eres bienvenido! Puedes reportar errores, enviar nuevas funcionalidades o mejorar la documentación.

## Licencia 

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para detalles.


## Viajes Chile © 2024. Proyecto educativo de código abierto.
<a id="Viajes-Chile-©-2024-Proyecto-educativo-de-código-abierto"> </a>



