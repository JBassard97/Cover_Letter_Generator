function currentFormattedDate() {
  // Get the current date
  const currentDate = new Date();

  // Define an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract day, month, and year from the current date
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // Format the date as "13 March 2024"
  const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

  return formattedDate;
}

export { currentFormattedDate };
