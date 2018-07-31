document.addEventListener("DOMContentLoaded", getMenu);

function getMenu() {
  fetch("../../api/db.json")
    .then(resolved => {
      return resolved.json();
    })
    .then(data => {
      let output = "";
      data.forEach(link => {
        output += `
            <li>
                <a href="${link.href}" target="_blank">${link.linkText}</a>
                <span>${link.description}</span>
            </li>
        `;
      });
      document.getElementById("pages-links").innerHTML = output;
    })
    .catch(err => console.log(err));
}
