const jobDetails = document.getElementById("Job-details");
const intervieweSection = document.getElementById("interviewed");
const rejectedJobsSection = document.getElementById("rejected");

const totalJobs = document.getElementById("total-jobs");
const availableJobs = document.getElementById("available-jobs");
const totalinterview = document.getElementById("interviewed-jobs");
const totalreject = document.getElementById("rejected-jobs");

const interviewBtn = document.getElementById("interviewBtn");
const rejectedBtn = document.getElementById("rejectedBtn");
const allJobsBtn = document.getElementById("allJobs");

const a = intervieweSection.querySelectorAll(".job-card").length;
const b = rejectedJobsSection.querySelectorAll(".job-card").length;

availableJobs.innerText = jobDetails.children.length + " jobs ";
totalJobs.innerText = jobDetails.children.length;
totalinterview.innerText = a;
totalreject.innerText = b;

function setActiveButton(activeBtn, bgColor) {
  document.getElementById("allJobs").style.backgroundColor = "";
  document.getElementById("allJobs").style.color = "";
  document.getElementById("interviewBtn").style.backgroundColor = "";
  document.getElementById("interviewBtn").style.color = "";
  document.getElementById("rejectedBtn").style.backgroundColor = "";
  document.getElementById("rejectedBtn").style.color = "";
  activeBtn.style.backgroundColor = bgColor;
  activeBtn.style.color = "#fff";
}

document.getElementById("allJobs").addEventListener("click", function () {
  setActiveButton(this, "#4F39F6");
});
document.getElementById("interviewBtn").addEventListener("click", function () {
  setActiveButton(this, "#097969");
});
document.getElementById("rejectedBtn").addEventListener("click", function () {
  setActiveButton(this, "#C41E3A");
});

setActiveButton(document.getElementById("allJobs"), "#4F39F6");

function hideAll() {
  jobDetails.classList.remove("hidden");
  intervieweSection.classList.add("hidden");
  rejectedJobsSection.classList.add("hidden");
}

function updateAvailableJobs(section) {
  const count = section.querySelectorAll(".job-card").length;
  availableJobs.innerText = count + " jobs ";
}
hideAll();

interviewBtn.addEventListener("click", function () {
  hideAll();
  jobDetails.classList.add("hidden");
  intervieweSection.classList.remove("hidden");
  updateAvailableJobs(intervieweSection);
});

rejectedBtn.addEventListener("click", function () {
  hideAll();
  jobDetails.classList.add("hidden");
  rejectedJobsSection.classList.remove("hidden");
  updateAvailableJobs(rejectedJobsSection);
});

allJobsBtn.addEventListener("click", function () {
  hideAll();
  updateAvailableJobs(jobDetails);
});

function deleteEventListeners(card) {
  card.querySelectorAll(".btn-ghost").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.closest(".job-card").remove();
    //   checkEmptySections();

      totalJobs.innerText = jobDetails.querySelectorAll(".job-card").length;
      totalinterview.innerText =
        intervieweSection.querySelectorAll(".job-card").length;
      totalreject.innerText =
        rejectedJobsSection.querySelectorAll(".job-card").length;

      const visibleSection = [
        jobDetails,
        intervieweSection,
        rejectedJobsSection,
      ].find((section) => !section.classList.contains("hidden"));

      availableJobs.innerText =
        visibleSection.querySelectorAll(".job-card").length + " jobs";
    });
  });
}

document.querySelectorAll(".job-card").forEach(function (card) {
  deleteEventListeners(card);
  addCardButtonListeners(card);
});

function initializeDeleteButtons() {
  card.querySelectorAll(".interviewBtn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const clonedCard = card.cloneNode(true);
      intervieweSection.appendChild(clonedCard);
      rejectedJobsSection.appendChild(clonedCard);
    });
  });
}
function initializeDeleteButtons() {
  card.querySelectorAll(".rejectBtn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const clonedCard = card.cloneNode(true);
      intervieweSection.appendChild(clonedCard);
      rejectedJobsSection.appendChild(clonedCard);
    });
  });
}

function initializeButtons(card) {
  card.querySelectorAll(".interviewBtn , .rejectBtn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const clonedCard = card.cloneNode(true);
      clonedCardFunction(clonedCard);
    });
  });
}

function addCardButtonListeners(card) {
  card.querySelectorAll(".interviewBtn, .rejectBtn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const clonedCard = card.cloneNode(true);
    });
  });
}

