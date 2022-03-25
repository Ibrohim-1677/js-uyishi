
const rossiya = {
    name : "Rossiya",
    flagURL : "https://eabr.org/upload/resize_cache/iblock/e4c/295_215_1/russia.jpg",
    currency: "rubl"
  }

const wrapper = document.querySelector(".wrapper");

const  countryName =  document.createElement("h2");
countryName.textContent = rossiya.name;
countryName.className = "cuntry__title";

const countryImg = document.createElement("img");
countryImg.src = rossiya.flagURL;
countryImg.className = "country__img";

const currency = document.createElement("p");
currency.textContent = rossiya.currency;
currency.className = "currently";



wrapper.append(countryName);
wrapper.append(currency);
wrapper.append(countryImg);

const amerika = {
  name : "Amerika",
  flagURL : "https://i.worldlifeadvice.com/images/006/image-16283-5.jpg",
  currency: "dollor"
}
const USE = document.querySelector(".amerika");

const  amerikaName =  document.createElement("h2");
amerikaName.textContent = amerika.name;
amerikaName.className = "cuntry__title";

const amerikaImg = document.createElement("img");
amerikaImg.src = amerika.flagURL;
amerikaImg.className = "country__img";
amerikaImg.style.width = "300px";

const currencyUSE = document.createElement("p");
currencyUSE.textContent = amerika.currency;
currencyUSE.className = "currently";

USE.append(amerikaName);
USE.append(currencyUSE);
USE.append(amerikaImg);

const uzbekistan= {
  name : "O'zbekiston",
  flagURL : "https://uzkoram.uz/wp-content/uploads/2018/04/uzbekistan-flag-300x200.jpg",
  currency: "s'om"
}
const UZB = document.querySelector(".UZB");

const  UZBName =  document.createElement("h2");
UZBName.textContent = uzbekistan.name;
UZBName.className = "cuntry__title";

const UZBImg = document.createElement("img");
UZBImg.src = uzbekistan.flagURL;
UZBImg.className = "country__img";

const currencyUZB = document.createElement("p");
currencyUZB.textContent = uzbekistan.currency;
currencyUZB.className = "currently";

UZB.append(UZBName);
UZB.append(currencyUZB);
UZB.append(UZBImg);


