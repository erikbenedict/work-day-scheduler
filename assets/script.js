var currentDay = $('#currentDay');
var now = dayjs();
var alert = $('.alert');
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
  // * displays the current date and time in the header of the page
  currentDay.text(now.format('dddd, MMMM D, YYYY h:mm A'));
  // * save button listener that uses the id in the containing time-block as a key to save the user input in local storage
  saveBtn.on('click', function (event) {
    event.preventDefault();
    var input = $(this).siblings('textarea').val();
    var timeBlockId = $(this).closest('.time-block').attr('id');
    localStorage.setItem(timeBlockId, input);
    // * show alert message on save stating time block has been updated
    alert.removeClass('d-none').addClass('d-flex');
    });
    // * hide alert when "X" button clicked
    $('.btn-close').on('click', function() {
      alert.addClass('d-none').removeClass('d-flex');
    });
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
  // * clear button listener that clears local storage upon user confirmation
  $('#clearBtn').on('click', function() {
    if (confirm('Are you sure you want to clear the entire schedule?')) {
      localStorage.clear();
      location.reload();
    }
  });
});