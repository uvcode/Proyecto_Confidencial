$(document).ready(function(){
    $("ul#tabs li").click(function(e){
        if (!$(this).hasClass("activado")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("ul#tabs li.activado").removeClass("activado");
            $(this).addClass("activado");
            $("ul#tab li.activado").removeClass("activado");
            $("ul#tab li:nth-child("+nthChild+")").addClass("activado");
        }
    });
});