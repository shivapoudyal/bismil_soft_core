

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});


// scroll back to top end
//index page start
$('.slider').owlCarousel({
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.Trecou').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navigation : true,
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

$('.partner').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navigation : true,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('.lct').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navigation : true,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
});

$('.review-video').owlCarousel({
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navigation : true,
    loop:false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
});
// "Why should you learn AWS? section's" {course page} start
$('.question-slider-section').owlCarousel({
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: false,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

//Corporate training

 
		$('.student-slider').owlCarousel({
			autoplay: false,
			autoplayTimeout: 4000,
			autoplayHoverPause: true,
			loop: true,
			margin: 10,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		})
 

 
		$('.corp-slider').owlCarousel({
			autoplay: false,
			autoplayTimeout: 4000,
			autoplayHoverPause: true,
			loop: true,
			margin: 10,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		})
 

 
		$('.faculty-slider').owlCarousel({
			autoplay: false,
			autoplayTimeout: 4000,
			autoplayHoverPause: true,
			loop: true,
			margin: 10,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		})
	 
 
		$('.mentor-ex-slider').owlCarousel({
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			navigation: true,
			loop: true,
			margin: 10,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 3
				},
				1000: {
					items: 1
				}
			}
		})
	 

	 
		$('.course-testy').owlCarousel({
			autoplay: false,
			autoplayTimeout: 4000,
			autoplayHoverPause: true,
			loop: true,
			nav: true,
			margin: 10,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		})
 






		function showCategory() {
 		
		$.ajax({
		"url":"/get_category_ajax",
		"type":"GET",
		"success":function(data,textStatus,jqXHR){
 
		if(data.length>0){
		var html = '';

		for(var i in data){
		html+=' <a class="dropdown-item" href="#" onclick="showCategoryCourse(this,'+data[i].id+')">'+data[i].category+'</a>';
		}
		$('.dropdown-menu').html(html);
		}

		}
		});


		}
		function showAllCategoryProgramss() {
 		alert('sdfds');
		$.ajax({
		"url":"/get_category_ajax",
		"type":"GET",
		"success":function(data,textStatus,jqXHR){
 
		if(data.length>0){
		var html = '';

		for(var i in data){
		//html+=' <a class="dropdown-item" href="#">'+data[i].category+'</a>';
		var image =''+(data[i].category_icons)+'';
		var img =''+unserialize+'('+image+')'+'';
		alert(img);
		html+='<div class="modal-course-list"><a href=""><img src="'+data[i].category_icons+'"><span>'+data[i].category+'</span></a></div>';
		}
		alert(html);
		$('.all-program-courses').html(html);
		}

		}
		});


		}

 function modalallcourse(evt, review1) {
	 
	  
	      var i, coursetabcontent, coursetablinks;
	      coursetabcontent = document.getElementsByClassName("coursetabcontent");
	      for (i = 0; i < coursetabcontent.length; i++) {
	        coursetabcontent[i].style.display = "none";
	      }
	      coursetablinks = document.getElementsByClassName("coursetablinks");
	      for (i = 0; i < coursetablinks.length; i++) {
	        coursetablinks[i].className = coursetablinks[i].className.replace(" active", "");
	      }
	      document.getElementById(review1).style.display = "block";
	      evt.currentTarget.className += " active";
		  
	    }
 
		
	    document.getElementById("defaultOpenprogram").click();
	    document.getElementById("modalcourse1").click();
 
		function showCategoryCourse(THIS,catid) {			 
			 var $this = $(THIS);
			 $(".cortablinks").removeClass("active");
			 
			 
    
				if (!$this.hasClass('active')) {
					$this.addClass('active');
				}
			  //$this.(".cortablinks").addClass("active");    
			  
				$.ajax({
				"url":"/get_category_course/"+catid,
				"type":"GET",
				"success":function(data,textStatus,jqXHR){
		 
				if(data.length>0){
			 $('.show-all-category-courses').html(data);
				/* 	htnl='<ul>';
				for(var i in data){			
						html +='<li><a href="courses/'+data[i].slug+'">'+data[i].title+'</a></li>';	 	 
					}
					htnl+='</ul>';
				alert(html);
				$('.popular-courses-description').html(html);
				 */
				}
				}
				});

				  /*  var i, cortabcontent, cortablinks;
				  cortabcontent = document.getElementsByClassName("cortabcontent");
				  for (i = 0; i < cortabcontent.length; i++) {
					cortabcontent[i].style.display = "none";
				  }
				  cortablinks = document.getElementsByClassName("cortablinks");
				  for (i = 0; i < cortablinks.length; i++) {
					cortablinks[i].className = cortablinks[i].className.replace(" active", "");
				  } */
				 // document.getElementById(modalcourse1).style.display = "block";
				  
				  
				  
				}
				
				
				function showCategoryMaster(THIS,catid) {			 
			 var $this = $(THIS);
			 $(".mptablinks").removeClass("active");
			 
			 
    
				if (!$this.hasClass('active')) {
					$this.addClass('active');
				}
			  //$this.(".cortablinks").addClass("active");    
			  
				$.ajax({
				"url":"/get_category_master/"+catid,
				"type":"GET",
				"success":function(data,textStatus,jqXHR){
		 
				if(data.length>0){
				$('.show-category-master').html(data);
				 
				}
				}
				}); 
				  
				  
				}
				
				$('.showCategoryMaster').on('click', function(){  

				$(".mptablinks").removeClass("active");
				$.ajax({
				"url":"/get_category_master/"+3,
				"type":"GET",
				"success":function(data,textStatus,jqXHR){

				if(data.length>0){
				$('.show-category-master').html(data);

				}
				}
				}); 
				});
 
