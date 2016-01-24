$(document).ready(function() {
  var scoreboard;
  var rankings = [];
  var displayScoreboard = function(rankings) {
    var rankPosition = 1;
    $('#rankings').html('')
    for (var i = 0; i < rankings.length; i++) {
      if (i > 0 && rankings[i-1].score != rankings[i].score) {
        rankPosition += 1;
      }
      $('#rankings').append('<li>' + rankPosition + '. ' +rankings[i].name + ', ' + rankings[i].score + ' pts</li>')
    }
  }
  var sortRankings = function(rankings) {
    rankings.sort(function(a, b) {
      return b.score-a.score;
    });
  }

  $('#add').on('click', function() {
    var playerName = $('#eq-name').val();
    var playerScore = $('#eq-score').val();

    if (playerName.length > 0 && playerScore.length > 0) {
      var playerStats = {name: playerName, score: playerScore};
      rankings.push(playerStats);
      sortRankings(rankings);
      displayScoreboard(rankings);
      $('#eq-name').val('');
      $('#eq-score').val('');
    } else {
      alert("Please enter a name and a score");
    }
  });

  $('#clear').on('click', function() {
    $('#rankings').html('');
    rankings = [];
  });


});
