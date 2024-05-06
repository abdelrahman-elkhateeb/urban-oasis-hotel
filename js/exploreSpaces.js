const cardsArray = [
  {
    roomType: "Standard",
    price: "300",
    bathroom: "2",
    beds: "2",
    image: "../images/standerd room.jpg",
  },
  {
    roomType: "Deluxe",
    price: "600",
    bathroom: "3",
    beds: "4",
    image: "../images/deluxe room.jpg",
  },
  {
    roomType: "Standard",
    price: "300",
    bathroom: "2",
    beds: "2",
    image: "../images/standerd room.jpg",
  },
  {
    roomType: "Family",
    price: "1100",
    bathroom: "6",
    beds: "2",
    image: "../images/family room.jpg",
  },
  {
    roomType: "Standard",
    price: "300",
    bathroom: "2",
    beds: "2",
    image: "../images/standerd room.jpg",
  },
  {
    roomType: "Deluxe",
    price: "600",
    bathroom: "2",
    beds: "2",
    image: "../images/deluxe room.jpg",
  },
  {
    roomType: "Family",
    price: "1250",
    bathroom: "6",
    beds: "2",
    image: "../images/family room.jpg",
  },
  {
    roomType: "Standard",
    price: "300",
    bathroom: "2",
    beds: "2",
    image: "../images/standerd room.jpg",
  },
  {
    roomType: "Deluxe",
    price: "800",
    bathroom: "2",
    beds: "2",
    image: "../images/deluxe room.jpg",
  },
];

// Select the container for rooms
const roomsContainer = document.querySelector(
  ".roomsAndSuits .container .rooms",
);
cardsArray.forEach((card) => {
  // Create card div
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.setAttribute("data-type", card.roomType);
  // Create image element
  let img = document.createElement("img");
  img.setAttribute("src", card.image);

  // Create price and type div
  let priceAndTypeDiv = document.createElement("div");
  priceAndTypeDiv.classList.add("price-and-type");

  // Create h5 element for room type
  let h5 = document.createElement("h5");
  h5.textContent =
    card.roomType.charAt(0).toUpperCase() + card.roomType.slice(1) + " Room";

  // Create p element for price
  let p = document.createElement("p");
  p.classList.add("price");
  p.textContent = "💲" + card.price;

  // Append h5 and p to priceAndTypeDiv
  priceAndTypeDiv.appendChild(h5);
  priceAndTypeDiv.appendChild(p);

  // Create ul element for details
  let ul = document.createElement("ul");
  ul.classList.add("details");

  // Create li elements for bathroom and beds
  let bathroomLi = document.createElement("li");
  bathroomLi.textContent = "bathroom: ";
  let bathroomSpan = document.createElement("span");
  bathroomSpan.textContent = card.bathroom;
  bathroomLi.appendChild(bathroomSpan);

  let bedsLi = document.createElement("li");
  bedsLi.textContent = "beds: ";
  let bedsSpan = document.createElement("span");
  bedsSpan.textContent = card.beds;
  bedsLi.appendChild(bedsSpan);

  // Append li elements to ul
  ul.appendChild(bathroomLi);
  ul.appendChild(bedsLi);

  // Create button element for booking
  let button = document.createElement("button");
  button.classList.add("bookNowBtn");
  let a = document.createElement("a");
  a.setAttribute("href", "../html/bookYourStay.html");
  a.textContent = "Book Now";
  button.appendChild(a);

  // Append all elements to cardDiv
  cardDiv.appendChild(img);
  cardDiv.appendChild(priceAndTypeDiv);
  cardDiv.appendChild(ul);
  cardDiv.appendChild(button);

  // Append cardDiv to roomsContainer
  roomsContainer.appendChild(cardDiv);
});

// Event listener for option change
const optionValue = document.getElementById("rooms-options");
optionValue.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
  console.log(selectedOption);
  const cards = document.querySelectorAll(
    ".roomsAndSuits .container .rooms .card",
  );

  cards.forEach((card) => {
    if (
      selectedOption === "All" ||
      card.getAttribute("data-type") === selectedOption
    ) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

// Add interval to change image every 2 seconds
setInterval(() => {
  const nextButton = document.querySelector("[data-carousel-button='next']");
  nextButton.click();
}, 5000);