function loadprograms(){
    var ap = document.getElementById("more-program-list");
    var mp = document.getElementById("mp");
    if(ap.style.display === 'flex'){
        ap.style.display = 'none';
        mp.innerHTML = '+';
    }
    else{
        ap.style.display = 'flex';
        mp.innerHTML = '-';
    }
}



// "Why should you learn AWS? section's" {course page} end


// video tab content review start
function review(evt, review) {
      var i, videotabcontent, videotablinks;
      videotabcontent = document.getElementsByClassName("videotabcontent");
      for (i = 0; i < videotabcontent.length; i++) {
        videotabcontent[i].style.display = "none";
      }
      videotablinks = document.getElementsByClassName("videotablinks");
      for (i = 0; i < videotablinks.length; i++) {
        videotablinks[i].className = videotablinks[i].className.replace(" active", "");
      }
      document.getElementById(review).style.display = "block";
      evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    //document.getElementById("defaultOpen").click();
// video tab content review end


// sticky section animation course page start
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}
// Call the loop for the first time
loop();
// Helper function
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
// sticky section animation course page end

//faqs and curriculum collapseble course page start
$(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
            $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });

        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
            $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
            $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    });
//faqs and curicullum collapseble course page end

// footer tab panel start
function openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
}
// footer tab panel end

// curriculum show more course page start
function loadmore(){
    var x = document.getElementById("morelessons");
    var y = document.getElementById("les");
    if(x.style.display === 'block'){
        x.style.display = 'none';
        y.innerHTML = '+ More Lessons';
    }
    else {
        x.style.display = 'block';
        y.innerHTML = '- Less Lessons';
    }
}
// curriculum show more course page end

// faqs show more course page start
function loadqueries(){
    var fq = document.getElementById("morefaqs");
    var qr = document.getElementById("mq");
    if(fq.style.display === 'block'){
        fq.style.display = 'none';
        qr.innerHTML = '+ More Queries';
    }
    else{
        fq.style.display = 'block';
        qr.innerHTML = '- Less Queries';
    }
}
// faqs show more course page end


//about section read more in course page end



