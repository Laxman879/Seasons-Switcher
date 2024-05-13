let seasonsSmallImageElement = document.getElementById("seasonSmallImage");
let seasonMediumImageElement = document.getElementById("seasonMediumImage");

let springSmallImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springMediumImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let summerSmallImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summerMediumImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let autumnSmallImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let autumnMediumImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let winterSmallImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let winterMediumImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function changeSeasonToSpring() {
  document.getElementById("seasonSmallImage").src = springSmallImage;
  document.getElementById("seasonMediumImage").src = springMediumImage;
}

function changeSeasonToSummer() {
  document.getElementById("seasonSmallImage").src = summerSmallImage;
  document.getElementById("seasonMediumImage").src = summerMediumImage;
}

function changeSeasonToAutumn() {
  document.getElementById("seasonSmallImage").src = autumnSmallImage;
  document.getElementById("seasonMediumImage").src = autumnMediumImage;
}

function changeSeasonToWinter() {
  document.getElementById("seasonSmallImage").src = winterSmallImage;
  document.getElementById("seasonMediumImage").src = winterMediumImage;
}
