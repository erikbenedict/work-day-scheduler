var currentDay = $('#currentDay');
var now = dayjs();
var timeBlocks = $('.time-block');
var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-13');
var hour14 = $('#hour-14');
var hour15 = $('#hour-15');
var hour16 = $('#hour-16');
var hour17 = $('#hour-17');
var saveBtn = $('.saveBtn');

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    saveBtn.on('click', function (event) {
      event.preventDefault();
      var input = $(this).siblings('textarea').val();
      var timeBlockId = $(this).closest('.time-block').attr('id');
      localStorage.setItem(timeBlockId, input);
    })

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    // Use class for "past", "present", and "future" to apply styles to the
    // time-block divs accordingly. The javascript will need to do this by
    // adding/removing these classes on each div by comparing the hour in the
    // id to the current hour.

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    currentDay.text(now.format('dddd, MMMM D, YYYY'));
  });