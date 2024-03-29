/**
 * The function "crearTarjeta" generates a card element with dynamic image and text content and appends
 * it to a specified container on the webpage.
 * @param i - The parameter `i` in the `crearTarjeta` function is used to dynamically generate the
 * image URL for each card based on the value of `i`. This allows the function to create different
 * cards with different images by appending the value of `i` to the base URL for the images.
 */
function crearCard(i) {
	let urlBase = "assets/img/card";

	let img = urlBase + i + ".jpg";

	let new_card = `<div class="col-sm-12 col-md-6 col-xl-3">
						<div class="card shadow mb-md-5 mb-sm-5" style="width: 18rem">
							<img src="${img}" class="card-img-top" alt="..." />
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
}




/**
 * The function `crearIconosRRSS` creates social media icons with corresponding links and appends them
 * to a specified container in the footer.
 * @param i - The parameter `i` in the `crearIconosRRSS` function is used as an index to select the
 * corresponding icon and link from the `iconos` and `enlaces` arrays. It helps in dynamically creating
 * and adding the icon with its link to the icons box in the footer based
 */
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





/**
 * The function `crearArticle` dynamically creates articles with icons and text, alternating their
 * positions based on the index provided.
 * @param i - The `crearArticle` function you provided creates an article element with an icon and some
 * text based on the value of the parameter `i`. The `i` parameter is used to determine which icon to
 * display in the article.
 */
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







//   **************** BLOQUE PRINCIPAL  ***********************


$(document).ready(function () {

	// SECCION QUIENES SOMOS - Creación de artículos
	for (let i = 1; i < 4; i++) {
		crearArticle(i);
	}

	// SECCION DESTACADOS - Creación de tarjetas
	for (let i = 1; i <= 4; i++) {
		crearCard(i);
	}


	// FOOTER - ICONOS - Crear los iconos con enlaces a rrss
	for (let i = 0; i <= 5; i++) {
		crearIconosFooter(i);
	}

	/* The code `$('[data-toggle="tooltip"]').tooltip();` is setting up a tooltip functionality for
	elements that have the attribute `data-toggle="tooltip"`. This means that when an element with this
	specific attribute is hovered over, a tooltip will be displayed with additional information or a
	message related to that element. This is a common feature used in web development to provide users
	with more context or details about certain elements on a webpage. */
	$('[data-toggle="tooltip"]').tooltip();

	/* The code `$("#enviarFormulario").click(function () { alert("El formulario fue enviado
correctamente"); });` is setting up a click event listener on an element with the ID
"enviarFormulario". When that element is clicked, it will trigger an alert message saying "El
formulario fue enviado correctamente", which means "The form was submitted successfully" in Spanish. */
	$("#enviarFormulario").click(function () {
		alert("El formulario fue enviado correctamente");
	});
});
