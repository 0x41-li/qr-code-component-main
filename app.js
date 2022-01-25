const QrCodeImageWrapper = {
  template: `
  <div class="image-wrapper">
    <img src="./images/image-qr-code.png" alt="QR code" title="QR code"/>
  </div>
  `,
};

const H1Heading = {
  template: `
  <h1>{{ h1Text }}</h1>
  `,
  data() {
    return {
      h1Text: "Improve your front-end skills by building projects",
    };
  },
};

const CardPara = {
  template: `
  <p>{{ pText }}</p>
  `,
  data() {
    return {
      pText:
        "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
    };
  },
};

const App = {
  components: {
    QrCodeImageWrapper,
    H1Heading,
    CardPara,
  },
};

Vue.createApp(App).mount("#app");
