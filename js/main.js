var scoreboard;
var rankings = [];
var displayScoreboard = function(rankings) {
  var rankPosition = 1;
  var tieScore = 0
  $('table tbody').empty()
  $('#rankings').empty()
  for (var i = 0; i < rankings.length; i++) {
    if (i > 0 && rankings[i-1].score !== rankings[i].score) {
      rankPosition = i + 1;
      tieScore = 0
    } else {
      tieScore += 1
    }
    $('table').append('<tr><td>' + rankPosition + '</td><td> ' +rankings[i].name + '</td><td> ' + rankings[i].score + ' pts</td></tr>');

    $('#rankings').append('<li>' + rankPosition + '. ' +rankings[i].name + ', ' + rankings[i].score + ' pts </li>');
  };
}
var sortRankings = function(rankings) {
  rankings.sort(function(a, b) {
    return b.score-a.score;
  });
};
$('#add').on('click', function() {
  var playerInput = $('#eq-player-input').val();
  var parsedPlayerInput = playerInput.split(',');
  var playerName = parsedPlayerInput[0]
  var playerScore = parseInt(parsedPlayerInput[1], 10)

  if (playerName.length > 0 && playerScore >= 0) {
    var existingPlayer = false;
    for (var i = 0; i < rankings.length && !existingPlayer; i++) {
      if (playerName == rankings[i].name) {
        rankings[i].score += playerScore
        existingPlayer = true;
      }
    };
    if (!existingPlayer) {
      var playerStats = {name: playerName, score: playerScore};
      rankings.push(playerStats);
    }
    sortRankings(rankings);
    displayScoreboard(rankings);
    $('#eq-player-input').val('');
  } else {
    alert("Please enter a name and a score in the format: John Doe, 15");
  }
});
$('#clear').on('click', function() {
  $('table tbody').html('');
  $('#rankings').html('');
  rankings = [];
});
