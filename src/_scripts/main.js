// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');

$(function() {
  $('[data-source]').on('click', function(e) {
    var $sourceTarget = $($(this).attr('data-source'));
    console.log($sourceTarget)
    $sourceTarget.toggleClass('in');
    e.preventDefault();
  });
});
