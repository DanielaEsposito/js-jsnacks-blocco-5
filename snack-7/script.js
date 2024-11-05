const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];
let searchedStudent = {}
for(let i = 0; i < students.length ; i++){
  const student = students[i];
  if(student.id === 2){
  searchedStudent = student
  }
}
console.log(searchedStudent);


// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }