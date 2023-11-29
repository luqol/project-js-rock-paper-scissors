function printMessage(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printScore(score){
	const divPc = document.createElement('div');
	divPc.innerHTML = score[0];
	document.getElementById('computer-result').innerHTML = '';
	document.getElementById('computer-result').appendChild(divPc);

	const divPlayer = document.createElement('div');
	divPlayer.innerHTML = score[1];
	document.getElementById('player-result').innerHTML = '';
	document.getElementById('player-result').appendChild(divPlayer);
}