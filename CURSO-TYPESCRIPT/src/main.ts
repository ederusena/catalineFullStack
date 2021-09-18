import axios from 'axios';
import Simplebar from 'simplebar';
 
// declare module 'onscreen' global.d.ts
import  onscreen from 'onscreen';

// npm i @types/simplebar -D
// npm i --save-dev @types/node

axios.get('https://api.github.com/users/diego3g')

const content = document.querySelector('#simplebar') as HTMLElement
const simplebar = new Simplebar(content, { autoHide: false });
onscreen.