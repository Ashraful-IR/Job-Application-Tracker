const jobDetails = document.getElementById("Job-details");
const intervieweSection = document.getElementById("interviewed");
const rejecteSection = document.getElementById("rejected");

const totalJobs = document.getElementById("total-jobs");
const availableJobs = document.getElementById("available-jobs");
const totalinterview = document.getElementById("interviewed-jobs");
const totalreject = document.getElementById("rejected-jobs");

const interviewBtn = document.getElementById("interviewBtn");
const rejectedBtn = document.getElementById("rejectedBtn");
const allJobsBtn = document.getElementById("allJobs");

const a = intervieweSection.children.length - 2;
const b = rejecteSection.children.length - 2;

availableJobs.innerText = jobDetails.children.length + " jobs";
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

document.querySelectorAll(".btn-ghost").forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.closest(".job-card").remove();
    totalJobs.innerText = jobDetails.children.length;
    totalinterview.innerText = intervieweSection.children.length - 2;
    totalreject.innerText = rejecteSection.children.length - 2;
  });
});

document.querySelectorAll(".interviewBtn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const jobCard = btn.closest(".job-card");
    intervieweSection.appendChild(jobCard);
    totalinterview.innerText = intervieweSection.children.length - 2;
    totalJobs.innerText = jobDetails.children.length;
  });
});

document.querySelectorAll(".rejectBtn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const jobCard = btn.closest(".job-card");
    rejecteSection.appendChild(jobCard);
    totalreject.innerText = rejecteSection.children.length - 2;
    totalJobs.innerText = jobDetails.children.length;
  });
});

function checkEmptySections() {
  const interviewImg = document.getElementById("interview-img");
  const interviewDiv = document.getElementById("interviewDiv");
  const rejectedImg = document.getElementById("rejected-img");
  const rejectedDiv = document.getElementById("rejectedDiv");

  if (a == 0) {
    interviewImg.classList.add("hidden");
    interviewDiv.classList.add("hidden");
  } else {
    interviewImg.classList.remove("hidden");
    interviewDiv.classList.remove("hidden");
  }

  if (b == 0) {
    rejectedImg.classList.add("hidden");
    rejectedDiv.classList.add("hidden");
  } else {
    rejectedImg.classList.remove("hidden");
    rejectedDiv.classList.remove("hidden");
  }
}

checkEmptySections();
