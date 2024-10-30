// Load default introduction on initial page load
window.onload = function () {
  loadContent("intro"); // Ensure there's an 'intro.html' file in the content folder with introductory text
};

function loadContent(page) {
  fetch(`content/${page}.html`) // Fetch HTML from 'content' folder
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;

      // Hide squirrel image only when an article page (not 'intro') is loaded
      if (page === "intro") {
        document.getElementById("squirrel-image").style.display = "block"; // Show squirrel for intro
      } else {
        document.getElementById("squirrel-image").style.display = "none"; // Hide squirrel for articles
      }
    })
    .catch((error) => {
      console.error("Error loading page:", error);
      document.getElementById("content").innerHTML =
        "<p>Error loading content. Please try again.</p>";
    });
}
