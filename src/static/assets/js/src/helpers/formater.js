export const formatModules = (modules) => {
    let formated = '';

    modules.forEach(_module => {
        formated += `
            <ul class="table__body__row">
                <li class="table__body__row__item">${_module.name}</li>
                <li class="table__body__row__item">${_module.code}</li>
                <li class="table__body__row__item">${_module.inPersonPrice}</li>
                <li class="table__body__row__item last-cell">${_module.onlinePrice}</li>
            </ul>
        `;
    });

    return formated;
};

export const formatTutors = (tutors) => {
    let formated = '';

    tutors.forEach(tutor => {
        formated += `
            <ul class="table__body__row">
                <li class="table__body__row__item">${tutor.firstname}</li>
                <li class="table__body__row__item">${tutor.lastname}</li>
                <li class="table__body__row__item">${tutor.email}</li>
                <li class="table__body__row__item last-cell">Date here</li>
            </ul>
        `;
    });

    return formated;
};
