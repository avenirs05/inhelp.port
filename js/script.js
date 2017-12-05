if ($(window).width() <= '420') {
console.log('<420');
function init() {
	var mapOptions = {
		center: new google.maps.LatLng(55.76858499999999,37.591143999999986),
		zoom: 15,
		gestureHandling: 'auto',
		fullscreenControl: false,
		zoomControl: false,
		disableDoubleClickZoom: true,
		mapTypeControl: false,
		scaleControl: true,
		scrollwheel: false,
		streetViewControl: false,
		draggable : true,
		clickableIcons: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"},{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"saturation":"-100"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#a9a9a9"}]}]
	}
	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var locations = [
		{"title":"Inhelp","address":"ул. Гашека, 8/10, стр.8, Москва, Россия","desc":"","tel":"","int_tel":"","email":"","web":"","web_formatted":"","open":"","time":"","lat":55.76858499999999,"lng":37.591143999999986,"vicinity":"ул. Гашека, 8/10, стр.8, Москва, Россия","open_hours":[],"marker":{"url":"images/marker.png","scaledSize":{"width":26,"height":37,"f":"px","b":"px"},"origin":{"x":0,"y":0},"anchor":{"x":26,"y":37}},"iw":{"address":true,"desc":true,"email":true,"enable":true,"int_tel":true,"open":true,"open_hours":true,"photo":true,"tel":true,"title":true,"web":true}}
	];
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			icon: locations[i].marker,
			position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
			map: map,
			title: locations[i].title,
			address: locations[i].address,
			desc: locations[i].desc,
			tel: locations[i].tel,
			int_tel: locations[i].int_tel,
			vicinity: locations[i].vicinity,
			open: locations[i].open,
			open_hours: locations[i].open_hours,
			photo: locations[i].photo,
			time: locations[i].time,
			email: locations[i].email,
			web: locations[i].web,
			iw: locations[i].iw
		});
		markersArray.push(marker);

		if (locations[i].iw.enable === true){
			bindInfoWindow(marker, map, locations[i]);
		}
	}
}

}
else {
	console.log('>420');
	function init() {
	var mapOptions = {
		center: new google.maps.LatLng(55.76775040399098,37.57773294665526),
		zoom: 15,
		gestureHandling: 'auto',
		fullscreenControl: false,
		zoomControl: false,
		disableDoubleClickZoom: true,
		mapTypeControl: false,
		scaleControl: true,
		scrollwheel: false,
		streetViewControl: false,
		draggable : true,
		clickableIcons: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"},{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"saturation":"-100"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#a9a9a9"}]}]
	}
	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var locations = [
		{"title":"Inhelp","address":"ул. Гашека, 8/10, стр.8, Москва, Россия","desc":"","tel":"","int_tel":"","email":"","web":"","web_formatted":"","open":"","time":"","lat":55.76858499999999,"lng":37.591143999999986,"vicinity":"ул. Гашека, 8/10, стр.8, Москва, Россия","open_hours":[],"marker":{"url":"images/marker.png","scaledSize":{"width":26,"height":37,"f":"px","b":"px"},"origin":{"x":0,"y":0},"anchor":{"x":26,"y":37}},"iw":{"address":true,"desc":true,"email":true,"enable":true,"int_tel":true,"open":true,"open_hours":true,"photo":true,"tel":true,"title":true,"web":true}}
	];
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			icon: locations[i].marker,
			position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
			map: map,
			title: locations[i].title,
			address: locations[i].address,
			desc: locations[i].desc,
			tel: locations[i].tel,
			int_tel: locations[i].int_tel,
			vicinity: locations[i].vicinity,
			open: locations[i].open,
			open_hours: locations[i].open_hours,
			photo: locations[i].photo,
			time: locations[i].time,
			email: locations[i].email,
			web: locations[i].web,
			iw: locations[i].iw
		});
		markersArray.push(marker);

		if (locations[i].iw.enable === true){
			bindInfoWindow(marker, map, locations[i]);
		}
	}
}
}
function send_form(id) {                                    // ------------------------------------------- send mail function
    var msg   = $('#'+id+'').serialize();
    var e   =  msg;
    var msg2 = msg.split('&');
    var msg3 = msg2[1].split('=');
    if (!msg3[1]=='') {
        $.ajax({
            type: "POST",
            url: "include/send.php",
            data: e,
            success: function(e) {
				switch(id) {
				  case 'back_call_modal_form':
					ga('send','event','forms','call_back');
					yaCounter44925265.reachGoal('call_back');
					break;
				  case 'spor_form':
					ga('send','event','forms','decision_dispute');
					yaCounter44925265.reachGoal('decision_dispute');
					break;
				  case 'example_form':
					ga('send','event','forms','example');
					yaCounter44925265.reachGoal('example');
					break;
				  case 'example2_form':
					ga('send','event','forms','problem');
					yaCounter44925265.reachGoal('problem');
					break;
				  case 'cnt5_form':
					ga('send','event','forms','start_decision');
					yaCounter44925265.reachGoal('start_decision');
					break;
				  case 'example4_form':
					ga('send','event','forms','get_list');
					yaCounter44925265.reachGoal('get_list');
					break;
				  case 'cnt9_form':
					ga('send','event','forms','decision_dispute2');
					yaCounter44925265.reachGoal('decision_dispute2');
					break;
				  case 'example3_form':
					ga('send','event','forms','send_request');
					yaCounter44925265.reachGoal('send_request');
					break;
				}
                $(".close").click(); 
				$("#thx").click();
            },
            error: function(e, c) {
                alert("Возникла ошибка: " + e.responseCode)
            }
        });
    } else {
        $('#'+id+'').find('[name = "phone_f"]').css({
            'border-color' : 'red'
        });
    }
};

