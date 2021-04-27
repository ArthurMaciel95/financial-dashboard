async function getApiData() {
  const url = "https://randomuser.me/api/?results=4";
  const data = await fetch(url);
  const response = await data.json();

  return insertPersonInDom(response);
}
getApiData();
function insertPersonInDom(data) {
  const userArea = document.querySelector(".avatar-area");
  const userProfile = document.querySelector(".image-profile-user");

  //inner image users in transaction details
  data.results.forEach((people) => {
    const elementImage = document.createElement("img");
    elementImage.src = people.picture.medium;
    elementImage.classList.add("avatar-img");
    elementImage.classList.add("circle");

    userArea.append(elementImage);
  });
  const elementImageProfile = document.createElement("img");
  elementImageProfile.src = data.results[0].picture.medium;
  elementImageProfile.classList.add("avatar-img");
  elementImageProfile.classList.add("circle");
  userProfile.append(elementImageProfile);

  data.results.forEach((people) => {
    const travelUsers = document.querySelectorAll(".users-area");

    travelUsers.forEach((element) => {
      const imgPeopleTravel = document.createElement("img");
      imgPeopleTravel.src = people.picture.medium;
      imgPeopleTravel.style.width = "25px";
      imgPeopleTravel.style.borderRadius = "50%";
      element.append(imgPeopleTravel);
    });
  });
}
