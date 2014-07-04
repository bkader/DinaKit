/*!
 *  Dinakit Framework 1.0 by @IanGraphics - http://dinakit.itemplat.es/
 *  author: Kader Bouyakoub - author uri: https://github.com/bkader
 *  License - "Don't Be A Dick License" - DBAD by philsturgeon (http://www.dbad-license.org/)
 */

(function(e){

    // close alerts
    e(document).on("click",".alert-close",function(t){
        e(this).closest(".alert").slideUp(150,function(){
            e(this).remove()
        });
        t.preventDefault()
    });

    // close modals
    e(document).on("click",".modal-close",function(t){
        e(this).closest(".modal").fadeOut(150,function(){
            e(this).remove()
        });
        t.preventDefault()
    });

    // automatically add icons to menu items
    e(".menu > li").has("ul").each(function(){
        e("> a:not(.no-fa)",this).append('<i class="fa fa-caret-down ml5p op50"></i>');
        e("ul > li",this).has("ul").each(function(){
            e("> a:not(.no-fa)",this).append('<i class="fa fa-caret-right"></i>')
        })
    })

})(jQuery);