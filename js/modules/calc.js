function calc() {
    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;

    function getInfoFromLocalStorage() {
        if (localStorage.getItem('sex')) {
            sex = localStorage.getItem('sex');
        } else {
            sex = 'female';
            localStorage.setItem('sex', sex);
        }

        if (localStorage.getItem('ratio')) {
            ratio = localStorage.getItem('ratio');
        } else {
            ratio = 1.375;
            localStorage.setItem('ratio', ratio);
        }
    }

    getInfoFromLocalStorage();

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);

            if (elem.getAttribute('id') === sex) {
                elem.classList.add(activeClass);
            }

            if (elem.getAttribute('data-ratio') === ratio) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender div', "calculating__choose-item_active");
    initLocalSettings('.calculating__choose_big div', "calculating__choose-item_active");

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '_____';
            return;
        }

        if (sex === 'male') {
            result.textContent = Math.floor((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        } else {
            result.textContent = Math.floor((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        }
    }

    calcTotal();
    

    function getStaticInfo(parentSelector, activeClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);

        document.querySelector(parentSelector).addEventListener('click', (e) => {
            if (!e.target.getAttribute('data-ratio') && 
                (e.target.getAttribute('id') == 'gender' || !e.target.getAttribute('id'))) { return; }

            if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', ratio);
            } else {
                sex = e.target.getAttribute('id');
                localStorage.setItem('sex', sex);
            }

            elements.forEach(elem => {
                elem.classList.remove(activeClass);
            });

            e.target.classList.add(activeClass);

            calcTotal();
        });
    }

    function getDynamicInfo(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) {
                input.style.border = '3px solid red';
            } else {
                input.style.border = 'none';
            }

            switch(input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }

            calcTotal();
        });
    }

    getStaticInfo('#gender', "calculating__choose-item_active");
    getStaticInfo('.calculating__choose_big', "calculating__choose-item_active");

    getDynamicInfo('#height');
    getDynamicInfo('#weight');
    getDynamicInfo('#age');
}

export default calc;