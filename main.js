
$( document ).ready(function() {
$('input').click(function () {
     /*
$.getJSON('http://horoscope-api.herokuapp.com/horoscope/today/'+this.id+'?callback=?', function (data) {
      var dailyHoroscope = data.horoscope;
      var dateToday = data.date;
      var zodiac = data.sunsign;
        $("#zodiac").html(zodiac);
        $("#date").html(dateToday);
        $("#horoscope").html(dailyHoroscope);
    });
    */
    $.ajax({
      crossOrigin: true,
      url : "http://horoscope-api.herokuapp.com/horoscope/today/"+this.id,
      type : "GET",
      success:function(data){
        
        var jsonObject = JSON.parse(data);

        var dailyHoroscope = jsonObject.horoscope;
        var dateToday = jsonObject.date;
        var zodiac = jsonObject.sunsign;
        $("#zodiac").html(zodiac);
        $("#date").html(dateToday);
        $("#horoscope").html(dailyHoroscope);
      }
    });
});
});
