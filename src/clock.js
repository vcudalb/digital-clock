function clock() {
  const d = new Date();
  
  const year = d.getFullYear().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const weekDay = weekDays[d.getDay()];
  
  const hr = d.getHours().toString().padStart(2, '0');
  const min = d.getMinutes().toString().padStart(2, '0');
  const sec = d.getSeconds().toString().padStart(2, '0');
  
  const dateElement = document.querySelector('.date');
  const hrElement = document.querySelector('.hr');
  const minElement = document.querySelector('.min');
  const secElement = document.querySelector('.sec');
  
  dateElement.innerHTML = `${day}/${month}/${year} ${weekDay}`;
  hrElement.innerHTML = hr;
  minElement.innerHTML = min;
  secElement.innerHTML = sec;
}

clock();
setInterval(clock, 1000);

document.querySelector('.toggle-btn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});