//all course page all category heading start
function mycategory() {
    var cat = document.getElementById("myLinks");
    var caticon = document.getElementById("croptabicon");
    if (cat.style.display === "none") {
        cat.style.display = "block";
        caticon.classList.add("fa-angle-up");
        caticon.classList.remove("fa-angle-down");
    } else {
        cat.style.display = "none";
        caticon.classList.add("fa-angle-down");
        caticon.classList.remove("fa-angle-up");
    }
}
//all course page all category heading end

//all course page load more program start
function loadprogram() {
    var mp = document.getElementById("more-program");
    var sp = document.getElementById("more-show-program");
    var famore = document.getElementById("show-more-fa-program");
    if (mp.style.display == 'block') {
        mp.style.display = 'none';
        sp.innerHTML = 'Show More';
        famore.classList.add("fa-angle-down");
        famore.classList.remove("fa-angle-up");
    }
    else {
        mp.style.display = 'block';
        sp.innerHTML = 'Show Less';
        famore.classList.add("fa-angle-up");
        famore.classList.remove("fa-angle-down");
    }
};



$(document).on('click','.downloadModalPopup',function(){
	var THIS = $(this);
		var inquiry   = THIS.data('inquiry');		 
		$("#downloadModal").modal();
		$("#downloadModal .modal-heading").html(inquiry);
});
 
  

 

$.fn.dropvalidate=function(t){
	$(".valid_error").remove();
	var status = 0;
	//var namepatter = /^([a-z]+\s)*[a-z]+$/;
//	var namepatter = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
	//alert(namepatter.test($(t).find("input[name=\"iq_name\"]").val()));
	if($(t).find("input[name=\"iq_name\"]").length==1 && $(t).find("input[name=\"iq_name\"]").val()=="" ){
		 
		$(t).find("input[name=\"iq_name\"]").after("<div class='valid_error'>Name is mandatory.</div>")
		status = 1;
	}
	if($(t).find("input[name=\"iq_email\"]").length==1 && $(t).find("input[name=\"iq_email\"]").val()==""){
		$(t).find("input[name=\"iq_email\"]").after("<div class='valid_error'>Email is mandatory.</div>")
		status = 1;
	}
	if($(t).find("input[name=\"iq_mobile\"]").length==1 && $(t).find("input[name=\"iq_mobile\"]").val()==""){
		$(t).find("input[name=\"iq_mobile\"]").after("<div class='valid_error'>Mobile is mandatory.</div>")
		status = 1;
	}
	
	if($(t).find("input[name=\"code\"]").length==1 && $(t).find("input[name=\"code\"]").val()==""){
		$(t).find("input[name=\"code\"]").after("<div class='valid_error'>Code is mandatory.</div>")
		status = 1;
	}
	 if($(t).find("input[name=\"iq_course\"]").length==1 && $(t).find("input[name=\"iq_course\"]").val()==""){
		$(t).find("input[name=\"iq_course\"]").after("<div class='valid_error'>Course is mandatory.</div>")
		status = 1;
	} 
	if($(t).find("textarea[name=\"iq_message\"]").length==1 && $(t).find("textarea[name=\"iq_message\"]").val()==""){
		$(t).find("textarea[name=\"iq_message\"]").after("<div class='valid_error'>message is mandatory.</div>")
		status = 1;
	}
	 
	
	if($(t).find("input[name=\"iq_city\"]").length==1 && $(t).find("input[name=\"iq_city\"]").val()==""){
		$(t).find("input[name=\"iq_city\"]").after("<div class='valid_error'>Enter City.</div>")
		status = 1;
	}
	if($(t).find("select[name=\"iq_participant\"]").length==1 && $(t).find("select[name=\"iq_participant\"]").val()==""){
		$(t).find("select[name=\"iq_participant\"]").after("<div class='valid_error'>Select Training Mode.</div>")
		status = 1;
	}
	 		
	if($(t).find(".hidden_human").length==1 && $(t).find(".hidden_human").val()==""){
		$(t).find(".hidden_human").after("<div class='valid_error'>Robot check is required.</div>")
		status = 1;
	}
	if(status){
		return false;
	}
	return true;
}



