const openModal = () => {
    const backdrop = document.getElementById('backdrop')
    const modal = document.getElementById('modal')

    backdrop.style.display = 'block'
    modal.style.display = 'block'
}

const closeModal = () => {
    const backdrop = document.getElementById('backdrop')
    const modal = document.getElementById('modal')

    backdrop.style.display = 'none'
    modal.style.display = 'none'
}