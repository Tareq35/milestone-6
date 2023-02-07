const student = {
    name: 'Kodom Ali', 
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        console.log(this.name, 'is participating in the exam');
    }
}

student.exam();