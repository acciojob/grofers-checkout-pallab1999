const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with class "price"
  const priceElements = document.querySelectorAll(".price");

  // Calculate the total sum
  let totalPrice = 0;
  priceElements.forEach((price) => {
    totalPrice += parseFloat(price.innerText); // Convert text to number and sum up
  });

  // Check if the total row already exists, remove if present
  const existingTotalRow = document.getElementById("totalRow");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new row for total price
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  totalRow.setAttribute("id", "totalRow");

  // Create a single cell spanning 2 columns
  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2");
  totalCell.style.fontWeight = "bold";
  totalCell.style.textAlign = "center";
  totalCell.innerText = `Total Price: Rs ${totalPrice}`;

  // Append cell to row, and row to table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
