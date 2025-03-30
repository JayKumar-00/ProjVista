// document.addEventListener("DOMContentLoaded", function () {

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("menu-toggle").addEventListener("click", function(){
//         let menuContainer = document.getElementById("mob-menu-container");

//         // Toggle height expansion
//         if (menuContainer.classList.contains("h-0")) {
//         menuContainer.classList.remove("h-0");
//         menuContainer.classList.add("h-auto");
//         } else {
//         menuContainer.classList.add("h-0");
//         menuContainer.classList.remove("h-auto");
//         }
        
//         window.addEventListener("resize", function () {
//             if (window.innerWidth >= 1024) {
//             document.getElementById("mobile-menu-container").classList.add("h-0");
//             document.getElementById("mobile-menu-container").classList.remove("h-auto");
//             }
//         })
//     })
// });

// // Log-in
// document.addEventListener("DOMContentLoaded", function () {
//     const loginForm = document.getElementById("login-form");

//     if (loginForm) { // ✅ Only run if the form exists
//         loginForm.addEventListener("submit", function(event) {
//             event.preventDefault();
//             const username = document.getElementById("username").value;
//             const password = document.getElementById("password").value;
//             if (username && password) {
//                 sessionStorage.setItem("loggedIn", "true");
//                 window.location.href = "index.html"; // Redirect to main page
//             } else {
//                 alert("Please enter a valid username and password.");
//             }
//         });
//     }
// });

// // Sign-Up
// document.addEventListener("DOMContentLoaded", function () {
// document.getElementById("signup-form").addEventListener("submit", function(event) {
//       event.preventDefault();
//       alert("Account created successfully! Please log in.");
//       window.location.href = "login.html"; // Redirect to login page
//   });
//   function logout() {
//       sessionStorage.removeItem("loggedIn");
//       window.location.href = "login.html";
//   }
// });

// // Uploaded file
// function displayUploadedFiles(files) {
//     const container = document.getElementById("uploaded-files");
//     container.innerHTML = "";
//     files.forEach(file => {
//         const fileElement = document.createElement("div");
//         fileElement.className = "p-4 border rounded-lg shadow-sm bg-gray-50";
//         fileElement.innerHTML = `
//             <p class="text-gray-700 font-semibold">${file.name}</p>
//             <a href="${file.url}" class="text-blue-500 text-sm" target="_blank">View</a>
//         `;
//         container.appendChild(fileElement);
//     });
// }
// });



document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile menu
    const menuToggle = document.getElementById("menu-toggle");
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            let menuContainer = document.getElementById("mob-menu-container");
            if (menuContainer.classList.contains("h-0")) {
                menuContainer.classList.remove("h-0");
                menuContainer.classList.add("h-auto");
            } else {
                menuContainer.classList.add("h-0");
                menuContainer.classList.remove("h-auto");
            }
        });
    }

    // Login functionality
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            if (username && password) {
                sessionStorage.setItem("loggedIn", "true");
                window.location.href = "index.html"; // Redirect to main page
            } else {
                alert("Please enter a valid username and password.");
            }
        });
    }

    // Sign-up functionality
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Account created successfully! Please log in.");
            window.location.href = "login.html";
        });
    }

    // Logout function
    function logout() {
        sessionStorage.removeItem("loggedIn");
        window.location.href = "login.html";
    }
    window.logout = logout; // Attach function to global scope

    // Handle file upload and display
    const projectForm = document.getElementById("project-form");
    if (projectForm) {
        projectForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            let projectName = document.getElementById("project-name").value;
            let projectDescription = document.getElementById("project-description").value;
            let sourceCode = document.getElementById("source-code").files[0];
            let reportDocument = document.getElementById("report-document").files[0];

            if (!sourceCode || !reportDocument) {
                alert("Please upload both source code and report document!");
                return;
            }

            let uploadedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];

            let newProject = {
                name: projectName,
                description: projectDescription,
                files: [
                    { name: sourceCode.name, url: URL.createObjectURL(sourceCode) },
                    { name: reportDocument.name, url: URL.createObjectURL(reportDocument) }
                ]
            };

            uploadedFiles.push(newProject);
            localStorage.setItem("uploadedFiles", JSON.stringify(uploadedFiles));

            displayUploadedFiles();
        });
    }

    // Function to display uploaded files
    function displayUploadedFiles() {
        const container = document.getElementById("uploaded-files");
        if (!container) return;

        container.innerHTML = "";
        let uploadedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];

        uploadedFiles.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.className = "p-4 border rounded-lg shadow-sm bg-gray";
            projectElement.innerHTML = `
                <h3 class="font-bold text-gray-800 text-2xl">${project.name}</h3>
                <p class="text-gray-600 text-lg">${project.description}</p>
                <ul class="mt-2">
                    ${project.files.map(file => `<li><a href="${file.url}" class="text-grayBlue" target="_blank">${file.name}</a></li>`).join("")}
                </ul>
            `;
            container.appendChild(projectElement);
        });
    }

    // Load uploaded files on page load
    displayUploadedFiles();
});

// logo
gsap.from("#logo",{
    y:20,
    opacity:0,
    duration:1,
    scale:0.2
})

// Guitar-String
var initialPath = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");

if (string) {
    string.addEventListener("mousemove", function (dets) {
        let bounding = string.getBoundingClientRect();
        let x = dets.clientX - bounding.left; // Mouse X relative to element
        let y = dets.clientY - bounding.top;  // Mouse Y relative to element

        // Make X movement very free but keep it within reasonable bounds
        let clampedX = Math.max(50, Math.min(x, 950)); 

        // Loosen Y restrictions but keep right side from coming down too much
        let yLimit = clampedX > 800 ? 110 : 200; // Near right (x > 800), limit downward motion
        let clampedY = Math.max(30, Math.min(y, yLimit)); // More loose movement overall

        let path = `M 10 100 Q ${clampedX} ${clampedY} 990 100`;

        gsap.to("svg path", {
            attr: { d: path },
            duration: 0.25,
            ease: "power2.out"
        });
    });

    string.addEventListener("mouseleave", function () {
        gsap.to("svg path", {
            attr: { d: finalPath },
            duration: 1.2,
            ease: "elastic.out(1,0.3)"
        });
    });
} else {
    console.error("Element with ID 'string' not found");
}