$(".iq_form_sidebar").submit(function(e){
 
	e.preventDefault();
	//mainSpinner.start();
	if(!$.fn.dropvalidate(this)){
		//mainSpinner.stop();			 
		return false;	
	}
	
	/*else{
		//mainSpinner.stop();		
		//$(".modal-message").modal();
		//$(".modal-message .modal-title").html("Enquiry Submitted.");
		//$(".modal-message .modal-body").html("<p class='text-center'>Thank you for placing your enquiry<br/>We will get back to you soon.</p>");
	}*/
	var data=$(this).serialize();
 
		$.ajax({
			 url: "/inquiryForm",
			data: data,
			type:"POST",			 
			success:function(resp){
				 
				if(resp.status==true){
					$('.successmessage').html("<h4 class='text-center'>Thank you for placing your enquiry<br/>We will get back to you soon.</h4>");
					//$(".modal-message").modal();
					//$(".modal-message .modal-title").html("Enquiry Submitted.");
					//$(".modal-message .modal-body").html("<p class='text-center'>Thank you for placing your enquiry<br/>We will get back to you soon.</p>");
					//mainSpinner.stop();
					//document.forms["iq_form_sidebar"].reset(); 
				}else{
					$('.errormessage').html("<p class='text-center'>Some Errot Please Tray again.</p>");
				}
			}
		});
});


 

$.fn.franchisevalidate=function(t){
	$(".valid_error").remove();
	var status = 0;	
	if($(t).find("input[name=\"fra_city\"]").length==1 && $(t).find("input[name=\"fra_city\"]").val()=="" ){
		 
		$(t).find("input[name=\"fra_city\"]").after("<div class='valid_error'>City is mandatory.</div>")
		status = 1;
	}
	if($(t).find("input[name=\"fra_name\"]").length==1 && $(t).find("input[name=\"fra_name\"]").val()==""){
		$(t).find("input[name=\"fra_name\"]").after("<div class='valid_error'>Name is mandatory.</div>")
		status = 1;
	}
	if($(t).find("input[name=\"fra_email\"]").length==1 && $(t).find("input[name=\"fra_email\"]").val()==""){
		$(t).find("input[name=\"fra_email\"]").after("<div class='valid_error'>Email is mandatory.</div>")
		status = 1;
	}
	
	if($(t).find("input[name=\"code\"]").length==1 && $(t).find("input[name=\"code\"]").val()==""){
		$(t).find("input[name=\"code\"]").after("<div class='valid_error'>Code is mandatory.</div>")
		status = 1;
	}
	 if($(t).find("input[name=\"fra_mobile\"]").length==1 && $(t).find("input[name=\"fra_mobile\"]").val()==""){
		$(t).find("input[name=\"fra_mobile\"]").after("<div class='valid_error'>Mobile is mandatory.</div>")
		status = 1;
	} 
	if($(t).find("textarea[name=\"fra_address\"]").length==1 && $(t).find("textarea[name=\"fra_address\"]").val()==""){
		$(t).find("textarea[name=\"fra_address\"]").after("<div class='valid_error'>Address is mandatory.</div>")
		status = 1;
	}
	 
	 
	if($(t).find("select[name=\"fra_state\"]").length==1 && $(t).find("select[name=\"fra_state\"]").val()==""){
		$(t).find("select[name=\"fra_state\"]").after("<div class='valid_error'>Select State.</div>")
		status = 1;
	} 		
	 
	if(status){
		return false;
	}
	return true;
}


