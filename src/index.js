import getJoke from './getJoke';
import './styles/main.scss';
import emoji from './assets/laugh.svg';

const laughEmoji = document.getElementById('laughImg')
laughEmoji.src = emoji;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', getJoke);

getJoke();
