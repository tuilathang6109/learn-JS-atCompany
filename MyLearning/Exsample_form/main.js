
// /*DOM-------------- */
// var logBtn = document.querySelector('.btn-log');
// var resBtn = document.querySelector('.btn-res');
// var logForm = document.querySelector('.log-form');
// var resForm = document.querySelector('.res-form');
// var modal = document.querySelector('.modal');
// var closes = document.querySelectorAll('.close-btn');
// var isLogFormVisible = false; // trạng thái hiển thị của log form
// var isResFormVisible = false; // trạng thái hiển thị của res form

// resBtn.addEventListener('click', () => {
//   if (!isResFormVisible) {
//     modal.style.display = 'flex';
//     logForm.style.display = 'none';
//     resForm.style.display = 'flex';
//     isResFormVisible = true;
//     isLogFormVisible = false;
//   }
// });

// logBtn.addEventListener('click', () => {
//   if (!isLogFormVisible) {
//     modal.style.display = 'flex';
//     resForm.style.display = 'none';
//     logForm.style.display = 'flex';
//     isLogFormVisible = true;
//     isResFormVisible = false;
//   }
// });

// for (close of closes) {
// close.addEventListener('click', () => {
//     modal.style.display = 'none';
//     isLogFormVisible = false;
//     isResFormVisible = false;
//   });
// }

/*JQUERY--------- */

const closes = document.querySelectorAll('.close-btn');
$(document).ready(()=>{ // ẩn modal khi load form
    $('.modal').hide();
    $('.btn-log').click((event)=>{
        event.stopPropagation(); // ngăn chặn sự kiện click truyến đến các phần tử con
        $('.modal').css('display','flex')
        $('.res-form').hide();
        if (!$('.log-form').is(':visible')) { // điều kiện if để kiểm tra xem form có đang hiển thị không trước khi ẩn form.
            $('.log-form').show();
        }
    })
    $('.btn-res').click((event)=>{
        event.stopPropagation(); // ngăn chặn sự kiện click truyến đến các phần tử con
        $('.modal').css('display','flex')
        $('.log-form').hide();
        if (!$('.res-form').is(':visible')) { // điều kiện if để kiểm tra xem form có đang hiển thị không trước khi ẩn form.
            $('.res-form').show();
        }
    })
    $('.overflow').click(()=>{
        $('.modal').hide();
    });
    for (var close of closes) {
        close.addEventListener('click',()=>{
            $('.modal').hide();
        });
    } ;
    $('.modal input').click((event)=>{
      event.stopPropagation();
    });
    $('.log-form').click((event)=>{
      event.stopPropagation(); // ngăn chặn sự kiện click truyến đến các phần tử con trong form
    });
    $('.res-form').click((event)=>{
      event.stopPropagation(); // ngăn chặn sự kiện click truyến đến các phần tử con trong form
    });
});

// Trong đoạn mã này, if (!$('.log-form').is(':visible')) 
// được sử dụng để kiểm tra xem form log-form có đang hiển thị không. 
// Nếu không, thì mới hiển thị form đó bằng lệnh $('.log-form').show();. 
// Tương tự, đối với form res-form, bạn cũng có thể sử dụng if (!$('.res-form').is(':visible'))
//  để kiểm tra xem form đó có đang hiển thị không.