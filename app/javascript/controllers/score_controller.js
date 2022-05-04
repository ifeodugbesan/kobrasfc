import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ 'home', 'homeScore', 'away', 'awayScore' ]

  connect() {
    console.log('Hi!')
  }

  updatePost(event) {
    document.getElementById(event.target.dataset.query).innerText = event.target.value
  }

  updatePostImage(event) {
    const input = event.currentTarget
    // we select the photo input
    // we call the displayPreview function (who retrieve the image url and display it)
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        document.getElementById('photo-preview').style.backgroundImage = `url(${event.currentTarget.result})`
      }
      reader.readAsDataURL(input.files[0])
      // document.getElementById('photo-preview').classList.remove('hidden');
    }
  }
}