function send_form2(id) {                                    // ------------------------------------------- send mail function
	var msg   = $('#'+id+'').serialize();
	var e   =  msg;
	var msg2 = msg.split('&');
	var msg3 = msg2[1].split('=');
	if (!msg3[1]=='') {
		$.ajax({
			type: "POST",
			url: "include/send2.php",
			data: e,
			success: function(e) {
				$(".close").click();
				$("#thx").click();
			},
			error: function(e, c) {
				alert("Возникла ошибка: " + e.responseCode)
			}
		});
	} else {
		$('#'+id+'').find('[name = "phone_f"]').css({
			'border-color' : 'red'
		});
	}
};

function send_withfile(id) {                                // ------------------------------------------- send mail function with file
	var formData = new FormData($('#'+id+'')[0]);
	var msg   = $('#'+id+'').serialize();
	var msg2 = msg.split('&');
	var msg3 = msg2[2].split('=');
	console.log(msg3);
	if (!msg3[1]=='') {
		$.ajax({
			type: "POST",
			processData: false,
			contentType: false,
			url: "include/contacts.php",
			data:  formData,
			success: function(formData) {
				$(".close").click();
				$("#thx").click();
			},
			error: function(e, c) {
				alert("Возникла ошибка: " + e.responseCode)
			}
		});
	} else {
		$('#'+id+'').find('[name = "contactFF"]').css({
			'border-color' : 'red'
		});
	}
};

$(".icon-s-file").click(function () {                       // ------------------------------ for adding file
	var $i_id = $(this).attr("id");
	console.log($i_id);
	var $p_id = $i_id + "_file";
	console.log($p_id);
	var $ip_id = $p_id + "_input";
	console.log($ip_id);
	$('#'+$ip_id+'').click();
	$('#'+$ip_id+'').change(function () {
		$('#'+$p_id+'').text("Файл прикреплен");
	});

});
$(".link_file").click(function () {
	var $p_id = $(this).attr("id");
	var $i_id = $p_id + "_input";
	$('#'+$i_id+'').click();
	$('#'+$i_id+'').change(function () {
		$('#'+$p_id+'').text("Файл прикреплен");
	});
});

$('input[name=phone_f]').mask('+7 ( 999 ) 999-99-99');      // -------------------------------------------  mask for phone
$('input[name=contactFF]').mask('+7 ( 999 ) 999-99-99');

$('input.name_input').keypress(function (key) {           // ------------------------------------------- value for name input
    if (key.charCode < 48 || key.charCode > 57) return true;
    return false;
});

$("#answers").owlCarousel({                               // -------------------------------------------  carousel
    loop: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    nav: true,
    navText: ['<i class="icon icon-s-link_left">', '<i class="icon icon-s-link_right">'],
    responsive: {
        0: {
            items: 1
        },
        450: {
            items: 1
        },
        1100: {
            items: 1
        }
    }
});
$("#answers2").owlCarousel({                               // -------------------------------------------  carousel
    loop: true,
    margin: 20,
    mouseDrag: true,
    touchDrag: true,
    nav: true,
    navText: ['<i class="icon icon-s-link_left">', '<i class="icon icon-s-link_right">'],
    responsive: {
        0: {
            items: 1
        },
        450: {
            items: 2
        },
		768: {
			items: 3
		},
        1100: {
            items: 4
        }
    }
});

$("body").on('click', 'a.go_to', function(e){               // -------------------------------------------  scroll function
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});

wow = new WOW(                                              // ------------------------------------------- WOW initialization
    {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    }
)
wow.init();
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': ""
});


