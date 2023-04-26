import React from "react";

function Header() {
  const dateToday = new Date().getDate();
  const currMonth = new Date().getMonth();
  const currYear = new Date().getFullYear();
  const dayToday = new Date().getDay();
  let d = "";
  
  if(dayToday == 1)
  d = "Monday";

  else if(dayToday == 2)
  d = "Tuesday";

  else if(dayToday == 3)
  d = "Wednesday";

  else if(dayToday == 4)
  d = "Thursday";

  else if(dayToday == 5)
  d = "Friday";

  else if(dayToday == 6)
  d = "Saturday";

  else if(dayToday == 7)
  d = "Sunday";


  return (
    
    <header>
      <h1>My Notes</h1>
      <p>{d} , {dateToday} / {currMonth} / {currYear}</p>
    </header>
  );
}

export default Header;
