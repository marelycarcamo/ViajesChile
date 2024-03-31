# Viajes Chile

## Descripción del Proyecto

"Viajes Chile es un proyecto educativo que ayuda a programadores emergentes a aprender y mejorar sus habilidades de desarrollo web. El sitio web ofrece una experiencia de aprendizaje interactiva con código bien documentado, ejemplos prácticos y características útiles como una barra de menú dinámica, desplazamiento suave y tooltips informativos."

## Calidad del Código

El código de Viajes Chile se ha desarrollado con un enfoque en la claridad, la eficiencia y la adherencia a los estándares de la industria. Se ha prestado especial atención a la semántica HTML, el diseño responsivo con CSS y la interactividad con JavaScript y jQuery.

## Proceso de Desarrollo

El desarrollo del sitio web se realizó en etapas, desde la conceptualización hasta el despliegue, asegurando un proceso iterativo que enfatiza la calidad y la funcionalidad.

## Características del Sitio

- **Barra de Menú Dinámica**: Una barra de navegación que cambia de color al desplazarse, mejorando la experiencia del usuario y la accesibilidad del sitio.
- **Smooth Scrolling**: Crea una experiencia más natural y fluida al navegar por el sitio.
- **Tooltips Informativos**: Proporcionan información adicional de manera elegante y eficiente.
- **Contenido Dinámico**: Creación de artículos, tarjetas destacadas e iconos de redes sociales mediante funciones JavaScript que fomentan la reutilización del código.

## Funciones JavaScript Destacadas

### Función `crearTarjeta`
Función crearTarjeta: Esta función genera tarjetas con contenido de imagen y texto dinámicos, que se añaden a un contenedor específico en la página web.
````
function crearCard(i) {
	let urlBase = "assets/img/card";

	let img = urlBase + i + ".jpg";

	let new_card = `<div class="col-sm-12 col-md-6 col-xl-3 d-flex flex-column align-items-center">
						<div class="card shadow mb-md-5 mb-sm-5" style="width: 18rem">
							<img src="${img}" class="card-img-top" alt="" />
							<div class="card-body bg-viajes text-white">
								<h5>LOREM IPSUM</h5>
								<p class="card-text">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Velit vero hic alias, voluptates eligendi repellat quo
									provident animi doloribus nobis!
								</p>
							</div>
						</div>
					</div>`;

	$("#tarjetas-destacados").append(new_card);

````

````
  
  	// SECCION PRINCIPAL - Creación de tarjetas
	for (let i = 1; i <= 4; i++) {
		crearCard(i);
	}
````

### Función `crearIconosRRSS`
`crearIconosRRSS` crea iconos de redes sociales con enlaces correspondientes y los añade a un contenedor en el pie de página. El parámetro `i` se utiliza como índice para seleccionar el icono y el enlace adecuados de los arrays proporcionados.

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
````

function crearArticle(i) {
	let iconos = [
		"fa-solid fa-plane",
		"fa-solid fa-mountain",
		"fa-solid fa-route",
	];

	let div_iconos = $(`<div div-icons class="w-100 bg-viajes text-center">
						<i class="${iconos[i - 1]}"></i>
					</div>`);

	let p_texto = $(
		`<p class="p-text px-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit molestias facilis impedit officiis molestiae repellendus, aliquid amet. Voluptate, veniam dolores. At delectus nostrum aliquam ex! Ipsum, alias sequi odit et eveniet incidunt veniam dignissimos excepturi quia ullam in nesciunt accusamus ipsam dicta reiciendis voluptatibus optio quae, maxime ad vel placeat? Illo, sed amet fuga nesciunt pariatur quis perferendis, commodi voluptate eum necessitatibus ipsam sit veritatis nisi ducimus modi, praesentium nam. Incidunt temporibus fugit esse, ratione deleniti quas doloribus molestias soluta.</p> `
	);

	var primero = div_iconos;
	var segundo = p_texto;

	if (i % 2 == 0) {
		primero = p_texto;
		segundo = div_iconos;
	}

	let articulo = $(`
		<article class="col-4">
		</article>`);

	articulo.append(primero);
	articulo.append(segundo);

	$("#article-box").append(articulo);
}
````
````
function crearArticle(i) {
	let iconos = [
		"fa-solid fa-plane",
		"fa-solid fa-mountain",
		"fa-solid fa-route",
	];

	let div_iconos = $(`<div div-icons class="w-100 bg-viajes text-center">
						<i class="${iconos[i - 1]}"></i>
					</div>`);

	let p_texto = $(
		`<p class="p-text px-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit molestias facilis impedit officiis molestiae repellendus, aliquid amet. Voluptate, veniam dolores. At delectus nostrum aliquam ex! Ipsum, alias sequi odit et eveniet incidunt veniam dignissimos excepturi quia ullam in nesciunt accusamus ipsam dicta reiciendis voluptatibus optio quae, maxime ad vel placeat? Illo, sed amet fuga nesciunt pariatur quis perferendis, commodi voluptate eum necessitatibus ipsam sit veritatis nisi ducimus modi, praesentium nam. Incidunt temporibus fugit esse, ratione deleniti quas doloribus molestias soluta.</p> `
	);

	var primero = div_iconos;
	var segundo = p_texto;

	if (i % 2 == 0) {
		primero = p_texto;
		segundo = div_iconos;
	}

	let articulo = $(`
		<article class="col-4">
		</article>`);

	articulo.append(primero);
	articulo.append(segundo);

	$("#article-box").append(articulo);
}


````
````
	// SECCION PRINCIPAL - Creación de artículos
	for (let i = 1; i < 4; i++) {
		crearArticle(i);
	}
````


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


