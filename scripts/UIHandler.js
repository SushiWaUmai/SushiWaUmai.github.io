function createPropSlider(parent, label, min, max, value, stepSize, sliderHolderClass, sliderClass, onInput) {// Create the elements
  // Create the elements
  var sliderHolder = document.createElement("div");
  var sliderLabel = document.createElement("span");
  var slider = document.createElement("input");
  var inputField = document.createElement("input");
  
  // Setting Child
  parent.appendChild(sliderHolder);
  sliderHolder.appendChild(slider);
  sliderHolder.appendChild(inputField);
  sliderHolder.appendChild(sliderLabel);

  // Set Attributes of slider
  inputField.setAttribute("type", "number");
  inputField.oninput = function() {
    this.value = clamp(this.value, min, max);
    slider.value = this.value;
    onInput(this.value);
  };

  sliderHolder.setAttribute("class", sliderHolderClass);
  slider.setAttribute("class", sliderClass);
  slider.setAttribute("type", "range");
  slider.setAttribute("min", min);
  slider.setAttribute("max", max);
  slider.setAttribute("value", value);
  slider.setAttribute("step", stepSize);
  sliderLabel.innerHTML = label;
  slider.oninput = function() {
    inputField.value = this.value;
    onInput(this.value);
  };

  // return the slider
  return slider;
}