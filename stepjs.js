export function setStep(stepContainer, stepsList) {
    var ct = 1

    for (let value of stepsList) {
        var structStep = `<li class="step-wizard-item" data-id=${ct}>
                            <span class="progress-count" data-toggle="tooltip" data-placement="top" title="${value['title']} "><img src="./source/arrow.png"></span>
                            <span class="progress-label">${value['area']}</span>
                        </li>`

        stepContainer.append(structStep)

        ct++
    }
}

export function setStepActive(stepContainer, id) {
    for (let step of stepContainer.children()) {
        $(step).removeClass('active')

        if ($(step).data('id') == id) {
            $(step).addClass('active')
        }
    }
}