$(".iq_franchise").submit(function(e){
 
	e.preventDefault();	 
	if(!$.fn.franchisevalidate(this)){	 		 
		return false;	
	}
	 
	var data=$(this).serialize();
 
		$.ajax({
			 url: "/franchiseForm",
			data: data,
			type:"POST",			 
			success:function(resp){
				 
				if(resp.status==true){
					$('.successmessage').html("<h5>Thank you for placing your franchise enquiry.</h5>");					 
				}else{
					$('.errormessage').html("<p class='text-center'>Some Errot Please Tray again.</p>");
				}
			}
		});
});

 

$.fn.scholarshipvalidate=function(t){
	$(".valid_error").remove();
	var status = 0;	
	if($(t).find("input[name=\"fra_city\"]").length==1 && $(t).find("input[name=\"fra_city\"]").val()=="" ){
		 
		$(t).find("input[name=\"fra_city\"]").after("<div class='valid_error'>City is mandatory.</div>")
		status = 1;
	}
	if($(t).find("input[name=\"fra_name\"]").length==1 && $(t).find("input[name=\"fra_name\"]").val()==""){
		$(t).find("input[name=\"fra_name\"]").after("<div class='valid_error'>Name is mandatory.</div>")
		status = 1;
	}
	if($(t).find("input[name=\"fra_email\"]").length==1 && $(t).find("input[name=\"fra_email\"]").val()==""){
		$(t).find("input[name=\"fra_email\"]").after("<div class='valid_error'>Email is mandatory.</div>")
		status = 1;
	}
	
	if($(t).find("input[name=\"code\"]").length==1 && $(t).find("input[name=\"code\"]").val()==""){
		$(t).find("input[name=\"code\"]").after("<div class='valid_error'>Code is mandatory.</div>")
		status = 1;
	}
	 if($(t).find("input[name=\"fra_mobile\"]").length==1 && $(t).find("input[name=\"fra_mobile\"]").val()==""){
		$(t).find("input[name=\"fra_mobile\"]").after("<div class='valid_error'>Mobile is mandatory.</div>")
		status = 1;
	} 
	if($(t).find("textarea[name=\"fra_address\"]").length==1 && $(t).find("textarea[name=\"fra_address\"]").val()==""){
		$(t).find("textarea[name=\"fra_address\"]").after("<div class='valid_error'>Address is mandatory.</div>")
		status = 1;
	}
	 
	 
	if($(t).find("select[name=\"fra_state\"]").length==1 && $(t).find("select[name=\"fra_state\"]").val()==""){
		$(t).find("select[name=\"fra_state\"]").after("<div class='valid_error'>Select State.</div>")
		status = 1;
	} 		
	 
	if(status){
		return false;
	}
	return true;
}


$(".iq_scholarship").submit(function(e){
 
	e.preventDefault();	 
	if(!$.fn.scholarshipvalidate(this)){	 		 
		return false;	
	}
	 
	var data=$(this).serialize();
 
		$.ajax({
			 url: "/franchiseForm",
			data: data,
			type:"POST",			 
			success:function(resp){
				 
				if(resp.status==true){
					$('.successmessage').html("<h5>Thank you for placing your franchise enquiry.</h5>");					 
				}else{
					$('.errormessage').html("<p class='text-center'>Some Errot Please Tray again.</p>");
				}
			}
		});
});

 
//media query start
/* function customedia(x) {
  if (x.matches) {
   // document.getElementById("banner-desktop").style.display = "none";
    //document.getElementById("header-top").style.display = "none";
    //document.getElementById("trending-desktop").style.display = "none";
    
	// document.getElementById("trending-desktop").remove();
 
 
   // document.getElementById("services").style.display = "none";
   // document.getElementById("Corporatez").style.display = "none";
   // document.getElementById("lp").style.display = "none";
    //document.getElementById("bottom-fixed").style.display = "none";
  } else {
   //document.getElementById("banner-desktop").style.display = "block";
  // document.getElementById("header-top").style.display = "block";
   //document.getElementById("services").style.display = "block";
  // document.getElementById("Corporatez").style.display = "block";
  // document.getElementById("lp").style.display = "block";
  // document.getElementById("bottom-fixed").style.display = "block";
  }
}
var x = window.matchMedia("(max-width: 440px)")
customedia(x) 
x.addListener(customedia);
 */
