/* global document sweetAlert */

import $ from 'jquery';
import app from './app';

document.addEventListener('DOMContentLoaded', () => {
  app.bindUI.sendButton.remove();
});
