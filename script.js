
var theranos = {
  first: "Elizabeth",
  last: "Holmes",
  age: 41,
  year: 1984,
  college: ["St. John University", "Stanford University"],
  img: "https://startupi.com.br/wp-content/uploads/2023/08/20160711elizabeth-holmes.jpg",
  wiki: "https://en.wikipedia.org/wiki/Elizabeth_Holmes"
};


var elonMusk = {
  first: "Elon",
  middle: "Reeve",
  last: "Musk",
  age: 48,
  college: [
    "Queens College",
    "Stanford University",
    "Wharton School of the University of Pennsylvania"
  ],
  img: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
  wiki: "https://en.wikipedia.org/wiki/Elon_Musk"
};


var hero = {
  first: "Tony",
  middle: "",
  last: "Stark",
  age: 45,
  college: ["MIT"],
  occupation: "Inventor",
  skills: "Engineering, AI",
  hometown: "Long Island, NY",
  awards: "Avengers Hero",
  img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Iron_Man_Infobox.jpg",
  wiki: "https://en.wikipedia.org/wiki/Tony_Stark"
};


var profiles = [theranos, elonMusk, hero];


var staffContainer = document.getElementById("staff-container");
var currentYear = new Date().getFullYear();

profiles.forEach(function (person) {
  var birthYear = currentYear - person.age;

  var educationHTML = "";
  person.college.forEach(function (school, index) {
    educationHTML += `<div>${index + 1}. ${school}</div>`;
  });

  var extraInfo = "";
  if (person.occupation) {
    extraInfo += `<p class="small">Occupation: ${person.occupation}</p>`;
    extraInfo += `<p class="small">Skills: ${person.skills}</p>`;
    extraInfo += `<p class="small">Hometown: ${person.hometown}</p>`;
    extraInfo += `<p class="small">Awards: ${person.awards}</p>`;
  }

  staffContainer.innerHTML += `
    <article class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card h-100 shadow-sm text-center">
        <img src="${person.img}" class="card-img-top" alt="Profile Image" />

        <div class="card-body">
          <h5 class="card-title">${person.last}, ${person.first}</h5>
          <p class="card-text text-muted">Age: ${person.age}</p>
          <p class="small">Year Born: ${birthYear}</p>

          <p class="small fw-bold">Education</p>
          ${educationHTML}

          ${extraInfo}
        </div>

        <div class="card-footer bg-white">
          <a href="${person.wiki}" target="_blank" class="btn btn-outline-primary btn-sm">
            View Profile
          </a>
        </div>
      </div>
    </article>
  `;
});