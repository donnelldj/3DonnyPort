body {
    font-family: 'Arial', sans-serif;
    color: #fff;
    background-color: #1a1a1a; /* Slight gray for better contrast */
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

nav {
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
}

nav a {
    text-decoration: none;
    color: #fff;
    padding: 15px 25px;
    display: block;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}

nav a:hover {
    background-color: #555;
}

header {
    text-align: center;
    margin-top: 50px;
}

header div {
    margin-top: 20px;
}

input[type="text"] {
    padding: 10px;
    border: none;
    border-radius: 8px 0 0 8px;
    width: 60%;
}

button {
    padding: 10px 20px;
    border: none;
    background-color: #f57c00; /* Orange from the image */
    color: #fff;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #d66600; /* Darker orange */
}

.offerings {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 50px;
}

.offerings div {
    padding: 20px;
    border-radius: 8px;
    background-color: #333;
    transition: transform 0.3s ease;
}

.offerings div:hover {
    transform: translateY(-5px);
}

.ai-solution-btn {
    margin-top: 20px;
    display: inline-block;
    background-color: #f57c00;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}

.ai-solution-btn:hover {
    background-color: #d66600;
}

footer {
    background-color: #333;
    padding: 20px;
    text-align: center;
    position: relative;
    margin-top: 50px;  /* Providing space between the new content and the footer */
    bottom: 0;
    width: 100%;
        
}

footer a {
    color: #f57c00;
    text-decoration: none;
    margin: 0 10px;
    transition: color 0.3s ease;
    
}

footer a:hover {
    color: #d66600;
}

.additional-content {
    padding: 50px 20px;  /* Adjust the padding as needed */
    background-color: #000000;  /* Black background for the new section */
    color: #FFFFFF;  /* Brilliant white text for the new section */
}
@keyframes heartbeat {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
