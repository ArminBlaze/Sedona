function initMap() {
	var mapDiv = document.getElementById('map');
				
	var map = new google.maps.Map(mapDiv, {
//          center: {lat: 59.941, lng: 30.2996},
		center: new google.maps.LatLng(59.9389463, 30.3150017),
          zoom: 15,
					scrollwheel: false,
					mapTypeId: google.maps.MapTypeId.ROADMAP
        });
				
				
				var image = {
				url: 'img/map__bullet.svg',
				// This marker is 27 pixels wide by 27 pixels high.
				size: new google.maps.Size(50, 50),
				// The origin for this image is (0, 0).
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(14, 14)
			};
	
	
	/////
			
/////
				
				var myLatLng = new google.maps.LatLng(59.9389463, 30.3153090);
	
  			var beachMarker = new google.maps.Marker({
    		position: myLatLng,
   			map: map,
//				draggable: true,
   			icon: image
  			});
	
//					var marker = new google.maps.Marker({
//            position: myLatLng,
//            map: map,
//            draggable: true,
//            icon: "img/map__bullet.svg"
//        });
      }
			
				google.maps.event.addDomListener(window, 'load', initMap);
