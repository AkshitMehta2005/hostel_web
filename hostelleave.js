document.getElementById('leave-end-date').addEventListener('change', function() {
    // Get the value of the end date input
    var endDateValue = this.value;

    // Set the minimum attribute of the start date input to the end date
    document.getElementById('leave-start-date').min = endDateValue;
});
