$(document).ready(function(){var a=$("#filterOptions li.active a").attr("class"),i=$("ul.ourHolder"),t=i.clone();$("#filterOptions li a").click(function(a){$("#filterOptions li").removeClass("active");var e=$(this).attr("class");if($(this).parent().addClass("active"),"all"==e)var l=t.find("li");else var l=t.find("li[data-type="+e+"]");return i.quicksand(l,{duration:800,easing:"easeInOutQuad"}),!1})});