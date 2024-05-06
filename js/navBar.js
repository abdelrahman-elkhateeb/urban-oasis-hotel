// JavaScript code for header functionality

document.addEventListener("DOMContentLoaded", function () {
  // Create header element
  const header = document.getElementById("header");

  // Create container div
  const container = document.createElement("div");
  container.classList.add("container");

  // Create logo
  const logo = document.createElement("h1");
  logo.classList.add("logo");
  const logoLink = document.createElement("a");
  logoLink.setAttribute("href", "index.html");
  logoLink.textContent = "Urban ";
  const spanElement = document.createElement("span");
  spanElement.textContent = "Oasis";
  logoLink.appendChild(spanElement);
  logo.appendChild(logoLink);

  // Create navigation
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  nav.setAttribute("data-visibility", "false");
  const ul = document.createElement("ul");
  ul.classList.add("links");

  let navItems;

  if ("index.html" === location.pathname) {
    navItems = [
      { name: "home", link: "/urban-oasis-hotel/index.html" },
      { name: "lively updates", link: "/urban-oasis-hotel/livelyUpdates.html" },
      {
        name: "Explore Our Spaces",
        link: "/urban-oasis-hotel/exploreSpaces.html",
      },
      { name: "contact us", link: "/urban-oasis-hotel/contactUs.html" },
    ];
  } else {
    navItems = [
      { name: "home", link: "/urban-oasis-hotel/index.html" },
      {
        name: "lively updates",
        link: "/urban-oasis-hotel/html/livelyUpdates.html",
      },
      {
        name: "Explore Our Spaces",
        link: "/urban-oasis-hotel/html/exploreSpaces.html",
      },
      { name: "contact us", link: "/urban-oasis-hotel/html/contactUs.html" },
    ];
  }

  navItems.forEach((item) => {
    const li = document.createElement("li");
    if (item.name === "contact us") {
      li.classList.add("contactUs");
    }
    const a = document.createElement("a");
    a.setAttribute("href", item.link);
    a.textContent = item.name;
    li.appendChild(a);
    ul.appendChild(li);
  });
  nav.appendChild(ul);

  // Create burger menu
  const burgerMenu = document.createElement("div");
  burgerMenu.classList.add("burger-menu");
  ["top", "mid", "btm"].forEach((className) => {
    const span = document.createElement("span");
    span.classList.add(className);
    burgerMenu.appendChild(span);
  });

  // Append elements
  container.appendChild(logo);
  container.appendChild(nav);
  container.appendChild(burgerMenu);
  header.appendChild(container);

  // Hamburger menu functionality
  let hamburgerMenu = document.querySelector(".burger-menu");
  let navBar = document.querySelector(".nav");

  hamburgerMenu.addEventListener("click", () => {
    let vis = navBar.getAttribute("data-visibility");
    if (vis === "false") {
      navBar.setAttribute("data-visibility", "true");
      hamburgerMenu.classList.add("active");
    } else {
      navBar.setAttribute("data-visibility", "false");
      hamburgerMenu.classList.remove("active");
    }
  });
});
