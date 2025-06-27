const API_URL = "https://pawc-backend.onrender.com";

document.getElementById("petForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const breed = document.getElementById("breed").value;

  document.getElementById("result").innerText = "Loading...";

  fetch(`${API_URL}/api/pets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, breed }),
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("result").innerText = "Pet Registered: " + JSON.stringify(data);
  })
  .catch(err => {
    document.getElementById("result").innerText = "Error: " + err;
  });
});
