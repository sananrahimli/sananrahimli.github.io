jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initcarousel-0\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    if ( typeof html5Lightbox === "undefined" )
    {
        html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            skinsfoldername:"",
            jsfolder:jsFolder,
            barheight:64,
            showtitle:true,
            showdescription:false,
            shownavigation:false,
            thumbwidth:80,
            thumbheight:60,
            thumbtopmargin:12,
            thumbbottommargin:8,
            titlebottomcss:'{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}',
            descriptionbottomcss:'{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}'
        });
    }
    jQuery("#amazingcarousel-0").amazingcarousel({
        jsfolder:jsFolder,
        width:360,
        height:270,
        skinsfoldername:"",
        interval:2000,
        itembottomshadowimagetop:99,
        donotcrop:false,
        random:false,
        showhoveroverlay:false,
        rownumber:1,
        height:270,
        arrowheight:32,
        showbottomshadow:false,
        itembackgroundimagewidth:100,
        imageheight:270,
        skin:"Testimonial",
        responsive:true,
        lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
        enabletouchswipe:true,
        navstyle:"none",
        backgroundimagetop:-40,
        arrowstyle:"mouseover",
        bottomshadowimagetop:95,
        hidehoveroverlayontouch:false,
        continuous:false,
        itembackgroundimagetop:0,
        hoveroverlayimage:"hoveroverlay-64-64-5.png",
        itembottomshadowimage:"itembottomshadow-100-98-3.png",
        lightboxshowdescription:false,
        width:360,
        navswitchonmouseover:false,
        showhoveroverlayalways:false,
        transitioneasing:"easeInQuart",
        lightboxshownavigation:false,
        showitembackgroundimage:false,
        itembackgroundimage:"",
        playvideoimagepos:"center",
        circular:false,
        arrowimage:"arrows-32-32-2.png",
        scrollitems:1,
        direction:"horizontal",
        lightboxdescriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
        supportiframe:false,
        navimage:"bullet-12-12-1.png",
        backgroundimagewidth:110,
        showbackgroundimage:false,
        lightboxbarheight:64,
        showplayvideo:false,
        spacing:4,
        lightboxthumbwidth:80,
        navdirection:"horizontal",
        itembottomshadowimagewidth:100,
        backgroundimage:"",
        lightboxthumbtopmargin:12,
        autoplay:true,
        lightboxnogroup:false,
        arrowwidth:32,
        transparent:false,
        continuousduration:2500,
        bottomshadowimage:"bottomshadow-110-95-0.png",
        scrollmode:"item",
        navmode:"page",
        lightboxshowtitle:true,
        lightboxthumbbottommargin:8,
        arrowhideonmouseleave:1000,
        showitembottomshadow:false,
        lightboxthumbheight:60,
        navspacing:4,
        pauseonmouseover:false,
        imagefillcolor:"FFFFFF",
        playvideoimage:"playvideo-64-64-0.png",
        transitionduration:1000,
        visibleitems:1,
        imagewidth:360,
        usescreenquery:false,
        bottomshadowimagewidth:110,
        screenquery:{
	mobile: {
		screenwidth: 600,
		visibleitems: 1
	}
},
        navwidth:12,
        loop:0,
        navheight:12
    });
});