var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// Skills Section

// Minimal JavaScript for animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate circle progress
    const circleProgressElements = document.querySelectorAll('.circle-progress');
    
    setTimeout(() => {
      circleProgressElements.forEach(element => {
        const percentage = element.getAttribute('data-percentage');
        const circle = element.querySelector('.circle-progress-path');
        const circumference = 2 * Math.PI * 65; // 2πr where r=65
        
        // Calculate stroke-dasharray based on percentage
        const dashArray = (percentage / 100) * circumference;
        
        // Set the stroke-dasharray to animate the circle
        circle.style.strokeDasharray = `${dashArray} ${circumference}`;
      });
    }, 500);
  });
// Skills Section end

//certifications
const certificateImgs = document.querySelectorAll(".certificate-img");
const modalImg = document.getElementById("modalImage");


certificateImgs.forEach(img => {
  img.addEventListener("click", function () {
    const imgSrc = this.getAttribute("data-img"); 
    modalImg.setAttribute("src", imgSrc); 
  });
});


const certificateLinks = document.querySelectorAll(".cer");

certificateLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); 
    const imgSrc = this.getAttribute("data-img"); 
    modalImg.setAttribute("src", imgSrc);
  });
});



// $(".contact-form").on("submit", function(e) {
//   e.preventDefault();
//   alert("Form submitted successfully!");
//   $(this).trigger("reset");
// });

$(".contact-form").on("submit", function(e) {
  e.preventDefault();

  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "Message sent successfully.",
    showConfirmButton: false,
    timer: 2000
  });

  $(this).trigger("reset");
});


AOS.init({
  offset:300,
  duration: 1000,
});