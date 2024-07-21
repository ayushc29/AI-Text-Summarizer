const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const summarizedTextArea = document.getElementById("summary");

submitButton.disabled = true;

textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", submitData);

function verifyTextLength(e) {
  const textarea = e.target;

  if (textarea.value.length > 200 && textarea.value.length < 100000) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function submitData(e) {
  const max_length = document.getElementById("max-inp").value || 200;
  const min_length = document.getElementById("min-inp").value || 100;
  console.log(max_length, min_length)

  submitButton.classList.add("submit-button--loading");

  const text_to_summarize = textArea.value;
  const maxLength = max_length;
  const minLength = min_length;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    text_to_summarize: text_to_summarize,
    maxLength: max_length,
    minLength: min_length
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("/summarize", requestOptions)
    .then((response) => response.text())
    .then((summary) => {
      summarizedTextArea.value = summary;

      submitButton.classList.remove("submit-button--loading");
    })
    .catch((error) => {
      console.log(error.message);
    });
}
