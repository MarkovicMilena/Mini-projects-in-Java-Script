//varijables
let course = document.querySelector('.produts');

let parent = document.querySelector('.table tbody');

let removeButton = document.querySelector('.btn.btn-outline-secondary');


//Event
course.addEventListener('click', addToCart);

parent.addEventListener('click', removeCart);

removeButton.addEventListener('click', removeList);

document.addEventListener('DOMContentLoaded', localStorageOnLoad);

removeButton.addEventListener('click', clearFromLocalStorage);


//function
function addToCart(e) {
    if (e.target.classList.contains('btn-outline-danger')) {
        let courses = e.target.parentElement.parentElement;
        cart(courses);
    }
}

function cart(courses) {
    let coursesObject ={
        img: courses.querySelector('img').src,
        title: courses.querySelector('h5').textContent,
        price: courses.querySelector('.card-text').textContent,
        id: courses.querySelector('button').getAttribute('id')
    }

   intoCart(coursesObject);
}

function intoCart(courses) {
    let newElement = document.createElement('tr');
    newElement.innerHTML = `
    <tr>
    <td>
    <img src="${courses.img}"  width="100px">
    </td>
    <td> ${courses.title} </td>
    <td> ${courses.price} </td>
    <td> <a href="#" class="btn btn-outline-danger" id="${courses.id}"> X </a></td>
    </tr>
    `
   parent.appendChild(newElement);

   // add to Local Storage 
   addToLocalStorage(courses);

};

function addToLocalStorage(courses){
    let listCourses = getFromLocalStorage();

    listCourses.push(courses);
    localStorage.setItem('listCourses', JSON.stringify(listCourses));
}

  //getFromLocalStorage 

  function getFromLocalStorage(){
       let listCourses;

       if (localStorage.getItem('listCourses') === null) {
        listCourses =[];
       }else{
        listCourses = JSON.parse(localStorage.getItem('listCourses'));
       }
       return listCourses;
}

function removeCart(e) {
let course, idCourse;

     if (e.target.classList.contains('btn-outline-danger')) {
     e.target.parentElement.parentElement.remove();

     course = e.target.parentElement.parentElement;
     idCourse = course.querySelector('a').getAttribute('id');

         }
    
     //remove from Local Storage
      removeLocalStorage(idCourse);
    
}

function removeLocalStorage(idCourse) {
    let listCourses = getFromLocalStorage();

    listCourses.forEach(function(course,index){

       
        if (course.id === idCourse) {
            listCourses.splice(index,1);
        }
    })

    localStorage.setItem('listCourses', JSON.stringify(listCourses));

}

function clearFromLocalStorage() {
    localStorage.clear();
}

function removeList() {
     parent.innerHTML = '';
    
}

function localStorageOnLoad() {
    let listCourses = getFromLocalStorage();

    listCourses.forEach(function(courses) {
        let newElement = document.createElement('tr');
        newElement.innerHTML = `
        <tr>
        <td>
        <img src="${courses.img}"  width="100px">
        </td>
        <td> ${courses.title} </td>
        <td> ${courses.price} </td>
        <td> <a href="#" class="btn btn-outline-danger" id="${courses.id}"> X </a></td>
        </tr>
        `
       parent.appendChild(newElement);
    
    });
}


