// Function to get URL parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) || "N/A";
}

// Populate the details page
document.getElementById("position").innerText = `Position: ${getQueryParam("position")}`;
document.getElementById("company").innerText = getQueryParam("company");
document.getElementById("date").innerText = getQueryParam("date");
document.getElementById("result").innerText = getQueryParam("result");
document.getElementById("experience").innerText = getQueryParam("experience");
document.getElementById("linkedin").href = getQueryParam("linkedin");
