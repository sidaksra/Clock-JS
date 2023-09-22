document.addEventListener("DOMContentLoaded", function(){
    setInterval(() => {

        let date = new Date()
        function hours(){
            if(date.getHours()<10){
                return `0${date.getHours()}`;
            }
            else{
                return date.getHours()
            }
        }
        function seconds(){
            if (date.getSeconds() < 10 ){
                return `0${date.getSeconds()}`;
            }
            else{
                return date.getSeconds()
            }
        }
        function minutes(){
            if (date.getMinutes() < 10 ){
                return`0${date.getMinutes()}`;
            }
            else{
                return date.getMinutes()
            }
        }
    
        function Meridiem(){
            if(hours()>=12){
                return "PM"
                
            }
            else{
                return "AM";
            }
        }
        
        let time = hours() +' : ' + minutes()+" : "+seconds()
        
        const getClockDiv = document.querySelector(".myclock")
        getClockDiv.innerText = time

        const ampm=document.querySelector(".ampm")
        let meridiem = Meridiem()
        ampm.innerText = meridiem


    
    }, 1000);//after every 1000ms = 1s
})