function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

const catculateAge = (birthday) => {
  // Given a date, return the age of the person with that birthday, in years, months, and days

  let birthdayDate = new Date(birthday);
  if (isValidDate(birthdayDate) === false) {
    return "Error Invalid Input Provided";
  }
  let ageDif = Date.now() - birthdayDate.getTime();
  let ageDate = new Date(ageDif);
  let currentMonthDay = new Date(Date.now());

  let years = ageDate.getFullYear() - 1970;
  let months = ageDate.getMonth();
  let days = null;
  if (birthdayDate.getUTCDate() > currentMonthDay.getUTCDate()) {
    days = Math.abs(birthdayDate.getUTCDate() - currentMonthDay.getUTCDate());
  } else {
    days = Math.abs(currentMonthDay.getUTCDate() - birthdayDate.getUTCDate());
  }
  let yearString = "";
  let monthString = "";
  let dayString = "";
  let results = [];

  if (years !== 0) {
    if (years > 1) {
      yearString = String(years + " Years");
    } else {
      yearString = String(years + " Year");
    }
    results.push(yearString);
  }
  if (months !== 0) {
    if (months > 1) {
      monthString = String(months + " Months");
    } else {
      monthString = String(months + " Month");
    }
    results.push(monthString);
  }
  if (days !== 0) {
    if (days > 1) {
      dayString = String(days + " Days");
    } else {
      dayString = String(days + " Day");
    }
    results.push(dayString);
  }

  let ageString = "Age: ";

  results.forEach(function (item, index) {
    ageString += item;
    if (index !== results.length - 1) {
      ageString += ", ";
    }
  });

  // console.log(years + " Years");
  // console.log(months + " Months");
  // console.log(days + " Days");
  return ageString;
};

// Date formats
// new Date('December 17, 1995')
// new Date('1995-12-17')
// new Date(1995, 11, 17)
// new Date(628021800000)

birthday = "December 16, 1992";
console.log(catculateAge(birthday));
// Age: 25 years, 4 months, 3 days
// Age: 25 years, 1 day
// Age: 4 months, 10 days
// Error: invalid input provided
