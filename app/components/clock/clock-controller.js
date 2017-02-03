var clockService = new ClockService();

var clockVue = new Vue({
    el: '#clock',
    data: {
        hours: 0,
        noMilitaryHours: 0,
        minutes: 0,
        militaryTime: true,
        message: '',
        name: '',
        person: { exists: false }
    },
    mounted: function () {
        this.startTime();
        this.checkMessage();
        this.checkName();
    },
    methods: {
        startTime: function(){
            var today = new Date();
            this.hours = today.getHours();
            this.noMilitaryHours = today.getHours();
            if(this.noMilitaryHours >= 13){
                this.noMilitaryHours -= 12;
            }
            var min = today.getMinutes();
            this.minutes = this.checkDigits(min);
            setTimeout(this.startTime, 1000);
        },
        checkDigits: function(i){
            if(i < 10){
                i = '0' + i;
            }
            return i;
        },
        toggleMilitary: function(){
            this.militaryTime = !this.militaryTime;
        },
        checkMessage: function(){
            if(this.hours < 12){
                this.message = 'Good Morning';
            } else if (this.hours > 12 && this.hours < 17){
                this.message = 'Good Afternoon';
            } else {
                this.message = 'Good Evening'
            }
        },
        checkName: function(){
            this.person = clockService.getName();
        },
        setName: function(name){
            this.person.name = name;
            this.person.exists = true;
            clockService.saveName(this.person);
        }
    }
})	