/* Reset styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
    overflow: hidden; /* Prevent default scrolling */
    font-family: Arial, sans-serif;
}

/* Navigation Bar */
.navbar {
    position: fixed;
    top: 0;
    right: 0;
    background: rgba(0,0,0,0.7);
    padding: 1rem;
    z-index: 1000;
}

.navbar a {
    color: #fff;
    text-decoration: none;
    margin-left: 1rem;
    font-size: 1rem;
}

.navbar a:hover {
    text-decoration: underline;
}

/* Fix stacking of sections */
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    transition: transform 1s ease-in-out;
    position: relative;
}

/* Ensure each section properly stacks */
.section {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    position: relative;
}

/* Triangles on the first section */
.triangle-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    gap: 5px;
    background-color: black;
    z-index: 1;
}

/* Individual triangle */
.triangle {
    width: 40px;
    height: 40px;
    background-color: blue;
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    transition: transform 0.4s ease, background-color 0.4s ease;
}

/* Hover effect: Flip and change color */
.triangle:hover {
    transform: rotateY(180deg);
    background-color: red;
    box-shadow: 0 0 10px red;
}

/* Title overlay for text */
.title-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.6);
    padding: 1rem 2rem;
    border-radius: 10px;
    z-index: 2;
}

/* Backgrounds for other sections */
#section2 { background-image: url("img2.jpg"); background-size: cover; }
#section3 { background-image: url("img3.jpg"); background-size: cover; }
#section4 { background-image: url("img4.jpg"); background-size: cover; }
#section5 { background-image: url("img5.jpg"); background-size: cover; }

/* Content block styling */
.content {
    background: rgba(0, 0, 0, 0.6);
    padding: 2rem;
    border-radius: 10px;
    max-width: 800px;
}
