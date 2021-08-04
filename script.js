let students = [
    {
       'id': 001,
       'f_name': 'Alex',
       'l_name': 'B',
       'gender': 'M',
       'married': false,
       'age': 22,
       'paid': 250,  
       'courses': ['JavaScript', 'React']
    },
    {
       'id': 002,
       'f_name': 'Ibrahim',
       'l_name': 'M',
       'gender': 'M',
       'married': true,
       'age': 32,
       'paid': 150,  
       'courses': ['JavaScript', 'PWA']
    },
    {
       'id': 003,
       'f_name': 'Rubi',
       'l_name': 'S',
       'gender': 'F',
       'married': false,
       'age': 27,
       'paid': 350,  
       'courses': ['Blogging', 'React', 'UX']
    },
    {
       'id': 004,
       'f_name': 'Zack',
       'l_name': 'F',
       'gender': 'M',
       'married': true,
       'age': 36,
       'paid': 250,  
       'courses': ['Git', 'React', 'Branding']
    } 
 ];

//  Filter Array Method
// Creates a new array with all the elements that satisfies the condition
// mentioned in the FUNCTION

const femaleStudents = students.filter((element, index) => {
    return element.gender === "F"
})

console.log(femaleStudents)

// Map Method
// Creates a new array by iterating through the elements and applying logic
// we provided in the function as an argument

const fullNames = students.map((element, index) => {
    return {'fullName': element['f_name'] + ' ' + element['l_name']}
})
console.log(fullNames)

// So filter creates an object and map creates an array?


// Reduce Method
// Applies a reducer function on each of the array elements and returns an output value

const total = students.reduce(
    (accumulator, student, currentIndex, array) => {
        accumulator = accumulator + student.paid
        return (accumulator)
    },
0)

console.log(total)

// Some Array Method
// Returns boolean value based on the last one element in the array passing the condition in the function

let hasStudentBelow30 = students.some((element, index) => {
    return element.age < 30
})

console.log(hasStudentBelow30)

// Find Array Method
// Returns the first matched element from the array that satisfies the condition in the funciton
// findIndex() method returns the index position, otherwise it returns -1

const student = students.find((element, index) => {
    return element.age < 30
})

console.log(student)

// Every Array Method
// Detects if EVERY element in the array satisfies the condition passed in the function

const atLeastTwoCourses = students.every((elements, index) => {
    return elements.courses.length >= 2
})
console.log(atLeastTwoCourses)