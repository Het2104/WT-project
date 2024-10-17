<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gdb";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get email and password from the POST request
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Prepare the SQL query to select the user from the database
    $sql = "SELECT * FROM g_table WHERE email = ?";
    $stmt = mysqli_prepare($conn, $sql);

    // Bind the email parameter to the SQL query
    mysqli_stmt_bind_param($stmt, "s", $email);

    // Execute the query
    mysqli_stmt_execute($stmt);

    // Get the result
    $result = mysqli_stmt_get_result($stmt);

    // Check if a user with the provided email exists
    if (mysqli_num_rows($result) == 1) {
        // Fetch the user's data
        $row = mysqli_fetch_assoc($result);

        // Verify the plain text password (for simplicity, no hashing)
        if ($password == $row['password']) {
            // Password is correct
            echo "Login successful! Welcome, " . $email;
        } else {
            // Password is incorrect
            echo "Invalid password.";
        }
    } else {
        // User with the provided email does not exist
        echo "No account found with that email.";
    }

    // Close the statement
    mysqli_stmt_close($stmt);
}

// Close the connection
mysqli_close($conn);
?>

<!-- HTML form for login -->
<form method="POST" action="">
    <input type="email" name="email" placeholder="Enter your email" required><br>
    <input type="password" name="
