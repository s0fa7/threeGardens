 $(document).ready(function () {
      $('.thumbnail').on('click', function () {
        $('#modalImage').attr('src', $(this).attr('src'));
        $('#modal').css('display', 'block');
      });

      $('.close').on('click', function () {
        $('#modal').css('display', 'none');
      });

      $(window).on('click', function (event) {
        if ($(event.target).is('#modal')) {
          $('#modal').css('display', 'none');
        }
      });
    });