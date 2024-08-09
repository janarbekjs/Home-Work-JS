// ! Home-Work
// ! Task 1

// const main1 = document.getElementById("main-heading");
// main1.style.color = "blue";
// main1.style.fontSize = "50px";
// main1.textContent = "Popular products";
// console.log(main1);

// ! Task 2

// const firstAside = document.getElementsByTagName("aside");
// firstAside[0].remove();
// console.log(firstAside);

// ! Task 3

// const section = document.getElementsByClassName("section")[0];
// const h3 = document.getElementsByClassName("heading");
// section.firstElementChild.classList.remove('heading');
// console.log(section);

// ! Task 4

const array = [
  // {
  //   icon: "https://iconape.com/wp-content/files/od/367794/svg/logo-twitter-logo-icon-png-svg.png",
  //   title: "TWITTER",
  //   description:
  //     "Free Twitter icons, logos, symbols in 50+ UI design styles. Download Static and animated Twitter vector icons and logos for free in PNG, SVG, GIF.Normalnyi elebi?",
  //   link: "https://en.wikipedia.org/wiki/Twitter",
  // },
  {
    icon: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/62-instagram-512.png",
    title: "INSTAGRAM",
    description:
      "Instagram is a photo and video sharing social networking service owned by Meta Platforms. It allows users to upload media that can be edited with filters",
    link: "https://en.wikipedia.org/wiki/Instagram",
  },
  {
    icon: "https://shorturl.at/G08z4",
    title: "TELEGRAM",
    description:
      "Telegram Messenger, commonly known as Telegram, is a cloud-based, encrypted, cross-platform, instant messaging (IM) service. It was originally launched for,Normbu?",
    link: "https://en.wikipedia.org/wiki/Telegram_(software)",
  },
];

const taibl = document.getElementById("link");
array.map((element) => {
  const con = document.createElement("li");
  con.className = "listcls";

  const image = document.createElement("img");
  image.src = element.icon;
  image.style.width = "130px";
  image.style.paddingLeft = "130px";
  image.style.paddingTop = "50px";

  const h1 = document.createElement("h1");
  h1.textContent = element.title;
  h1.style.fontSize = "40px";
  h1.style.paddingLeft = "70px";
  h1.style.fontFamily = " sans-serif";

  const p = document.createElement("p");
  p.textContent = element.description;
  p.style.paddingLeft = "20px";
  p.style.fontSize = "16px";
  p.style.fontFamily = "sans-serif";

  const button = document.createElement("button");
  button.style.fontSize = "25px";
  button.style.borderRadius = "25px";
  button.style.marginLeft = "85px";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.padding = "12px";
  button.style.width = "225px";
  button.className = "hover";

  const a = document.createElement("a");
  a.textContent = "READ MORE";

  a.addEventListener("click", () => {
    a.href = element.link;
  });
  button.append(a);

  con.append(image, h1, p, button);
  taibl.append(con);
});