function updateStatus(card, status, color) {
  card.querySelector(".alpha").innerText = status;
  card.querySelector(".alpha").style.color = color;
  card.querySelector(".alpha").style.borderColor = color;
}
function checkEmptySections() {
  const interviewImg = document.getElementById("interview-img");
  const interviewDiv = document.getElementById("interviewDiv");
  const rejectedImg = document.getElementById("rejected-img");
  const rejectedDiv = document.getElementById("rejectedDiv");

  const interviewCount = intervieweSection.querySelectorAll(".job-card").length;
  const rejectCount = rejectedJobsSection.querySelectorAll(".job-card").length;
  console.log("Interview Count:", interviewCount);
  console.log("Reject Count:", rejectCount);
  if (interviewCount === 0) {
    interviewImg.classList.remove("hidden");
    interviewDiv.classList.remove("hidden");
  }
  else {
    interviewImg.classList.add("hidden");
    interviewDiv.classList.add("hidden");
  }

  if (rejectCount === 0) {
    rejectedImg.classList.remove("hidden");
    rejectedDiv.classList.remove("hidden");
  } else {
    rejectedImg.classList.add("hidden");
    rejectedDiv.classList.add("hidden");
  }
}

function clonedCardFunction(clonedCard) {
  const deleteBtn = clonedCard.querySelector(".btn-ghost");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", function () {
      clonedCard.remove();
    //   checkEmptySections();
      totalJobs.innerText = jobDetails.querySelectorAll(".job-card").length;
      totalinterview.innerText =
        intervieweSection.querySelectorAll(".job-card").length;
      totalreject.innerText =
        rejectedJobsSection.querySelectorAll(".job-card").length;

      const visibleSection = [
        jobDetails,
        intervieweSection,
        rejectedJobsSection,
      ].find((section) => !section.classList.contains("hidden"));
      if (visibleSection) {
        availableJobs.innerText =
          visibleSection.querySelectorAll(".job-card").length + " jobs";
      }
    });
  }

  const interviewBtn = clonedCard.querySelector(".interviewBtn");
  if (interviewBtn) {
    interviewBtn.addEventListener("click", function () {
      if (interviewBtn.disabled) return;
      interviewBtn.disabled = true;

      clonedCard.querySelector(".alpha").innerText = "Interviewed";
      clonedCard.querySelector(".alpha").style.color = "#097969";
      clonedCard.querySelector(".alpha").style.borderColor = "#097969";

      const newClone = clonedCard.cloneNode(true);
      intervieweSection.appendChild(newClone);
      clonedCardFunction(newClone);
      checkEmptySections();

      totalinterview.innerText =
        intervieweSection.querySelectorAll(".job-card").length;
    });
  }

  const rejectBtn = clonedCard.querySelector(".rejectBtn");
  if (rejectBtn) {
    rejectBtn.addEventListener("click", function () {
      if (rejectBtn.disabled) return;
      rejectBtn.disabled = true;

      clonedCard.querySelector(".alpha").innerText = "Rejected";
      clonedCard.querySelector(".alpha").style.color = "#C70039";
      clonedCard.querySelector(".alpha").style.borderColor = "#C70039";

      const newClone = clonedCard.cloneNode(true);
      rejectedJobsSection.appendChild(newClone);
      clonedCardFunction(newClone);
        checkEmptySections();
      totalreject.innerText =
        rejectedJobsSection.querySelectorAll(".job-card").length;
    });
  }
}

document.querySelectorAll(".interviewBtn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const jobCard = btn.closest(".job-card");
    updateStatus(jobCard, "Interviewed", "#097969");
    btn.disabled = true;
    const clonedCard = jobCard.cloneNode(true);
    intervieweSection.appendChild(clonedCard);
    deleteEventListeners(clonedCard);
    clonedCardFunction(clonedCard);

    checkEmptySections();
    totalinterview.innerText =
      intervieweSection.querySelectorAll(".job-card").length;
    totalJobs.innerText = jobDetails.children.length;
  });
});

document.querySelectorAll(".rejectBtn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const jobCard = btn.closest(".job-card");

    updateStatus(jobCard, "Rejected", "#C70039");
    btn.disabled = true;

    const clonedCard = jobCard.cloneNode(true);

    rejectedJobsSection.appendChild(clonedCard);
    deleteEventListeners(clonedCard);
    clonedCardFunction(clonedCard);
    checkEmptySections();

    totalreject.innerText =
      rejectedJobsSection.querySelectorAll(".job-card").length;
    totalJobs.innerText = jobDetails.children.length;
  });
});
checkEmptySections();
