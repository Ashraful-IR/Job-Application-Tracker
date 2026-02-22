// const jobDetails = document.getElementById("Job-details");
// const noJob = document.getElementById("No-job");

// // Example: if no job cards exist
// if (jobDetails.children.length === 0) {
//   jobDetails.style.display = "none";
//   noJob.style.display = "flex";
// } else {
//   noJob.style.display = "none";
// }

function showOnly(id) {
  const jobDetails = document.getElementById("Job-details");
  const noJob = document.getElementById("No-job");
  noJob.style.display = "flex";
  jobDetails.style.display = "none";
  if (id === "Job-details") {
    noJob.style.display = "none";
    jobDetails.style.display = "block";
  }
}
