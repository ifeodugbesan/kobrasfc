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
import html2canvas from 'html2canvas';


const btn = document.getElementById('downloadButton')

var node = document.getElementById('completedPost');
var modal = document.querySelector('.modal-body');

btn.addEventListener('click', (event) => {
  html2canvas(node).then(canvas => {
    modal.innerHTML = ''
    canvas.style.height = 'unset'
    canvas.style.width = '100%'
    modal.appendChild(canvas)
  });
})
