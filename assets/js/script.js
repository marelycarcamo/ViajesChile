function crearTarjeta(i) {
	let urlBase = "assets/img/card";

	let img = urlBase + i + ".jpg";

	let tarjeta = `<div class="col-sm-12 col-md-6 col-xl-3">
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

	$("#tarjetas-destacados").append(tarjeta);
}

function crearIconosRRSS(i) {
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




$(document).ready(function () {
	// SECCION DESTACADOS - Creación de tarjetas

	for (let i = 1; i <= 4; i++) {
		crearTarjeta(i);
	}

	//Texto para sección Quienes Somos
	var loremIpsum =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Es fugiat ea maxime deserunt cumque recusandae facere animi delectus veniam, vero, illum rerum omnis incidunt repellendus neque eveniet quisquam earum dolorem excepturi non, nemo blanditiis nihil dolore corporis! Laboriosam esse, aut, maiores culpa corrupti iste eius laborum et est corporis sint, nihil ullam consequuntur rem maxime cupiditate expedita illo fugiat officiis aliquam exercitationem nemo. Animi rerum consectetur est corporis nobis, fuga debitis modi mollitia aperiam atque inventore doloribus quo enim, facere fugiat numquam! Vitae voluptatibus illo totam hic beatae distinctio quae dolorum modi neque, voluptatum similique rerum fugiat excepturi! Aut, minus.";
	$(".p-text").text(loremIpsum);

	// FOOTER - ICONOS - Crear los iconos con enlaces a rrss

	for (let i = 0; i <= 5; i++) {
		crearIconosRRSS(i);
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
