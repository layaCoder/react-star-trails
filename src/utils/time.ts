const formatTime =(msTime) =>{
    const time = msTime / 1000;
  
    let hour = Math.floor(time / 60 / 60);
  
    hour = Number( hour.toString().padStart(2, "0"));
  
    let minute = Math.floor(time / 60) % 60;
  
    minute = Number(minute.toString().padStart(2, "0"));
  
    let second = Math.floor(time) % 60;
  
    second =Number( second.toString().padStart(2, "0"));
  
    return {hour,minute,second}
}


export{
    formatTime
}