$("img.lazy").lazyload();                                   // ------------------------------------------- lazyload for images
$(".check_block").click(function() {
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).parent().siblings(".btn_group").find('button').attr('disabled','disabled');
    }
    else{
        $(this).addClass('active');
        $(this).parent().siblings(".btn_group").find('button').removeAttr( "disabled" );
    }
});

//===================== type text
$(function () {
    var jqBar = $('.cnt7_title p');
    var jqBarStatus = true;
    $(window).scroll(function() {
        var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
        if (scrollEvent && jqBarStatus) {
            jqBarStatus = false;
            $(".cnt7_title p").typedText("Защищаем права клиентов c 2008 года", "slow");
        }
    });
});


// ========================= map
	google.maps.event.addDomListener(window, 'load', init);
var map, markersArray = [];

function bindInfoWindow(marker, map, location) {
	google.maps.event.addListener(marker, 'click', function() {
		function close(location) {
			location.ib.close();
			location.infoWindowVisible = false;
			location.ib = null;
		}

		if (location.infoWindowVisible === true) {
			close(location);
		} else {
			markersArray.forEach(function(loc, index){
				if (loc.ib && loc.ib !== null) {
					close(loc);
				}
			});

			var boxText = document.createElement('div');
			boxText.style.cssText = 'background: #fff;';
			boxText.classList.add('md-whiteframe-2dp');

			function buildPieces(location, el, part, icon) {
				if (location[part] === '') {
					return '';
				} else if (location.iw[part]) {
					switch(el){
						case 'photo':
							if (location.photo){
								return '<div class="iw-photo" style="background-image: url(' + location.photo + ');"></div>';
							} else {
								return '';
							}
							break;
						case 'iw-toolbar':
							return '<div class="iw-toolbar"><h3 class="md-subhead">' + location.title + '</h3></div>';
							break;
						case 'div':
							switch(part){
								case 'email':
									return '<div class="iw-details"><i class="material-icons" style="color:#4285f4;"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><span><a href="mailto:' + location.email + '" target="_blank">' + location.email + '</a></span></div>';
									break;
								case 'web':
									return '<div class="iw-details"><i class="material-icons" style="color:#4285f4;"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><span><a href="' + location.web + '" target="_blank">' + location.web_formatted + '</a></span></div>';
									break;
								case 'desc':
									return '<label class="iw-desc" for="cb_details"><input type="checkbox" id="cb_details"/><h3 class="iw-x-details">Details</h3><i class="material-icons toggle-open-details"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><p class="iw-x-details">' + location.desc + '</p></label>';
									break;
								default:
									return '<div class="iw-details"><i class="material-icons"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><span>' + location[part] + '</span></div>';
									break;
							}
							break;
						case 'open_hours':
							var items = '';
							if (location.open_hours.length > 0){
								for (var i = 0; i < location.open_hours.length; ++i) {
									if (i !== 0){
										items += '<li><strong>' + location.open_hours[i].day + '</strong><strong>' + location.open_hours[i].hours +'</strong></li>';
									}
									var first = '<li><label for="cb_hours"><input type="checkbox" id="cb_hours"/><strong>' + location.open_hours[0].day + '</strong><strong>' + location.open_hours[0].hours +'</strong><i class="material-icons toggle-open-hours"><img src="//cdn.mapkit.io/v1/icons/keyboard_arrow_down.svg"/></i><ul>' + items + '</ul></label></li>';
								}
								return '<div class="iw-list"><i class="material-icons first-material-icons" style="color:#4285f4;"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><ul>' + first + '</ul></div>';
							} else {
								return '';
							}
							break;
					}
				} else {
					return '';
				}
			}

			boxText.innerHTML =
				buildPieces(location, 'photo', 'photo', '') +
				buildPieces(location, 'iw-toolbar', 'title', '') +
				buildPieces(location, 'div', 'address', 'location_on') +
				buildPieces(location, 'div', 'web', 'public') +
				buildPieces(location, 'div', 'email', 'email') +
				buildPieces(location, 'div', 'tel', 'phone') +
				buildPieces(location, 'div', 'int_tel', 'phone') +
				buildPieces(location, 'open_hours', 'open_hours', 'access_time') +
				buildPieces(location, 'div', 'desc', 'keyboard_arrow_down');

			var myOptions = {
				alignBottom: true,
				content: boxText,
				disableAutoPan: true,
				maxWidth: 0,
				pixelOffset: new google.maps.Size(-140, -40),
				zIndex: null,
				boxStyle: {
					opacity: 1,
					width: '280px'
				},
				closeBoxMargin: '0px 0px 0px 0px',
				infoBoxClearance: new google.maps.Size(1, 1),
				isHidden: false,
				pane: 'floatPane',
				enableEventPropagation: false
			};

			location.ib = new InfoBox(myOptions);
			location.ib.open(map, marker);
			location.infoWindowVisible = true;
		}
	});
}



