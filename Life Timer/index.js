let isDOBOpen = false;
let dateOfBirth;
const settingCog =document.getElementById ("settingsIcon");
const settingContentEl = document.getElementById("settingsContent");

const initialTextEl = document.getElementById("initialText");
const afterDOBBtnTxtEL = document.getElementById("afterDOBBtnTxt");

const dobButtonEl = document.getElementById("dobButton");

const dobInputEL = document.getElementById("dobInput");

const yearEl = document.getElementById("Year");
const monthEl = document.getElementById("Month");
const daysEl = document.getElementById("Days");
const hoursEl = document.getElementById("Hours");
const minuteEl = document.getElementById("Minutes");
const secondEl = document.getElementById("Seconds");

const makeTwoDigitNumber = (number ) => {
    return number > 9 ? number : `0${number}`;
}

const toggleDateOfBirthSelector = () => {
if(isDOBOpen){
    settingContentEl.classList.add('hide');
}
else {
    settingContentEl.classList.remove('hide');
}
isDOBOpen = !isDOBOpen;
console.log ("Toggle", isDOBOpen);
};

const updateAge = () => {
    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirth;
    const Year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const Month = Math.floor ((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
    const Days = Math.floor ((dateDiff / (1000 * 60 * 60 * 24 )) % 30);
    const Hours = Math.floor ((dateDiff / (1000 * 60 *60 ))%24);
    const Minutes = Math.floor ((dateDiff / (1000 * 60)) % 60);
    const Seconds = Math.floor ((dateDiff / (1000))%60);
    console.log( {Year,Month,Days,Hours,Minutes, Seconds});
    
    yearEl.innerHTML = makeTwoDigitNumber(Year);
    monthEl.innerHTML = makeTwoDigitNumber(Month);
    daysEl.innerHTML = makeTwoDigitNumber(Days);
    hoursEl.innerHTML = makeTwoDigitNumber(Hours);
    minuteEl.innerHTML = makeTwoDigitNumber(Minutes);
    secondEl.innerHTML = makeTwoDigitNumber(Seconds);
    };


const setDOBHandler = () => {
     const dateString = dobInputEL.value ;

    dateOfBirth = dateString ?  new Date(dateString) : null;

    // const Year = localStorage.getItem ("Year")
    // const Month = localStorage.getItem ("Month")
    // const Days = localStorage.getItem ("Days")
    // const Hours = localStorage.getItem ("Hours")
    // const Minutes = localStorage.getItem ("Minutes")
    // const Seconds = localStorage.getItem ("Seconds")

    // if (Year && Month && Days )
    //  {
    //     dateOfBirth = new Date(Year , Month, Days)
    //  }
     if(dateOfBirth)
     {
        localStorage.setItem("Year", dateOfBirth.getFullYear())
        localStorage.setItem("Month", dateOfBirth.getMonth())
        localStorage.setItem("Days", dateOfBirth.getDate())
        localStorage.setItem("Hours", dateOfBirth.getHours())
        localStorage.setItem("Minutes", dateOfBirth.getMinutes())
        localStorage.setItem("Seconds", dateOfBirth.getSeconds())

        initialTextEl.classList.add("hide");
        afterDOBBtnTxtEL.classList.remove("hide")
        updateAge();
        setInterval(() => updateAge(), 1000);
     }
     else{
        afterDOBBtnTxtEL.classList.add("hide");
        initialTextEl.classList.remove("hide");
     }

};

setDOBHandler();



settingCog.addEventListener('click', toggleDateOfBirthSelector);


dobButtonEl.addEventListener('click', setDOBHandler);