const course = {
    courseName : "Js in hindi",
    coursePrice : "999",
    courseInstructor : "ashish"
}

// course.courseInstructor
// course.courseInstructor
// course.courseInstructor

// instead of above 

// const {courseInstructor} = course
const {courseInstructor: instructor} = course //renaming 
// console.log(courseInstructor);
console.log(instructor);


// API - Intro
// JSON format 
// {
//     name : "Ashish",
//     courseName : "JS in hindi",
//     price : "free"
// }

