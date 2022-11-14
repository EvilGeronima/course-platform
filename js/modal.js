const button = document.getElementById('modalSign')

button?.addEventListener('click'
	, () => {
		const modal = document.querySelector('.modal')
		if (modal.style.display === 'none') {
			modal.style.display = 'flex'
		} else {
			modal.style.display = 'none'
		}

	})

const buttonScroll = document.getElementById('scroll')


buttonScroll?.addEventListener('click'
	, () => {
		if (scrollY > 0) {
			window.scroll({
				top: 0,
				behavior: 'smooth'
			})
		}

	})

