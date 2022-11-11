const button = document.getElementById('modalSign')
button?.addEventListener('click'
	, () => {
		const modal = document.querySelector('.modal')
		console.log(modal.style.display);
		if (modal.style.display === 'none') {
			modal.style.display = 'flex'
		} else {
			modal.style.display = 'none'
		}

	})

