document.addEventListener('DOMContentLoaded', function() {
    // Reference to the database paths
    var moistureRef = firebase.database().ref('Moisture');
    var phRef = firebase.database().ref('pHValue');

    // Function to update the HTML with new data
    function updateData(snapshot, elementId) {
        document.getElementById(elementId).textContent = snapshot.val();
    }

    // Attach an asynchronous callback to read the data
    moistureRef.on('value', function(snapshot) {
        updateData(snapshot, 'moisture-level');
    }, function(errorObject) {
        console.log('The read failed: ' + errorObject.name);
    });

    phRef.on('value', function(snapshot) {
        updateData(snapshot, 'ph-value');
    }, function(errorObject) {
        console.log('The read failed: ' + errorObject.name);
    });
});
