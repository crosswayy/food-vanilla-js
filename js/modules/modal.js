function showModal(modalSelector, modalTimerId) {
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('show', 'fade');
    modalWindow.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show', 'fade');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalWindow = document.querySelector(modalSelector),
    modalBtns = document.querySelectorAll(triggerSelector);

    modalBtns.forEach((btn) => {
        btn.addEventListener('click', () => showModal(modalSelector, modalTimerId));
    });

    modalWindow.addEventListener('click', (event) => {
        if (event.target == modalWindow || event.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            clearInterval(modalTimerId);
            showModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {showModal};
export {closeModal};