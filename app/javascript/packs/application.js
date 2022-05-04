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
const node = document.getElementById('completedPost');
const modal = document.querySelector('.modal-body');

btn.addEventListener('click', (event) => {
  html2canvas(node).then(canvas => {
    modal.innerHTML = ''
    canvas.style.height = 'unset'
    canvas.style.width = '100%'
    modal.appendChild(canvas)
  });
})

const modalBtn = document.getElementById('modalBtn')

modalBtn.addEventListener('click', (event) => {
  const canvas = document.querySelector("canvas");
  const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  const link = document.createElement('a');
  link.download = "matchday-post.png";
  link.href = image;
  link.click();
})
