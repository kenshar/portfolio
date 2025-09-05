// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Select all "Learn More" buttons
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      // Find the parent service-box
      const serviceBox = this.closest(".service-box");
      
      // Find the content container
      const content = serviceBox.querySelector(".service-content");

      // Check if expanded content already exists
      let expandedContent = serviceBox.querySelector(".expanded-content");

      if (expandedContent) {
        // If it exists, toggle visibility
        if (expandedContent.style.display === "block") {
          expandedContent.style.display = "none";
          this.textContent = "Learn More";
        } else {
          expandedContent.style.display = "block";
          this.textContent = "See Less";
        }
      } else {
        // Create expanded content only once
        expandedContent = document.createElement("div");
        expandedContent.classList.add("expanded-content");
        expandedContent.style.display = "none";
        expandedContent.style.marginTop = "10px";
        expandedContent.style.padding = "10px";
        expandedContent.style.backgroundColor = "#f9f9f9";
        expandedContent.style.borderRadius = "5px";
        expandedContent.innerHTML = `
          <p><strong>Details:</strong> This service includes consultation, custom design, revisions, and final delivery. We ensure your goals are met with creativity and precision.</p>
          <p>Let us help you stand out with professional, tailored solutions that reflect your brand identity.</p>
        `;

        // Append to service-content
        content.appendChild(expandedContent);

        // Show the expanded content
        expandedContent.style.display = "block";
        this.textContent = "See Less";
      }
    });
  });
});