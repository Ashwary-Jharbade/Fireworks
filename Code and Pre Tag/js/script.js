const copy = () => {
  let obj = document.getElementById("text");

  const elem = document.createElement("textarea");
  elem.value = obj.innerHTML;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
};
