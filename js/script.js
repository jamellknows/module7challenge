let todayEl = document.getElementById("today")
let currentDayEl = document.getElementById("currentDay")
let mainEl = document.getElementsByClassName('main')
// Use moment to get current day 
// split day into 24 segments 
var moment = moment()
var momentDate = moment._d
console.log(moment._d)  // _d gives you the full day 
console.log(moment)

let schedule = {} // "schedule", "{day, date, time, event}"
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
console.log((moment))
// button to add event - whatever time 
// on click write an event - hourly 
// template
let month = months[momentDate.getMonth()]
let year = momentDate.getYear()
let fullYear = momentDate.getFullYear().toLocaleString()
let today = days[momentDate.getDay()]
let todayAbbr = today.slice(0,2)
let todayNumber = momentDate.getDate()
let currentDayText = momentDate.toLocaleString()
let yearText = currentDayText.slice(6,10)
let x = "placeHolder"
let monthYear = `${month} ${yearText}`
console.log(month)
let dateNumber = 10
let circleEl = `<i class="fa-regular fa-circle">${dateNumber}</i>`
// if statement so on hiver 
let dateCircleEl
// circleEl.on('mouseenter', $(function(){
//     circleEl.removeClass('fa-regular')
//     circleEl.addClass('fa-solid')
// }))

let template = 
`
<div class="container">
<h1>${monthYear}</h1>
<h2 class="buttonBlock ">${today}</h2> <div>${x}</div>
<div class="row header">
 <div class="col days">${days[0].slice(0,3)}<br><i class="fa-regular fa-circle sun"></i></div>
 <div class="col days">${days[1].slice(0,3)}<i class="fa-regular fa-circle mon"></i></div>
 <div class="col days">${days[2].slice(0,3)}<i class="fa-regular fa-circle tue"></i></div>
 <div class="col days">${days[3].slice(0,3)}<i class="fa-regular fa-circle wed"></i></div>
 <div class="col days">${days[4].slice(0,3)}<i class="fa-regular fa-circle thu"></i></div>
 <div class="col days">${days[5].slice(0,3)}<i class="fa-regular fa-circle fri"></i></div>
 <div class="col days">${days[6].slice(0,3)}<i class="fa-regular fa-circle sat"></i></div>
</div>



<div class="container schedule">
    <div class="row"><div class=" col-2 timeBlock">9am</div><div class=" col-8 eventBlock"></div><div class=" col-2 saveBlock"></div></div>
    <div class="row"><div class=" col timeBlock">10am</div><div class=" col-8 eventBlock"></div><div class=" col saveBlock"></div></div>
    <div class="row"><div class=" col timeBlock">11am</div><div class=" col-8 eventBlock"></div><div class=" col saveBlock"></div></div>
    <div class="row"><div class=" col timeBlock">12am</div><div class=" col-8 eventBlock"></div><div class=" col saveBlock"></div></div>
    <div class="row"><div class=" col timeBlock">1pm</div><div class=" col-8 eventBlock"></div><div class=" col saveBlock"></div></div>
    <div class="row"><div class=" col timeBlock">2pm</div><div class=" col-8 eventBlock"></div><div class=" col saveBlock"></div></div>
    <div class="row"><div class=" col timeBlock">3pm</div><div class=" col-8 eventBlock"></div><div class=" col saveBlock"></div></div>
    <div class="row"><div class=" col timeBlock">4pm</div><div class=" col-8 eventBlock"></div><div class=" col saveBlock"></div></div>
    <div class="row"><div class=" col timeBlock">5pm</div><div class=" col-8 eventBlock"></div><div class=" col saveBlock"></div></div>
    

</div>
</div>


`
console.log(momentDate.toLocaleString())
let dateString = currentDayText.slice(0,10)
let timeString = currentDayText.slice(12,17)
currentDayEl.textContent = `${dateString}  ${timeString}`

$(function(){
    $('.main').append(template)
    $('.days').on(function(){
        if(this.text().slice(0,2) == today){

        }
    })
})

// add event listener in jquery if day == today change circle and caluclate the other dates from it 