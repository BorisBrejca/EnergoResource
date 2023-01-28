
const  wrapperQuestions = document.querySelector('.questions')

    window.addEventListener('click', function(el){
        if(el.target.closest('.question')){
            let question = el.target.closest('.question')
            let content = question.nextElementSibling;
            if(content.style.maxHeight){
                wrapperQuestions.querySelectorAll('.question-answer').forEach((el) => {
                    el.style.maxHeight = null
                    el.style.padding = null
                })
                question.classList.remove('new')
    
            } else {
                wrapperQuestions.querySelectorAll('.question').forEach((el) => el.classList.remove('new'))
                
                wrapperQuestions.querySelectorAll('.question-answer').forEach((el) => {
                    el.style.maxHeight = null
                    el.style.padding = null
                    
                })
                
                content.style.padding = 10 + 'px'
                content.style.maxHeight = (content.scrollHeight + 20) + 'px'
                question.classList.add('new');
            }
        }

    })

