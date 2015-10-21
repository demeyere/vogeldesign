// jQuery for demeyere.com

$(document).ready(function() {



// demeyere_fix_targets
// add target="_blank" to other sites and .pdf files so they open in a new window
// author: @demeyere
// revised: 2014-02-12 08:53 

function demeyere_fix_targets(){
$("a[href^='http']").not("[href*='"+location.hostname+"']").attr('target','_blank');
$("a[href$='pdf']").attr('target','_blank');  
$("a[href$='PDF']").attr('target','_blank');  
};

demeyere_fix_targets();



// `.load` demeyere.com sidebars because of delay
// author: @demeyere
// revised: 2014-02-12 08:53 
// requires: demeyere_fix_targets()

$('#rss_sidebar').load('/sidebar/sidebar-inner.php',demeyere_fix_targets);
$('#rss_sidebar_short').load('/sidebar/sidebar-inner-short.php',demeyere_fix_targets);



// add classes to blockquotes that have the appropriate keywords
// 2012-06-06 09:40  
// fixme

$("blockquote:contains('Note: ')").addClass("note");
$("blockquote:contains('Advantages: ')").addClass("note");
$("blockquote:contains('Warning: ')").addClass("warning");
$("blockquote:contains('Disadvantages: ')").addClass("warning");
$("blockquote:contains('Next Action: ')").addClass("warning");
$("blockquote:contains('Deprecated: ')").addClass("deprecated");



// add loads for METAR codes on /radio page
// 2014-06-02 21:51 
$("#metar-kmic").load( "/metar.php?kmic" );
$("#metar-kmsp").load( "/metar.php?kmsp" );

// loads current plain text calendar into textarea and 
// hides the caption to the link for the current plain text calendar
// 2014-06-06 07:49 
$("#plain-text-calendar").load( "/plain-text-calendar.php", function(){
  $("p#plain-text-calendar-caption").remove();
});


}); // end $(document).ready(function()
