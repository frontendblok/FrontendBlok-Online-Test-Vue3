Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            count: 3,
            correctAnswer: 0,
            wrongAnswer: 0,
            questions: [
                {
                    question: "Что из нижеперечисленного, на ваш взгляд, является инвестициями?",
                    answers: {
                        a: 'Покупка мебели и бытовой техники в собствунную квартиру',
                        b: 'Покупка дорогого автомобиля для личного пользования',
                        c: 'Покупка акций и облегаций на бирже'
                    },
                    correctAnswer: 'c'
                },
                {
                    question: "Какое объяснение лучше всего подходит для выражения «финансовая свобода»?",
                    answers: {
                        a: 'Когда выплатил ипотеку и почувствовал себя свободным человеком',
                        b: 'Когда хватает на все постоянные расходы и можно дальше работать в свое удовольствие',
                        c: 'Когда перестал работать на дядю, стал предпринимателем и теперь зависишь только от результатов собственного труда'
                    },
                    correctAnswer: 'b'
                },
                {
                    question: "Что в теории финансового планирования означает принцип «Заплати сначала себе»?",
                    answers: {
                        a: 'В день зарплаты надо сразу перечислить часть денег на накопительный счет, а затем жить на оставшиеся средства',
                        b: 'Сначала потратить деньги на удовольствия, а затем - на необходимые, но не такие приятные вещи',
                        c: 'Когда предприниматель каждый месяц вынимает часть денег из оборота компании, чтобы наслаждаться жизнью',
                        d: 'Вложение средств в первую очередь в себя: в обучение, саморазвитие'
                    },
                    correctAnswer: 'a'
                },
            ]
        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswer++
            else
                this.wrongAnswer++
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },
        showResults() {
            this.index++
        },
        resetTest() {
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        }
    }
}).mount('#app');