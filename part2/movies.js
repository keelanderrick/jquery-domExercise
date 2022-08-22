let table = $('#movie-table');
// function that handles adding a movie to the list
$('#movie-form').on('submit', (event) => {
    event.preventDefault();
    let title = event.target[0];
    let rating = event.target[1];

    // make our new row object
    let newRow = $("<tr>");

    // creating a button and giving it an event listener that will delete the row when pushed
    let deleteBtn = $("<button class='btn btn-danger'>Delete</button>");
    deleteBtn.on('click', (event) => {
        event.target.closest("tr").remove();
    })

    // append the cells to the row object
    newRow.append(`<td>${title.value}</td><td>${rating.value}</td>`, $("<td>").append(deleteBtn));
    // append the row to the table itself
    table.append(newRow);
})