let todayEl = document.getElementById("today")
let currentDayEl = document.getElementById("currentDay")
let mainEl = document.getElementsByClassName('main')
// Use moment to get current day 
// split day into 24 segments 
var moment = moment()
var momentDate = moment._d
  // _d gives you the full day 

let schedule = JSON.parse(localStorage.getItem("workday"))
console.log(schedule)
if(schedule === null){
    schedule = {}
}

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
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
let dateNumber = 10
let circleEl = `<i class="fa-regular fa-circle">${dateNumber}</i>`
let dateEntry = momentDate.toLocaleString().slice(0,10)
let template = 
`
<div class="container">
<h1>${monthYear}</h1>
<h2 class="buttonBlock ">${today} ${todayNumber}</h2> <div>${x}</div>
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
    <div class="row"><div class=" col-2 timeBlock">9am</div><input id="9AM" class=" col-8 eventBlock"></input><div class=" col-2 saveBlock"></div></div>
    <div class="row"><div class=" col timeBlock">10am</div><input id="10AM"class=" col-8 eventBlock"></input><div class=" col saveBlock"></div></div>
    <div class="row"><div class=" col timeBlock">11am</div><input id="11AM"class=" col-8 eventBlock"></input><div class=" col saveBlock"></div></div>
    <div class="row"><div class=" col timeBlock">12am</div><input id="12AM"class=" col-8 eventBlock"></input><div class=" col saveBlock"></div></div>
    <div class="row"><div class=" col timeBlock">1pm</div><input id="1PM"class=" col-8 eventBlock"></input><div class=" col saveBlock"></div></div>
    <div class="row"><div class=" col timeBlock">2pm</div><input id="2PM"class=" col-8 eventBlock"></input><div class=" col saveBlock"></div></div>
    <div class="row"><div class=" col timeBlock">3pm</div><input id="3PM"class=" col-8 eventBlock"></input><div class=" col saveBlock"></div></div>
    <div class="row"><div class=" col timeBlock">4pm</div><input id="4PM"class=" col-8 eventBlock"></input><div class=" col saveBlock"></div></div>
    <div class="row"><div class=" col timeBlock">5pm</div><input id="5PM"class=" col-8 eventBlock"></input><div class=" col saveBlock"></div></div>
    

</div>
</div>


`
console.log(momentDate.toLocaleString())
let dateString = currentDayText.slice(0,10)
let timeString = currentDayText.slice(12,17)
currentDayEl.textContent = `${dateString}  ${timeString}`

// $(function(){
//     $('.main').append(template)
//     $('.days').on(function(){
//         if(this.text().slice(0,2) == today){

//         }
//     })
// })

$('.main').append(template)


$('.eventBlock').click(function(){
})

$('.saveBlock').click(function(){
    let event = $(this).siblings()[1]
    let value = $(event).val()
    let time = $(event).attr('id').toString()
    let entryValue = {}

    entryValue = {
        dateEntry: dateEntry, 
        info: {
            time: time, 
            entry: value
        }
    }
    schedule = Object.assign(schedule, entryValue)
    schedule = JSON.stringify(schedule)
    console.log(schedule)
    
    localStorage.setItem("workday",schedule)

   

})
// $('.eventBlock').on(function(){
//     if(schedule[`${time}`])
// })
// add event listener in jquery if day == today change circle and caluclate the other dates from it 