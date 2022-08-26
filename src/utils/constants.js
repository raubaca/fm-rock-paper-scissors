import rock from '../assets/icon-rock.svg';
import paper from '../assets/icon-paper.svg';
import scissors from '../assets/icon-scissors.svg';

export const icons = {
  rock,
  paper,
  scissors,
};

export const choices = ['paper', 'scissors', 'rock'];

export const rules = {
  rock: ['scissors'],
  paper: ['rock'],
  scissors: ['paper'],
};

export const messages = {
  draw: 'Draw',
  lose: 'You lose',
  win: 'You win',
};
