import androids from "./android";
import cameras from "./camera";
import laptops from "./laptop";

const fakeData = [...androids, ...cameras, ...laptops];

// --Shuddle data or Randomize data show when its refresh the page --//
const shuffle = (a) => {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
};

shuffle(fakeData);

export default fakeData;
