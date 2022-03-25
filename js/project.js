//Template for my project Yumicode 2022
//! Don't for get to call your functions in app

const clock = {
    //^VARIABLES
    element: document.querySelector('#project'),
    titles: [
        "Date and clock",
        "Get date and time whenever you want",
        ""
    ],
    now: new Date(),
    //^INIT
    init: function () {
        this.getTitles();
        this.dateDisplay();
        this.clockDisplay();
        setInterval(this.getDate, 1000);
        setInterval(this.getTime, 1000);
        this.getTime();
        this.test();
    },
    //^FUNCTIONS
    //~change titles and text
    getTitles: function () {
        for (let title = 0; title < template.headerTxt.length; title++) {
            template.headerTxt[title] = clock.titles[title];
        };
    },
    //~get date and time
    getDate: function () {
        const getDate = clock.now.toLocaleDateString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        return document.querySelector('.date').innerHTML = `${getDate}`;
    },
    getTime: function () {
        let now = new Date();
        const time = now.toTimeString().substring(0, 8);

        return document.querySelector('.clock').innerHTML = `${time}`;
    },
    //~create clock
    clockDisplay: function () {
        let clockDisplay = document.createElement('div');
        clockDisplay.classList.add('clock');
        this.element.appendChild(clockDisplay);

        clockDisplay.style.backgroundColor = '#FFF';
        clockDisplay.style.color = "#000";

        return clockDisplay;
    },
    //~display date
    dateDisplay: function () {
        let date = document.createElement('div');
        date.classList.add('date');
        this.element.appendChild(date);

        return date;
    }
}