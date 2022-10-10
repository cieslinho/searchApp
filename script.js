const input = document.querySelector('.search')
const li = document.querySelectorAll('li')

const inputCheck = e => {
	const text = e.target.value.toLowerCase()

	console.log(text)
	li.forEach(singleLi => {
		const task = singleLi.textContent
		if (task.toLowerCase().indexOf(text) !== -1) {
			singleLi.style.display = 'block'
		} else {
			singleLi.style.display = 'none'
		}
	})
}

input.addEventListener('keyup', inputCheck)

// alternatywa https://www.youtube.com/watch?v=B7PxyyF2uds&ab_channel=MMCSchool
