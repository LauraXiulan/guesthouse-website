/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns1 = document.getElementsByClassName("dropdown-content");
    var j;
    for (j = 0; j < dropdowns.length; j++) {
      var openDropdown1 = dropdowns1[i];
      if (openDropdown1.classList.contains('show')) {
        openDropdown1.classList.remove('show');
      }
    }
  }
}

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


var bar = new ProgressBar.Circle(container, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: 'lightblue',
  text: {
  	value: '9.3'
  },
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(0.93);

var bar1 = new ProgressBar.Circle(container1, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: 'lightblue',
  text: {
  	value: '10'
  },
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar1.animate(1.0);

var bar2 = new ProgressBar.Circle(container2, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: 'lightblue',
  text: {
  	value: '8.4'
  },
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar2.animate(0.84);

var bar3 = new ProgressBar.Circle(container3, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: 'lightblue',
  text: {
  	value: '9.5'
  },
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar3.animate(0.95);