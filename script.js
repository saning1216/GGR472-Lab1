
var yesVoteCount = 0;
var noVoteCount = 0;

function vote(opinion) {
    if (opinion === 'Yes') {
        yesVoteCount += 1;
        document.getElementById('yesVotes').innerText = yesVoteCount;
    } else if (opinion === 'No') {
        noVoteCount += 1;
        document.getElementById('noVotes').innerText = noVoteCount;
    }
}
