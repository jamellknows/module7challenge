let todayEl = document.getElementById("today")
let currentDayEl = document.getElementById("currentDay")
let mainEl = document.getElementsByClassName('main')
// Use moment to get current day 
// split day into 24 segments 
var moment = moment()
var momentDate = moment._d
  // _d gives you the full day 

let schedule = JSON.parse(localStorage.getItem("workday"))
if(schedule === null){
    schedule = []
    console.log("new schedule")
}
else{
    console.log(schedule)
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
// let x = `<button onclick=previous()>previous day</button><br><button onclick="next()">next day</button>`
let monthYear = `${month} ${yearText}`
let dateNumber = 10
let circleEl = `<i class="fa-regular fa-circle">${dateNumber}</i>`
let dateEntry = momentDate.toLocaleString().slice(0,10)
let hour = momentDate.getHours()
console.log(hour)

let template = 
`
<div class="container">
<h1>${monthYear}</h1>
<h2 class="buttonBlock ">${today} ${todayNumber}</h2> 
<div class="row header">
 <div class="col days">${days[0].slice(0,3)}<br></div>
 <div class="col days">${days[1].slice(0,3)}</div>
 <div class="col days">${days[2].slice(0,3)}</div>
 <div class="col days">${days[3].slice(0,3)}</div>
 <div class="col days">${days[4].slice(0,3)}</div>
 <div class="col days">${days[5].slice(0,3)}</div>
 <div class="col days">${days[6].slice(0,3)}</div>
</div>



<div id="planner" class="container schedule">
    <div class="row"><div class=" col-2 timeBlock">9am</div><input   id="9AM" class="col-8 eventBlock"></input><div class=" col-2 saveBlock"><i class="fas fa-save"></i></div></div>
    <div class="row"><div class=" col-2 timeBlock">10am</div><input  id="10AM" class="col-8 eventBlock"></input><div class=" col saveBlock"><i class="fas fa-save"></i></div></div>
    <div class="row"><div class=" col-2 timeBlock">11am</div><input  id="11AM" class="col-8 eventBlock"></input><div class=" col saveBlock"><i class="fas fa-save"></i></div></div>
    <div class="row"><div class=" col-2 timeBlock">12am</div><input  id="12AM" class="col-8 eventBlock"></input><div class=" col saveBlock"><i class="fas fa-save"></i></div></div>
    <div class="row"><div class=" col-2 timeBlock">1pm</div><input   id="1PM"   class="col-8 eventBlock"></input><div class=" col saveBlock"><i class="fas fa-save"></i></div></div>
    <div class="row"><div class=" col-2 timeBlock">2pm</div><input   id="2PM"   class="col-8 eventBlock"></input><div class=" col saveBlock"><i class="fas fa-save"></i></div></div>
    <div class="row"><div class=" col-2 timeBlock">3pm</div><input   id="3PM"   class="col-8 eventBlock"></input><div class=" col saveBlock"><i class="fas fa-save"></i></div></div>
    <div class="row"><div class=" col-2 timeBlock">4pm</div><input   id="4PM"   class="col-8 eventBlock"></input><div class=" col saveBlock"><i class="fas fa-save"></i></div></div>
    <div class="row"><div class=" col-2 timeBlock">5pm</div><input   id="5PM"    class="col-8 eventBlock"></input><div class=" col saveBlock"><i class="fas fa-save"></i></div></div>
    

</div>
</div>


`
let dateString = currentDayText.slice(0,10)
let timeString = currentDayText.slice(12,17)
currentDayEl.textContent = `${dateString}  ${timeString}`
let planner = document.getElementById('planner')
$('.main').append(template)


$(function(){
    $.each(schedule, function(index){
        if(schedule[index][0].dateEntry == dateEntry){
            if(schedule[index][0].info.time){
                console.log(schedule[index][0].info.time)
                console.log(schedule[index][0].info.time)
                let time = $(this)[0].info.time
                let entry = $(this)[0].info.event
                let timeEntry = $(`#${time}`)
                timeEntry.val(entry)
                timeEntry.css('background-color', 'lightgreen')
                
    
    
            }
        }
     
    })
    if(hour > 12){
        hour = hour 
    }
    $.each($('.eventBlock'), function(index){
        if($(this)[0].id.slice(0,-2) == hour){
            $(this).css('background-color', 'lightgreen')
        }
        if((Number($(this)[0].id.slice(0,-2)))>=9){
            let idTime = $(this)[0].id.slice(0,-2)
            idTime = Number(idTime) + 12
            console.log(idTime + " " + hour)
            if(idTime < hour){
                $(this).css('background-color', 'lightblue')
            }
            if(idTime == hour){
                $(this).css('background-color', 'lightgreen')
            }
            if(idTime > hour){
                $(this).css('background-color', 'grey')
            }
            
                   
    }
        
        if((Number($(this)[0].id.slice(0,-2))) <= 5){
                let idTime = $(this)[0].id.slice(0,-2)
                idTime = Number(idTime) + 12
                console.log(idTime + " " + hour)
                if(idTime < hour){
                    $(this).css('background-color', 'grey')
                }
                if(idTime == hour){
                    $(this).css('background-color', 'lightgreen')
                }
                if(idTime > hour){
                    $(this).css('background-color', 'lightblue')
                }
                
                       
        }
    })
         
    
    


    $("#datepicker").datepicker()
    console.log($(".selector").datepicker("getDate"))
    

})

$('.saveBlock').click(function(){
    let event = $(this).siblings()[1]
    let eventValue = $(event).val()
    let time = $(event).attr('id').toString()
    console.log($(".selector").datepicker("getDate"))

    
    $.each(schedule, function(index, value){
        if(schedule[index] != null){
            if(schedule[index][0].dateEntry == dateEntry && schedule[index][0].info.time == time)
            {
                delete schedule[index]
            }
        }
       
    })
    
    schedule = schedule.filter(n => n) 
    entryValue = [
        {dateEntry : dateEntry,
            info:{
                time: time,
                event: eventValue

            }
        }
        ]
     
    

    schedule.push(entryValue)
  
    console.log(schedule)
    let jsonSchedule = JSON.stringify(schedule)

    localStorage.setItem("workday",jsonSchedule)

})


// function previous(){
//     moment = moment.subtract(1, 'days')
//     console.log(moment)

// }

// function next(){
//     moment = moment.add(1, 'days')
// }