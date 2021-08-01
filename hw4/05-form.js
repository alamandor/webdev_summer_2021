let form = document.querySelector("form");
const checkForInput = (element) => {
  if (!element) {
    return "no submission";
  }
  return element;
};

const checkForFeedback = (feed) => {
  if (feed.length == 0) {
    return "no submission";
  }
  return feed;
};

const checkForSections = (sections) => {
  let uSection;
  for (const radio of sections) {
    if (radio.checked) {
      uSection = radio.value;
      break;
    }
  }
  return checkForInput(uSection);
};

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // Add your code here
  let uname = document.getElementById("uname").value;
  uname = checkForFeedback(uname);
  let email = document.getElementById("email").value;
  email = checkForFeedback(email);
  let password = document.getElementById("password").value;
  password = checkForFeedback(password);
  let date = document.getElementById("date").value;
  date = checkForInput(date);
  const sectionBtns = document.querySelectorAll('input[name="contact"]');
  let uSection = checkForSections(sectionBtns);

  console.group("======= Form Submission =======");
  console.log("Username: " + uname);
  console.log("Email: " + email);
  console.log("Newsletter: " + uSection);
  console.log("Date: " + date);
}
