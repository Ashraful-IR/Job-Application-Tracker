const jobDetails = document.getElementById("Job-details");
const intervieweSection = document.getElementById("interviewed");
const rejecteSection = document.getElementById("rejected");

const totalJobs = document.getElementById("total-jobs");
const totalinterview = document.getElementById("interviewed-jobs");
const totalreject = document.getElementById("rejected-jobs");

const interviewBtn = document.getElementById("interviewBtn");
const rejectedBtn = document.getElementById("rejectedBtn");
const allJobsBtn = document.getElementById("allJobs");

const a=intervieweSection.children.length-2;
const b=rejecteSection.children.length-2;

totalJobs.innerText = jobDetails.children.length;
totalinterview.innerText = a;
totalreject.innerText = b;


function hideAll() {
  jobDetails.classList.remove("hidden");
  intervieweSection.classList.add("hidden");
  rejecteSection.classList.add("hidden");
}
hideAll();

interviewBtn.addEventListener("click", function () {
  hideAll();
  jobDetails.classList.add("hidden");
  intervieweSection.classList.remove("hidden");
});

rejectedBtn.addEventListener("click", function () {
  hideAll();
  jobDetails.classList.add("hidden");
  rejecteSection.classList.remove("hidden");
});

allJobsBtn.addEventListener("click", function () {
  hideAll();
});

document.querySelectorAll(".btn-ghost").forEach(function(btn) {
  btn.addEventListener("click", function() {
    btn.closest(".job-card").remove();
    totalJobs.innerText = jobDetails.children.length;
  });
});

