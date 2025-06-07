<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $category = htmlspecialchars($_POST['category'] ?? 'Not Selected'); // Default to 'Not Selected' if empty
    $product = htmlspecialchars($_POST['product'] ?? 'Not Selected'); // Default to 'Not Selected' if empty
    $message = htmlspecialchars($_POST['message']);

    $to = "rkromi.medico@gmail.com"; // Replace with your email
    $subject = "New Enquiry from MediComforts Website";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nCategory: $category\nProduct: $product\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        // Redirect to the success page
        header("Location: success.html");
        exit();
    } else {
        echo "Error: Unable to send the message. Please try again later.";
    }
} else {
    echo "Invalid Request.";
}
?> 