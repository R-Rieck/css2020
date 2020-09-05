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
        backdrop.style.display = 'block'
        setTimeout(() => {
            backdrop.classList.add('open')
        }, 10);
        modal.classList.add('open')
    }
}

const openSidebarEvent = () => {
    sidebar.classList.add('open')

    backdrop.style.display = 'block'
    setTimeout(() => {
        backdrop.classList.add('open')
    }, 200);
}

const closeModalAndSidebarEvent = () => {
    backdrop.classList.remove('open')
    sidebar.classList.remove('open')
    backdrop.style.display = 'none'
    setTimeout(() => {
        backdrop.classList.remove('open')
    }, 10);

    if (modal) modal.classList.remove('open')
}

