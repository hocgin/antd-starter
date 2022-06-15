import classnames from 'classnames';
import {WebExtension} from '../service/browser';

setInterval(() => {
  console.warn('background.ts', '$', classnames, WebExtension);
}, 1000);
