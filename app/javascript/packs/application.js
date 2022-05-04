// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "controllers"
import "bootstrap"
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

const btn = document.getElementById('downloadButton')

var node = document.getElementById('completedPost');

btn.addEventListener('click', (event) => {
  const scale = 1;
  domtoimage.toPng((node), { quality: 1, width: node.clientWidth * scale,  height: node.clientHeight * scale,  style: {   transform: 'scale('+scale+')',   transformOrigin: 'top left' } })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'matchday-post.png';
        link.href = dataUrl;
        link.click();
    });
})
