function fetchReservations() {
    fetch("/api/reservations", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                renderReservations(data.data); // Pass reservations to render function
            } else {
                console.error("Failed to fetch reservations:", data.message);
            }
        })
        .catch((error) => {
            console.error("Error fetching reservations:", error);
        });
}

function renderReservations(reservations) {
    const tableBody = document.getElementById("reservationsTableBody");
    tableBody.innerHTML = ""; // Clear existing content

    reservations.forEach((reservation) => {
        const row = document.createElement("tr");

        // Create cells for each data field
        const nameCell = document.createElement("td");
        nameCell.textContent = reservation.user_name;

        const emailCell = document.createElement("td");
        emailCell.textContent = reservation.user_email;

        const squareCell = document.createElement("td");
        squareCell.textContent = `${reservation.square_quantity} (${reservation.square_cost})`;

        const servicesCell = document.createElement("td");
        servicesCell.textContent = JSON.parse(reservation.services)
            .map((service) => `${service.name} (${service.quantity})`)
            .join(", ");

        // Append cells to the row
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(squareCell);
        row.appendChild(servicesCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}
