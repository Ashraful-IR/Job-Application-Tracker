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

availableJobs.innerText =
    jobDetails.children.length +
    " jobs " +
    "out of " +
    jobDetails.children.length;
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

checkEmptySections();

function addDeleteEventListeners(card) {
    card.querySelectorAll(".btn-ghost").forEach(function (btn) {
        btn.addEventListener("click", function () {
            btn.closest(".job-card").remove();
            totalJobs.innerText = jobDetails.children.length;
            availableJobs.innerText =
                jobDetails.children.length +
                " jobs " +
                "out of " +
                jobDetails.children.length;
            totalinterview.innerText = intervieweSection.children.length - 2;
            totalreject.innerText = rejecteSection.children.length - 2;
            checkEmptySections();
        });
    });
}

document.querySelectorAll(".job-card").forEach(function (card) {
    addDeleteEventListeners(card);
    addCardButtonListeners(card);
});

function checkEmptySections() {
    const interviewImg = document.getElementById("interview-img");
    const interviewDiv = document.getElementById("interviewDiv");
    const rejectedImg = document.getElementById("rejected-img");
    const rejectedDiv = document.getElementById("rejectedDiv");

    const interviewCount = intervieweSection.querySelectorAll(".job-card").length;
    const rejectCount = rejecteSection.querySelectorAll(".job-card").length;

    if (interviewCount === 0) {
        interviewImg.classList.remove("hidden");
        interviewDiv.classList.remove("hidden");
    } else {
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

function initializeDeleteButtons() {
    card.querySelectorAll(".interviewBtn, .rejectBtn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const clonedCard = card.cloneNode(true);
            intervieweSection.appendChild(clonedCard);
            rejecteSection.appendChild(clonedCard);
            addDeleteEventListeners(clonedCard);
            initializeDeleteButtons(clonedCard);
            totalinterview.innerText = intervieweSection.children.length - 2;
            totalreject.innerText = rejecteSection.children.length - 2;
            totalJobs.innerText = jobDetails.children.length;
            checkEmptySections();
        });
    });
}

function initializeButtons(card) {
    card.querySelectorAll(".interviewBtn , .rejectBtn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const clonedCard = card.cloneNode(true);
            addDeleteEventListeners(clonedCard);
            initializeButtons(clonedCard);
            totalinterview.innerText = intervieweSection.children.length - 2;
            totalJobs.innerText = jobDetails.children.length;
            checkEmptySections();
        });
    });
}

function addCardButtonListeners(card) {
    card.querySelectorAll(".interviewBtn, .rejectBtn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const clonedCard = card.cloneNode(true);
            //   intervieweSection.appendChild(clonedCard);
            addDeleteEventListeners(clonedCard);
            addCardButtonListeners(clonedCard);
            totalinterview.innerText =
                intervieweSection.querySelectorAll(".job-card").length;
                totalJobs.innerText = jobDetails.children.length;
            checkEmptySections();
        });
    });
}

document.querySelectorAll(".interviewBtn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        const jobCard = btn.closest(".job-card");
        const clonedCard = jobCard.cloneNode(true);
        intervieweSection.appendChild(clonedCard);
        addDeleteEventListeners(clonedCard);
        initializeButtons(clonedCard);
        totalinterview.innerText = intervieweSection.children.length - 2;
        totalJobs.innerText = jobDetails.children.length;
    });
});

document.querySelectorAll(".rejectBtn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        const jobCard = btn.closest(".job-card");
        const clonedCard = jobCard.cloneNode(true);
        rejecteSection.appendChild(clonedCard);
        addDeleteEventListeners(clonedCard);
        initializeButtons(clonedCard);
        totalreject.innerText = rejecteSection.children.length - 2;
        totalJobs.innerText = jobDetails.children.length;
    });
});

checkEmptySections();
