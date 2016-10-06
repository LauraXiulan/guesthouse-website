var bar = new ProgressBar.Circle(container, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: 'lightblue',
  text: {
  	value: '9.0'
  },
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(0.9);

