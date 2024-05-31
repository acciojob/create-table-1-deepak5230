function insert_Row() {
        const table = document.getElementById('sampleTable');
    
    // Create a new row and two new cells
    const newRow = table.insertRow(0); // Insert at the top (index 0)
    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);
    
    // Set the text for the new cells
    newCell1.textContent = 'New Cell1';
    newCell2.textContent = 'New Cell2';

  
  
}
