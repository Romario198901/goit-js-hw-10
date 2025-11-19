import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from '../img/close.svg';
const refs = {
  myInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
refs.startBtn.disabled = true;
let userSelectedDate;
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
flatpickr(refs.myInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= Date.now()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        backgroundColor: '#ef4040',
        titleColor: '#fff',
        messageColor: '#fff',
        iconUrl: icon,
        progressBarColor: '#B51B1B',
        theme: '#FFBEBE',
      }),
        (refs.startBtn.disabled = true);
    } else {
      refs.startBtn.disabled = false;
    }
  },
});

refs.startBtn.addEventListener('click', () => {
  refs.startBtn.disabled = true;
  refs.myInput.disabled = true;
  const interValId = setInterval(() => {
    const diffMs = userSelectedDate - new Date();
    const { days, hours, minutes, seconds } = convertMs(diffMs);
    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
    if (diffMs < 1000) {
      clearInterval(interValId);
      refs.myInput.disabled = false;
      refs.startBtn.disabled = true;
    }
  }, 1000);
});
