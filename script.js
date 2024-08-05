document
  .getElementById("quizForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = new FormData(this);
    const answers = {
      q1: form.get("q1"),
      q2: form.get("q2"),
      q3: form.get("q3"),
      q4: form.get("q4"),
      q5: form.get("q5"),
    };

    let result = "";

    if (answers.q3 === "yes") {
      result = "SharePoint";
    } else if (answers.q1 === "yes") {
      if (answers.q2 === "yes" && answers.q3 === "no") {
        result = "Both Website and SharePoint";
      } else if (answers.q5 === "yes") {
        result = "Website";
      } else {
        result = "SharePoint";
      }
    } else if (answers.q2 === "yes") {
      result =
        answers.q4 === "yes" || answers.q5 === "yes"
          ? "SharePoint"
          : "Both Website and SharePoint";
    } else if (answers.q5 === "yes") {
      result = "Website";
    } else {
      result = "SharePoint";
    }

    document.getElementById("quizForm").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("resultText").textContent = result;
  });

document.getElementById("retry").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("quizForm").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
});
