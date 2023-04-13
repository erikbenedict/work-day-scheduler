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
    // * listener for click events on the save button that uses the id in the containing time-block as a key to save the user input in local storage
    saveBtn.on('click', function (event) {
      event.preventDefault();
      var input = $(this).siblings('textarea').val();
      var timeBlockId = $(this).closest('.time-block').attr('id');
      localStorage.setItem(timeBlockId, input);
    })

    // * apply the past, present, or future class to each time block by comparing the id to the current hour
    timeBlocks.each(function () {
      var hour = parseInt($(this).attr('id').match(/\d+/)[0]);
      if (hour < now.hour()) {
        $(this).addClass('past');
      } else if (hour === now.hour()) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });

    // * gets any user input that was saved in localStorage and set the values of the corresponding textarea elements
    timeBlocks.each(function () {
      var timeBlockId = $(this).attr('id');
      var input = localStorage.getItem(timeBlockId);
      $(this).find('textarea').val(input);
    });
    // * displays the current date in the header of the page
    currentDay.text(now.format('dddd, MMMM D, YYYY h:mm A'));
  });