const target = document.querySelector("#target")

const list1 = document.createElement("li");
list1.textContent = "First item";
target.appendChild(list1)

const list2 = document.createElement("li");
list2.textContent = "Second item";
list2.classList.add("my-item");
target.appendChild(list2);

const list3 = document.createElement("li");
list3.textContent = "Third item";
target.appendChild(list3);
