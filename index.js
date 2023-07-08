function openForm(imageID) {
	var imageSrc = document.getElementById(imageID).src;
	var modalImage = document.getElementById('modalImage');
	var formImage = document.getElementById('formImage');
	var formModal = document.getElementById('formModal');

	modalImage.src = imageSrc;
	formImage.value = imageSrc;
	formModal.style.display = 'block';
}

function closeForm() {
	var formModal = document.getElementById('formModal');
	formModal.style.display = 'none';
}

document
	.getElementById('uploadForm')
	.addEventListener('submit', function (event) {
		event.preventDefault();

		var form = event.target;
		var formData = new FormData(form);

		// Perform AJAX request using Axios
		axios
			.post('./api/form', formData)
			.then(function (response) {
				closeForm();
			})
			.catch(function (error) {
				closeForm();
			});
	});
