define(function(require) {
  require('bootstrap');
  require('jquery-gray');

  var
    $ = require('jquery'),
    stars = 0, forks = 0;

  $('#repositories h4[id]').each(function () {
    var $this = $(this),
      url = 'https://api.github.com/repos/project-imas/' + $this.attr('id');

    $.getJSON(url).done(function (data) {
      stars += data.watchers_count;
      forks += data.forks_count;

      $('.stat.stars').text(stars);
      $('.stat.forks').text(forks);
    });
  });
});
