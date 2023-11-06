window.addEventListener("load", function () {
  const myBody = document.querySelector("body");
  const myDefaultH1 = document.querySelector("h1");
  const myFirstH1 = document.createElement("h1");
  const myP = document.createElement("p");
  const myImg = document.createElement("img");
  const mySecondH1 = document.createElement("h1");
  const myUl = document.createElement("ul");
  const myFirstLi = document.createElement("li");
  const mySecondLi = document.createElement("li");
  const myH2 = document.createElement("h2");
  const myA = document.createElement("a");

  myDefaultH1.remove();
  myFirstH1.append("Webpage Recreation Practice");
  myP.append("The HTML of this webpage was created with JavaScript.");
  myImg.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  myImg.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  myImg.style.width = "50%";
  mySecondH1.append("Facts about the Multicolored Tanager");
  myFirstLi.append("It is endemic to the mountains of Colombia.");
  mySecondLi.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  myH2.append("Source");
  myA.append("Wikipedia");
  myA.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");

  myBody.prepend(myFirstH1);
  myFirstH1.after(myP);
  myBody.append(myImg);
  myImg.after(myUl);
  myUl.append(myFirstLi, mySecondLi);
  myUl.before(mySecondH1);
  myUl.after(myH2);
  myBody.append(myA);

});