const App = {
  components: {
    QrCodeImage
  }
}

const QrCodeImage = {
  template: `
  <div class="image-wrapper">
    <img src="" alt="QR code" title="QR code"/>
  </div>
  `
}

Vue.createApp(App).mount('#app')