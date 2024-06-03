
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')


// let date = new date();
// console.log(date.toLocaleTimeString());

// But we need to refresh at every point, so above two lines are not suitable, it cam't update at every movement,
// tp update it at every movement, it neeed to refresh the BROWSER



// So we need to use setInterval() function to refresh the browser at every point of time.
// so we need to use setInterval() function to refresh at every point of time.



setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
