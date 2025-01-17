let studentDatabase = ['Akshay', 'Vishal', 'Ankur', 'Ashish', 'Abhishek']

let findStudent = (allStudent, studentName) => {
    for(i=0; i<allStudent.length; i++) {

        if (allStudent[i] === studentName) {
            console.log(`Student found ${studentName}`);

        }
        // console.log(i);

    }
    
}

findStudent(studentDatabase, 'Vishal');