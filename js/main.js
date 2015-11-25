/*$(document).ready(function(){
	var altura = $('.Barra').offset().top;
	$(window).on('scroll', function(){
		if ($(window).scrollTop() > altura){
			$('.Barra').addClass('Barra-fixed');
		} else {
			$('.Barra').removeClass('Barra-fixed');
		}
	});
});*/

 function startTime()
        {
            today=new Date();
            h=today.getHours();
            m=today.getMinutes();
            s=today.getSeconds();
            m=checkTime(m);
            s=checkTime(s);
            meridian="a.m.";

            nday=today.getDate();
            day=today.getDay();
            month=today.getMonth();
            year=today.getFullYear();
      
            switch(h){
            	case 13:
            		h = 1;
            		meridian="p.m.";
            		break;
            	case 14:
            		h = 2;
            		meridian="p.m.";
            		break;
            	case 15:
            		h = 3;
            		meridian="p.m.";
            		break;
            	case 16:
            		h = 4;
            		meridian="p.m.";
            		break;
            	case 17:
            		h = 5;
            		meridian="p.m.";
            		break;
            	case 18:
            		h = 6;
            		meridian="p.m.";
            		break;
            	case 19:
            		h = 7;
            		meridian="p.m.";
            		break;
            	case 20:
            		h = 8;
            		meridian="p.m.";
            		break;
            	case 21:
            		h = 9;
            		meridian="p.m.";
            		break;
            	case 22:
            		h = 10;
            		meridian="p.m.";
            		break;
            	case 23:
            		h = 11;
            		meridian="p.m.";
            		break;
            	case 00:
            		h = 12;
            		meridian="a.m.";
            		break;
            }
            switch(day){
                  case 0:
                        day="Domingo";
                        break;
                  case 1:
                        day="Lunes";
                        break;
                  case 2:
                        day="Martes";
                        break;
                  case 3:
                        day="Miércoles";
                        break;
                  case 4:
                        day="Jueves";
                        break;
                  case 5:
                        day="Viernes";
                        break;
                  case 6:
                        day="Sábado";
                        break;
            }
            switch(month){
                  case 0:
                        month="Ene.";
                        break;
                  case 1:
                        month="Feb.";
                        break;
                  case 2:
                        month="Mar.";
                        break;
                  case 3:
                        month="Abril";
                        break;
                  case 4:
                        month="Mayo";
                        break;
                  case 5:
                        month="Jun.";
                        break;
                  case 6:
                        month="Jul.";
                        break;
                  case 7:
                        month="Ago.";
                        break;
                  case 8:
                        month="Sep.";
                        break;
                  case 9:
                        month="Oct.";
                        break;
                  case 10:
                        month="Nov.";
                        break;
                  case 11:
                        month="Dic.";
                        break;
            }
            hoy=" "+day+" "+nday+" de "+month+" del "+year;
            hora=h+":"+m+" "+meridian/*+"<br/>"*/;
            // alert(hoy);
            document.getElementById('fecha').innerHTML=hoy;
            document.getElementById('reloj').innerHTML=hora;
            t=setTimeout('startTime()',500);
        }
        function checkTime(i)
        {
          	if (i<10) {i="0" + i;}return i;}
            window.onload=function(){startTime();
        }

