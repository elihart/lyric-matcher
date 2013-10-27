// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require swfobject
//= require_tree .

function log(msg){
    console.log(msg);
}

// need to use visibility attribute instead of display because youtube player
// swfobject can't initialize when diplay:none
jQuery.fn.visible = function () {
    return this.css('visibility', 'visible');
};

jQuery.fn.invisible = function () {
    return this.css('visibility', 'hidden');
};

String.prototype.capitalize = function () {
    return this.replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
};
