const hero = document.querySelector('.texture');

const updateTexture = (event) => {
  console.log('clicked');
  const { target } = event;
  const { action, texture } = target.dataset;
  hero.dataset[action] = texture;
};
const updateColor = (event) => {
  console.log('changed');
  const { target } = event;
  const { action } = target.dataset;
  document.documentElement.style.setProperty(`--color-${action}-texture`, target.value);
};

const buttons = [...document.querySelectorAll('[data-action]')];
buttons.forEach((button) => {
  button.addEventListener('click', updateTexture);
});

const colorPickers = [...document.querySelectorAll('[type="color"]')];
colorPickers.forEach((colorPicker) => {
  colorPicker.addEventListener('change', updateColor);
});
