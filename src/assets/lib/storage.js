const FLAG = "RECORD-DATA";

//=>设置存储的信息
function setInfo(time, title = "", content = "") {
  let DATA = JSON.parse(localStorage.getItem(FLAG) || "{}"),
    DATA_KEYS = Object.keys(DATA);
  if (!DATA_KEYS.includes(time)) {
    DATA[time] = [];
  }
  let ARR = DATA[time];
  ARR.push({
    id: ARR.length === 0 ? 1 : (parseInt(ARR[ARR.length - 1].id) + 1),
    title,
    content,
    time: getMinutes()
  });
  localStorage.setItem(FLAG, JSON.stringify(DATA));
  return true;
}

//=>获取存储信息
function getInfo(time, id) {
  let DATA = JSON.parse(localStorage.getItem(FLAG) || "{}"),
    DATA_KEYS = Object.keys(DATA);
  if (!DATA_KEYS.includes(time)) return null;
  DATA = DATA[time];
  if (typeof id !== "undefined") {
    DATA = DATA.find(item => {
      return parseInt(item.id) === parseInt(id);
    });
  }
  return DATA;
}

//=>删除存储信息
function deleteInfo(time, id) {
  let DATA = JSON.parse(localStorage.getItem(FLAG) || "{}"),
    DATA_KEYS = Object.keys(DATA);
  if (!DATA_KEYS.includes(time)) return false;
  let ARR = DATA[time];
  ARR = ARR.filter(item => {
    return parseInt(item.id) !== parseInt(id);
  });
  DATA[time] = ARR;
  localStorage.setItem(FLAG, JSON.stringify(DATA));
  return true;
}

//=>格式化时间
function formatDate(time) {
  let year = time.getFullYear(),
    month = time.getMonth() + 1,
    day = time.getDate();
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  return `${year}/${month}/${day}`;
}

function formatTime(time) {
  return time.split('/').map(item => {
    if (item.length < 2) {
      return '0' + item;
    }
    return item;
  }).join('/');
}

function getMinutes() {
  let time = new Date(),
    minutes = time.getMinutes(),
    hours = time.getHours();
  minutes = minutes < 10 ? '0' + minutes : minutes;
  hours = hours < 10 ? '0' + hours : hours;
  return `${hours}:${minutes}`;
}

export default {
  set: setInfo,
  get: getInfo,
  del: deleteInfo,
  formatDate,
  formatTime
};
