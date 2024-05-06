// Create footer element
const footer = document.getElementById("main-footer");

// Create wrap div
const wrapDiv = document.createElement("div");
wrapDiv.classList.add("wrap");

// Create container div
const containerDiv = document.createElement("div");
containerDiv.classList.add("container");

// Create logo div
const logoDiv = document.createElement("div");
logoDiv.classList.add("logo");

// Create logo link
const logoLinkFooter = document.createElement("a");
logoLinkFooter.setAttribute("href", "index.html");
logoLinkFooter.textContent = "Urban";

// Create span for logo
const span = document.createElement("span");
span.textContent = "Oasis";

// Append span to logo
logoLinkFooter.appendChild(span);

// Append logo link to logo div
logoDiv.appendChild(logoLinkFooter);

// Create copyright paragraph
const copyrightPara = document.createElement("p");
copyrightPara.textContent = "\u00A9 all right reserved for abdelrahman Khateeb Copyright 2024";

// Append copyright paragraph to logo div
logoDiv.appendChild(copyrightPara);

// Append logo div to container div
containerDiv.appendChild(logoDiv);

// Create social links ul
const socialLinksUl = document.createElement("ul");
socialLinksUl.classList.add("social-links");

// Create social links list items with Unicode characters
const socialLinks = [
  { iconUnicode: "\u{f09a}", text: "facebook", href: "#" },
  { iconUnicode: "\u{F16D}", text: "instagram", href: "#" },
  { iconUnicode: "\u{F099}", text: "twitter", href: "#" },
  { iconUnicode: "\u{F0E1}", text: "linkedin", href: "#" },
];

socialLinks.forEach((link) => {
  const li = document.createElement("li");
  const icon = document.createElement("i");
  icon.classList.add("fa-brands");
  icon.textContent = link.iconUnicode; // Use Unicode character directly
  const anchor = document.createElement("a");
  anchor.setAttribute("href", link.href);
  anchor.textContent = link.text;
  li.appendChild(icon);
  li.appendChild(anchor);
  socialLinksUl.appendChild(li);
});

// Append social links ul to container div
containerDiv.appendChild(socialLinksUl);

// Create nav links ul
const navLinksUl = document.createElement("ul");
navLinksUl.classList.add("navLinks");

// Create nav links list items
const navLinks = [
  { text: "lively updates", href: "../html/livelyUpdates.html" },
  { text: "explore our spaces", href: "../html/exploreSpaces.html" },
  { text: "book your stay", href: "../html/bookYourStay.html" },
  { text: "contact us", href: "../html/contactUs.html" },
];

navLinks.forEach((link) => {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.setAttribute("href", link.href);
  anchor.textContent = link.text;
  li.appendChild(anchor);
  navLinksUl.appendChild(li);
});

// Append nav links ul to container div
containerDiv.appendChild(navLinksUl);

// Append container div to wrap div
wrapDiv.appendChild(containerDiv);

// Append wrap div to footer
footer.appendChild(wrapDiv);
