const planButtons = document.querySelectorAll('.action-button')
const modalContinue = document.getElementById('modalContinueButton')
const modalCancel = document.getElementById('modalCancelButton')
const openSidebar = document.getElementById('openSidebarButton')

const backdrop = document.getElementById('backdrop')
const modal = document.getElementById('modal')
const sidebar = document.getElementById('sidebarMenu')

if (modal) {
    modalContinue.addEventListener('click', () => closeModalAndSidebarEvent())
    modalCancel.addEventListener('click', () => closeModalAndSidebarEvent())
}

backdrop.addEventListener('click', () => closeModalAndSidebarEvent())
openSidebar.addEventListener('click', () => openSidebarEvent())
planButtons.forEach(planButton => planButton.addEventListener('click', () => openModalEvent()));

const openModalEvent = () => {
    if (modal) {
        backdrop.classList.add('open')
        modal.classList.add('open')
    }
}

const openSidebarEvent = () => {
    sidebar.classList.add('open')
    backdrop.classList.add('open')
}

const closeModalAndSidebarEvent = () => {
    backdrop.classList.remove('open')
    sidebar.classList.remove('open')

    if (modal) modal.classList.remove('open')
}

