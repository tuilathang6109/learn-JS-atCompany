$(document).ready(function() {
  // Ẩn modal khi tải trang
  $('.modal').hide();
  // Xử lý sự kiện khi click vào nút Login
  $('#login-btn').click(function() {
    $('.modal').show();
    $('.log-modal').show();
    $('.res-modal').hide();
  });
  
  // Xử lý sự kiện
// khi click vào nút Register
$('#register-btn').click(function() {
  $('.modal').show();
  $('.res-modal').show();
  $('.log-modal').hide();
  });
  
  // Xử lý sự kiện khi click ra ngoài form
  $(document).mouseup(function(event) {
    var logModal = $('.log-modal');
    var resModal = $('.res-modal');
    var modal = $('.modal')
    if (!logModal.is(event.target) && logModal.has(event.target).length === 0) {
      logModal.hide();
      modal.hide();
    }else if (!resModal.is(event.target) && resModal.has(event.target).length === 0)
    {
      resModal.hide();
      modal.hide();
    }
  });
  // Xử lý sự kiện khi click vào nút đóng modal
  $('.close').click(function() {
  $('.modal').hide();
  });
  });