//media query end


$(window).resize(function(){
 
   var width = $(window).width();
 
   if(width < 768){
	    $('#mobile-modal-course-categories').show();
		$('#modal-course-categories').hide();
		//$('#modal-course-categories').remove();
		$('#banner-desktop').hide();
		$('#header-top').hide();
		$('#trending-desktop').hide();
		$('#services').hide();
		$('#Corporatez').hide();
		$('#lp').hide();
		$('#bottom-fixed').hide();
		$('#mobile-icon-disable').hide();
		$('#mobile-corporates').show();  
		$('#master-program-banner').hide();  
   }else{
	    $('#modal-course-categories').show();
	    $('#master-program-banner').show();
	   	$('#banner-desktop').show();
	   	$('#header-top').show();
	   	$('#trending-desktop').show();
	   	$('#services').show();
	   	$('#Corporatez').show();
	   	$('#lp').show();
	   	$('#bottom-fixed').show();
	   	$('#mobile-icon-disable').show();
	    $('#mobile-modal-course-categories').hide();
	    //$('#mobile-modal-course-categories').remove();
	    $('#mobile-corporates').hide();
   }
}).resize();
 
 /* 
$(window).resize(function resize(){
 
   var width = $(window).width();
   alert(width);
   if(width < 767){	 
		$('#mobile-modal-course-categories').show();
		$('#modal-course-categories').hide();
		$('#banner-desktop').hide();
		$('#header-top').hide();
		$('#trending-desktop').hide();
		$('#services').hide();
		$('#Corporatez').hide();
		$('#lp').hide();
		$('#bottom-fixed').hide();
		$('#mobile-icon-disable').hide();
		$('#mobile-corporates').show();      
       
       
       
   }else{
	   $('#modal-course-categories').show();
	   	$('#banner-desktop').show();
	   	$('#header-top').show();
	   	$('#trending-desktop').show();
	   	$('#services').show();
	   	$('#Corporatez').show();
	   	$('#lp').show();
	   	$('#bottom-fixed').show();
	   	$('#mobile-icon-disable').show();
	    $('#mobile-modal-course-categories').hide();
	    $('#mobile-corporates').hide();
		 
		
   }
}).trigger('resize'); */
 
//trigger the resize event on page load.


 
//all course page load more program end
/* 

function wireUpWindowUnloadEvents(){
	$(document).on('keypress',function(e){
		if(e.keyCode==116||e.keyCode==8){validNavigation=true;}});
		
		$(document).on("click","a",function(){
			validNavigation=true;});
			
			$(document).on("submit","form",function(){
				
				validNavigation=true;});
				
				$(document).bind("click","input[type=submit]",function(){
					
					validNavigation=true;});
					$(document).bind("click","button[type=submit]",function(){
						
						validNavigation=true;});}
$(document).ready(function(){
	wireUpWindowUnloadEvents();
	var mobCode=$("#mobile_country_code").val();
	$('input[name="data[code]"]').each(function(){
		if(!$(this).val()){$(this).val(mobCode);
		}});
		});
		
		
		
		var telInputMCC=$(".mobile_country_code");
		telInputMCC.intlTelInput('setNumber',userPhone);
		$('#mobile_country_code').val(country_code);
		$('.mobile_country_code').val(phone);
		$("#hiddenmobilecountrycodews").val(country_code);
		$("#hiddenmobilecountrycode").val(country_code);if(page_name=="jgp_page"){if(country_code=="+91"){$(".popusrphnjgp").val(phone);}}
if(page_name=="internship_page"){
	
	$(".popusrphninternship").val(phone);var countryValue=$('.number_prefix').find("option[data-phone-code='"+country_code+"']").val();$('.number_prefix').val(countryValue);$('.prefix_code').text(country_code);}}}}
 */