<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Handling Example</title>
</head>
<body>

  <h1>JavaScript Event Handling Example</h1>

  <p id="text">Click the button to change this text.</p>
  <button id="myButton">Click Me!</button>

  <script>
    // Select the button and paragraph elements
    const button = document.getElementById('myButton');
    const paragraph = document.getElementById('text');

    // Add event listener to the button
    button.addEventListener('click', function() {
      // Change the text of the paragraph
      paragraph.textContent = 'The text has been changed!';
    });
  </script>

</body>
</html>
