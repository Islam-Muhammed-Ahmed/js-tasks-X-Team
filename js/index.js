// button for dark mode 
var dark = document.getElementById("dark");

dark.onclick = function() {
    document.body.classList.toggle("darktheme");
}


// starting of the weather
var input = document.querySelector(".inputTxt");
var search = document.querySelector(".btn-1");
var showData = document.querySelector(".showData");

// getting api key by login to https://home.openweathermap.org/
// 23c2462456e22be8a802b404cc0d0608
var API_Key = "23c2462456e22be8a802b404cc0d0608";

search.addEventListener('click', function() {
    // getting input value
    var cityName = input.value;

    // testing if it is working or not
    // console.log(cityName);

    // getting the data from the Api 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}+&units=metric&appid=${API_Key}`)
        .then(res => res.json())
        .then(data => {
            // testing for it can fetching the data or not
            // console.log(data)
            // when input is full then make it clear field
            input.value = " ";
            // showing the Data
            showData.innerHTML = `
                                    <ul>
                                        <li class="desc">${data.sys.country}</li>
                                        <li class="desc">${data.weather[0].description}</li>
                                        <li class="desc">${data.weather[0].icon}</li>
                                        <li class="city">${data.name}</li>
                                        <li class="temp">temperature ${data.main.temp}°C</li>
                                        <li class="temp">humidity ${data.main.humidity}%</li>
                                        <li class="temp">Wind ${data.wind.speed}%</li>
                                    </ul>
                                `;
        })
        .catch(() => {
            alert("Please type correct city name")
        })
});







/*
// weather current api for user

// after page loading we can get the location
window.addEventListener('load', function() {
    var long;
    var lat;
    var temp = document.querySelector(".temp");
    var tempDesc = document.querySelector(".temp-desc");
    var city = document.querySelector(".city");
    var weatherDescription = document.querySelector(".weather-description");
    //if the location exist in the browser find the exact position of the user and ask u to allow to get your location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // a proxy so dark sky app can not preventing you from accessing location information
            var proxy = 'https://cors-anywhere.herokuapp.com/';
            //my api from dark sky app *note: the app hs been stopped till the end of 2022*
            var myApi = `${proxy} https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;

            // getting the information  from myApi variable then we will do something with myApi data that gets back from the server
            fetch(myApi)
                .then(dataResponse => {
                    return dataResponse.json();
                    // we use json() for transmitting data in web applications
                }).then(myData => {
                    console.log(myData)
                    var { temperature, summary } = myData.currently;
                    // getting DOM elements from the Api
                    temp.textContent = temperature;
                    weatherDescription.textContent = summary;
                });
        });
    }
}); 

*/


// starting stop watch

// var [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]

var milliseconds = 0,
    seconds = 0,
    minutes = 0,
    hours = 0;

var myTime = document.querySelector('.timerDisplay');

var islam_Mo;

// implementing Start Time function for start counting
var nono = document.getElementById('startTimer');
nono.addEventListener('click', function() {

    // setInterval() is a method  function and evaluates an expression at specified period of time in milliseconds
    // this will continue calling the function until clearInterval() is called, or the window is closed.

    islam_Mo = setInterval(islam_Mo_Mo, 10);

    // method will execute the function once every 1 millisecond
});

//implementing stop Time function for Stopping counting
var osos = document.getElementById('stopTimer');

osos.addEventListener('click', function() {
    // if this clear interval not found the setInterval wil continue call until user click on stopTimer
    clearInterval(islam_Mo);
});

//implementing reset Time function for resetting counting
var maz = document.getElementById('resetTimer');
maz.addEventListener('click', function() {
    clearInterval(islam_Mo);
    // i called these 4 vars here so i can reset their value to 0
    milliseconds = 0, seconds = 0, minutes = 0, hours = 0;

    myTime.innerHTML = "00 : 00 : 00 : 00";
});

