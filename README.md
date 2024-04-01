# Viajes Chile



![image](https://github.com/marelycarcamo/ViajesChile/assets/44790921/617b748d-9387-478d-a526-75d83ddd4001)



https://github.com/marelycarcamo/ViajesChile.git


## Descripción del Proyecto

"Viajes Chile es un proyecto educativo que ayuda a programadores emergentes a aprender y mejorar sus habilidades de desarrollo web. El sitio web ofrece una experiencia de aprendizaje interactiva con código bien documentado, ejemplos prácticos y características útiles como una barra de menú dinámica, desplazamiento suave y tooltips informativos."

## Calidad del Código

El código de Viajes Chile se ha desarrollado con un enfoque en la claridad, la eficiencia y la adherencia a los estándares de la industria. Se ha prestado especial atención a la semántica HTML, el diseño responsivo con CSS y la interactividad con JavaScript y jQuery.

## Proceso de Desarrollo

El desarrollo del sitio web se realizó en etapas, desde la conceptualización hasta el despliegue, asegurando un proceso iterativo que enfatiza la calidad y la funcionalidad.

## Características del Sitio

- ### **Barra de Menú Dinámica** <br>
Una barra de navegación que cambia de color al desplazarse, mejorando la experiencia del usuario y la accesibilidad del sitio.

Beneficios:
Mejora la experiencia de usuario al navegar por el sitio web.
Permite un acceso rápido a las diferentes secciones del sitio.
Aporta un toque de dinamismo y modernidad al diseño.

  ![image](https://github.com/marelycarcamo/ViajesChile/assets/44790921/dabbdf95-6a52-4f4d-9c76-3bd0b9c61c29)

![image](https://github.com/marelycarcamo/ViajesChile/assets/44790921/cddcf1da-bd1c-4438-a585-5ce825247354)


  ````

// Función para cambiar color del menú al descender
	$(window).scroll(function () {
		var navbar = $("#navbar");
		var scroll = $(window).scrollTop();
		if (scroll > 0) {
			// Cambia el color cuando se comienza a desplazar hacia abajo
			navbar.css("background-color", "rgba(0, 0, 0, 0.7)"); // Cambia el fondo a negro con 70% de opacidad
			navbar.addClass("scrolled"); // Agrega la clase 'scrolled'
		} else {
			navbar.css("background-color", "transparent"); // De lo contrario, hazlo transparente
			navbar.removeClass("scrolled"); // Elimina la clase 'scrolled'
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

.navbar a:hover {
	background-color: black; /* Cambia el fondo a negro al pasar el cursor */
	color: white; /* Cambia el color del texto a blanco al pasar el cursor */
}

.navbar.scrolled a:hover {
	background-color: rgba(0,234,255,0.943); /* Cambia el fondo al pasar el cursor cuando se ha desplazado hacia abajo */
	color: white; /* Mantiene el color del texto en blanco al pasar el cursor cuando se ha desplazado hacia abajo */
}

````




- ### **Smooth Scrolling**<br>
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
   Se activa el comportamiento de "scroll suave" para toda la página:

````
/* CSS - SMOOTH SCROOL */
html {
	scroll-behavior: smooth;
}
````



- ### **Tooltips Informativos**
Los Tooltips Informativos son pequeñas ventanas emergentes que aparecen al pasar el cursor sobre un elemento específico. Estos brindan información adicional de manera elegante y sin estorbar la visual general de la página.

![image](https://github.com/marelycarcamo/ViajesChile/assets/44790921/5d2fd3bf-91c1-4bf4-85fc-578d623ed229)


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
Se recorre cada elemento y se inicializa un nuevo objeto Bootstrap Tooltip para cada uno.

````
	// Tooltips
	const tooltipTrigger = $('[data-bs-toggle="tooltip"]');
	$.each(tooltipTrigger, function (index, tooltipTriggerEl) {
		new bootstrap.Tooltip(tooltipTriggerEl);
	});
````

Nota:

Este código asume que ya tienes incluídas las librerías de Bootstrap (CSS y Javascript) en tu proyecto.

<br>
  
- ### **Contenido Dinámico**: Creación de artículos, tarjetas destacadas e iconos de redes sociales mediante funciones JavaScript que fomentan la reutilización del código. <br>


## Funciones JavaScript Destacadas

### Función `crearTarjeta`
Función crearTarjeta: Esta función genera tarjetas con contenido de imagen y texto dinámicos, que se añaden a un contenedor específico en la página web.

### Función `crearIconosRRSS`
`crearIconosRRSS` crea iconos de redes sociales con enlaces correspondientes y los añade a un contenedor en el pie de página. El parámetro `i` se utiliza como índice para seleccionar el icono y el enlace adecuados de los arrays proporcionados.
1. **Reutilización de código:** Solo necesitas llamar a la función con el índice correspondiente al icono y al enlace que deseas crear.
2. **Separación de datos y lógica:** Esto hace que el código sea más fácil de leer y mantener. Si necesitas agregar una nueva red social, solo tienes que agregarla a las listas iconos y enlaces.
3. **Seguridad:** Usar rel="noopener noreferrer" en un enlace es como cerrar una puerta detrás de ti al salir. Ayuda a mantener tu navegación segura.
4. Accesibilidad: Al usar target="_blank", los enlaces se abrirán en una nueva pestaña o ventana. Esto permite a los usuarios volver a tu página fácilmente.


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

### Función `crearArticle`
La función `crearArticle` crea artículos dinámicamente con iconos y texto, alternando sus posiciones basándose en el índice proporcionado. El parámetro `i` determina qué icono mostrar en el artículo.


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


