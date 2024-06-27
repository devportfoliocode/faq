document.addEventListener('DOMContentLoaded', () => {
    faq()
})

function faq() {
    const questions = document.querySelectorAll('.faq-question')
    
    questions.forEach(question => {
        question.addEventListener('click', open)
    })
    
    function open(event) {
        const answer =  event.currentTarget.nextElementSibling
        const btn = event.currentTarget.lastElementChild

        answer.classList.toggle('faq-answer-open')

        if (answer.classList.contains("faq-answer-open")) {
            btn.src = "img/close.svg"
        }
        else {
            btn.src = "img/open.svg"
        }
    }
}