// function for counting & if condition for millisecond,seconds,minutes&hours;
// first we will declare setInterval first handler islam_Mo_Mo
// then we declare that millisecond will= to millisecond + the Timeout(10)?
// then if millisecond = 1 second the millisecond will = or will return to 0 and seconds will increase to 1 every time
//then if seconds = 60seconds then seconds will = 0 , restart counting again and minutes will increase 1 minute every time
//then if minutes = 60 minutes then minutes will = 0 , restart counting again and hours will increase 1 hour every time
function islam_Mo_Mo() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    var h = hours < 10 ? "0" + hours : hours;
    var m = minutes < 10 ? "0" + minutes : minutes;
    var s = seconds < 10 ? "0" + seconds : seconds;
    var ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    myTime.innerHTML = ` ${h}  :  ${m} :  ${s} :  ${ms} `;
};


// var M_M = document.getElementsByTagName("button");


// for(var i=0;i<M_M.length;i++){
//     M_M[i].style.backgroundColor="red";
// }
/*
var B = "200.5",
    n = "100",
    N = 2.4,
    Z = 1e2;
// Use Variables n + N To Get This Values
document.write(n ** Math.floor(N)); // result 10000
// Use Variables all variables to Get The lowest Value
document.write(Math.min(B, n, N, Z));
//use four ways to make 2.4 =2
document.write(parseInt(N));
document.write(Math.round(N));
document.write(Math.floor(N));
document.write(Math.trunc(N));

// Use Variables B + N To Get This Values
document.write((Math.floor(B) / Math.ceil(N)).toFixed(2)); // 66.67 => String
document.write(Math.round(parseInt(B) / Math.ceil(N))); // 67 => Number

*/


//        ============= calculator===============

// function that we use it to show numbers and values on textview
function
insert(num) {
    var myString = document.form.textview.value;
    var lastChar = myString[myString.length - 1];
    if (myString.length < 30) { //numbers in text view will be less than 30 num 
        if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
            //this means if last char not a num or null(textview empty) or num if one of them true do that>>
            document.form.textview.value = myString + num;
        } else if (num != lastChar) {
            document.form.textview.value = myString.replace(lastChar, num);

        }
    }
}
// function for equal and arithmetic operations
function equal() {
    var sum = document.form.textview.value;
    if (sum) {
        document.form.textview.value = eval(sum)
    }
}
// function for removing any thing showed on textview
function clean() {
    document.form.textview.value = '';
}
// function for removing last number
function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

//  function for hiding calculator
var hide = document.getElementById("main-calc"),
    islamMo = document.getElementById("showCalc");

islamMo.onclick = function() {
    if (hide.style.display !== "none") {
        hide.style.display = "none";
    } else {
        hide.style.display = "block";
    }
    if (islamMo.innerHTML == "Show Calculator") {
        islamMo.innerHTML = "Hide Calculator";
    } else {
        islamMo.innerHTML = "Show Calculator";
    }
};


/*============== 
End of the calculator
===============*/

// the array
var islam = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function calcAverage(islam) { //step1 Finding the total number of elements. 
    var allNum = 0,
        counting = 0;

    islam.forEach(function(item) { //step2 Finding the sum of all the elements 
        // allNum = allNum + item;
        allNum += item; //result===="136"
        counting++; //result===="17" post increment to get out of loop and search for more values.
        //with out post/pre increment result will be infinity
    });

    return allNum / counting; //step3 Dividing the values
}

// showing the answer in p
var hideValue = document.getElementById("btn-1");
hideValue.innerHTML = "your answer should =  " + calcAverage(islam) + "."; //posting final value

// for hiding the value
var Hide = document.getElementById("btn-1"),
    IslamMo = document.getElementById("btn-2");

IslamMo.onclick = function() {
    if (Hide.style.display !== "none") {
        Hide.style.display = "none";
    } else {
        Hide.style.display = "inline-block";
    }
};

//end of array