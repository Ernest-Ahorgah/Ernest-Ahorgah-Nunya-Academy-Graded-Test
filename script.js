   
    const questions = [
      {
        question: "1. Which category of software directly manages computer hardware and provides a platform for running applications?",
        options: ["Application Software", "System Software", "Utility Software", "Middleware"],
        answer: "System Software"
      },
      {
        question: "2. Photoshop, Zoom, and WhatsApp are examples of which software category?",
        options: ["System Software", "Application Software", "Programming Software", "Driver Software"],
        answer: "Application Software"
      },
      {
        question: "3. Which software category is often referred to as the 'Developer's Toolkit'?",
        options: ["System Software", "Application Software", "Programming Software", "Middleware"],
        answer: "Programming Software"
      },
      {
        question: "4. Antivirus programs and disk cleanup tools fall under which software category?",
        options: ["System Software", "Utility Software", "Middleware", "Educational Software"],
        answer: "Utility Software"
      },
      {
        question: "5. Which software category acts as a bridge between different software applications or systems?",
        options: ["Driver Software", "Middleware", "System Software", "Programming Software"],
        answer: "Middleware"
      },
      {
        question: "6. What type of software allows the operating system to communicate with specific hardware devices?",
        options: ["Middleware", "System Software", "Driver Software", "Utility Software"],
        answer: "Driver Software"
      },
      {
        question: "7. Duolingo and Khan Academy are examples of which software category?",
        options: ["Educational Software", "Application Software", "System Software", "Utility Software"],
        answer: "Educational Software"
      },
      {
        question: "8. Which of the following is NOT an example of system software?",
        options: ["Windows", "macOS", "Linux", "Microsoft Word"],
        answer: "Microsoft Word"
      },
      {
        question: "9. Visual Studio and Eclipse are examples of tools in which software category?",
        options: ["System Software", "Application Software", "Programming Software", "Middleware"],
        answer: "Programming Software"
      },
      {
        question: "10. Which software category is sometimes referred to as 'System Optimizers'?",
        options: ["System Software", "Utility Software", "Middleware", "Driver Software"],
        answer: "Utility Software"
      },
      {
        question: "11. Apache Kafka and Microsoft BizTalk are examples of which software category?",
        options: ["Middleware", "System Software", "Application Software", "Programming Software"],
        answer: "Middleware"
      },
      {
        question: "12. Printer drivers and graphics card drivers belong to which software category?",
        options: ["System Software", "Driver Software", "Utility Software", "Middleware"],
        answer: "Driver Software"
      },
      {
        question: "13. Which software category is designed specifically for teaching and learning purposes?",
        options: ["Application Software", "Educational Software", "System Software", "Utility Software"],
        answer: "Educational Software"
      },
      {
        question: "14. The analogy 'If hardware is the body of a computer, software is its mind and soul' best describes which relationship?",
        options: ["Hardware vs. Software", "System Software vs. Application Software", "Programming Software vs. Utility Software", "Driver Software vs. Middleware"],
        answer: "Hardware vs. Software"
      },
      {
        question: "15. Which software category provides the core operating environment for a computer?",
        options: ["Application Software", "System Software", "Programming Software", "Utility Software"],
        answer: "System Software"
      },
      {
        question: "16. Moodle is an example of which type of software?",
        options: ["Learning Management System", "Programming Environment", "System Optimizer", "Middleware"],
        answer: "Learning Management System"
      },
      {
        question: "17. Which software category would include programming languages like Python and Java?",
        options: ["System Software", "Application Software", "Programming Software", "Educational Software"],
        answer: "Programming Software"
      },
      {
        question: "18. File compression tools like WinZip or 7-Zip belong to which software category?",
        options: ["System Software", "Utility Software", "Application Software", "Middleware"],
        answer: "Utility Software"
      },
      {
        question: "19. Which software category is described as the 'Connective Tissue' between different applications?",
        options: ["Driver Software", "Middleware", "System Software", "Utility Software"],
        answer: "Middleware"
      },
      {
        question: "20. What is the primary purpose of driver software?",
        options: ["To optimize system performance", "To enable OS communication with hardware", "To provide educational content", "To connect different software applications"],
        answer: "To enable OS communication with hardware"
      },
      {
        question: "21. Which of the following is a mobile operating system that falls under the system software category?",
        options: ["Photoshop", "Android", "Zoom", "Kaspersky"],
        answer: "Android"
      },
      {
        question: "22. IntelliJ IDE and Dr.Racket are tools used in which software category?",
        options: ["System Software", "Application Software", "Programming Software", "Educational Software"],
        answer: "Programming Software"
      },
      {
        question: "23. Which software category would include tools like McAfee and Kaspersky?",
        options: ["System Software", "Utility Software", "Application Software", "Middleware"],
        answer: "Utility Software"
      },
      {
        question: "24. What is the main characteristic that distinguishes application software from system software?",
        options: ["Application software is intangible", "Application software performs specific user tasks", "Application software manages hardware", "Application software provides a platform for other software"],
        answer: "Application software performs specific user tasks"
      },
      {
        question: "25. Which software category is essential for creating other software applications?",
        options: ["System Software", "Application Software", "Programming Software", "Utility Software"],
        answer: "Programming Software"
      },
      {
        question: "26. What is the primary function of utility software?",
        options: ["To manage hardware resources", "To perform specific user tasks", "To optimize, maintain, and protect the system", "To enable communication between applications"],
        answer: "To optimize, maintain, and protect the system"
      },
      {
        question: "27. Which software category would Microsoft Excel belong to?",
        options: ["System Software", "Application Software", "Programming Software", "Utility Software"],
        answer: "Application Software"
      },
      {
        question: "28. What role does middleware play in complex systems?",
        options: ["It manages hardware resources", "It performs specific user tasks", "It allows different systems to work together seamlessly", "It optimizes system performance"],
        answer: "It allows different systems to work together seamlessly"
      },
      {
        question: "29. Which of the following is NOT an example of utility software?",
        options: ["Antivirus Software", "Disk Cleanup Tools", "File Compression Tools", "Apache Kafka"],
        answer: "Apache Kafka"
      },
      {
        question: "30. What is the key difference between system software and application software?",
        options: ["System software is tangible while application software is intangible", "System software performs specific tasks while application software provides a platform", "System software manages hardware while application software serves user needs", "System software is more expensive than application software"],
        answer: "System software manages hardware while application software serves user needs"
      },
      {
        question: "31. Which software category is described as 'the mind and soul' of a computer in the analogy?",
        options: ["Hardware", "System Software", "All Software", "Application Software"],
        answer: "All Software"
      },
      {
        question: "32. What is a common characteristic of all software types?",
        options: ["They are all tangible", "They all directly interact with hardware", "They are all sets of instructions or data", "They all perform specific user tasks"],
        answer: "They are all sets of instructions or data"
      },
      {
        question: "33. Which software category would include programming languages and development environments?",
        options: ["System Software", "Application Software", "Programming Software", "Educational Software"],
        answer: "Programming Software"
      },
      {
        question: "34. What is the primary purpose of educational software?",
        options: ["To manage computer resources", "To facilitate teaching and learning", "To optimize system performance", "To connect different applications"],
        answer: "To facilitate teaching and learning"
      },
      {
        question: "35. Which of the following is an example of middleware?",
        options: ["Windows", "Microsoft BizTalk", "McAfee", "Duolingo"],
        answer: "Microsoft BizTalk"
      },
      {
        question: "36. What is the relationship between system software and application software?",
        options: ["Application software provides a platform for system software", "System software runs on top of application software", "Application software requires system software to function", "They are independent and don't interact with each other"],
        answer: "Application software requires system software to function"
      },
      {
        question: "37. Which software category is specifically designed to make learning interactive and accessible?",
        options: ["System Software", "Application Software", "Educational Software", "Programming Software"],
        answer: "Educational Software"
      },
      {
        question: "38. What is the role of driver software in the computer ecosystem?",
        options: ["To translate between OS and hardware components", "To optimize system performance", "To provide educational content", "To connect different software applications"],
        answer: "To translate between OS and hardware components"
      },
      {
        question: "39. Which of the following is a key characteristic of utility software?",
        options: ["It focuses on infrastructure and performance", "It performs specific user tasks", "It provides a platform for other software", "It connects different applications"],
        answer: "It focuses on infrastructure and performance"
      },
      {
        question: "40. What distinguishes programming software from other categories?",
        options: ["It is used to create other software", "It manages hardware resources", "It performs specific user tasks", "It connects different applications"],
        answer: "It is used to create other software"
      },
      {
        question: "41. Which software category would include real-time data streaming tools?",
        options: ["System Software", "Application Software", "Middleware", "Utility Software"],
        answer: "Middleware"
      },
      {
        question: "42. What is the common purpose of all application software?",
        options: ["To manage hardware resources", "To help users perform specific tasks", "To optimize system performance", "To create other software"],
        answer: "To help users perform specific tasks"
      },
      {
        question: "43. Which software category is essential for running application software?",
        options: ["Programming Software", "System Software", "Utility Software", "Middleware"],
        answer: "System Software"
      },
      {
        question: "44. What is the primary function of system software?",
        options: ["To perform specific user tasks", "To manage hardware and provide a platform for applications", "To optimize system performance", "To facilitate learning"],
        answer: "To manage hardware and provide a platform for applications"
      },
      {
        question: "45. Which of the following is NOT a characteristic of software in general?",
        options: ["It is intangible", "It consists of instructions and data", "You can physically touch it", "It enables hardware to perform tasks"],
        answer: "You can physically touch it"
      },
      {
        question: "46. What is the relationship between programming software and application software?",
        options: ["Programming software is used to create application software", "Application software is used to create programming software", "They are the same category", "They don't interact with each other"],
        answer: "Programming software is used to create application software"
      },
      {
        question: "47. Which software category would business process integration tools belong to?",
        options: ["System Software", "Application Software", "Middleware", "Utility Software"],
        answer: "Middleware"
      },
      {
        question: "48. What is a key characteristic of educational software?",
        options: ["It manages hardware resources", "It focuses on infrastructure and performance", "It is designed for instruction and education", "It translates between OS and hardware"],
        answer: "It is designed for instruction and education"
      },
      {
        question: "49. Which software category is described as the 'Hardware Translator'?",
        options: ["System Software", "Application Software", "Driver Software", "Middleware"],
        answer: "Driver Software"
      },
      {
        question: "50. How do all software categories work together in a computer system?",
        options: ["They work independently without interaction", "They compete for system resources", "They form a functional ecosystem where each category has a specific role", "Only system software is essential; others are optional"],
        answer: "They form a functional ecosystem where each category has a specific role"
      }
    ];

    let currentQuestion = 0;
    let score = 0;
    let studentName = "";
    let timer;
    let timeLeft = 30;

    const welcomeScreen = document.getElementById("welcome-screen");
    const quizBox = document.getElementById("quiz-box");
    const questionBox = document.getElementById("question");
    const optionsBox = document.getElementById("options");
    const nextBtn = document.getElementById("next-btn");
    const resultBox = document.getElementById("result-box");
    const scoreText = document.getElementById("score");
    const studentNameInput = document.getElementById("student-name");
    const startBtn = document.getElementById("start-btn");
    const timeDisplay = document.getElementById("time");
    const timerBar = document.getElementById("timer-bar");
    const nameResult = document.getElementById("name-result");
    const teacherEmail = document.getElementById("teacher-email");
    const messageArea = document.getElementById("message");
    const submitBtn = document.getElementById("submit-btn");

    // Start the quiz when the start button is clicked
    startBtn.addEventListener("click", () => {
      studentName = studentNameInput.value.trim();
      if (studentName === "") {
        alert("Please enter your name to continue.");
        return;
      }
      
      welcomeScreen.classList.add("hidden");
      quizBox.classList.remove("hidden");
      showQuestion(currentQuestion);
      startTimer();
    });

    function showQuestion(index) {
      // Reset timer
      clearInterval(timer);
      timeLeft = 30;
      timeDisplay.textContent = timeLeft;
      timerBar.style.width = "100%";
      startTimer();
      
      const q = questions[index];
      questionBox.innerText = q.question;
      optionsBox.innerHTML = "";

      q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option-btn");
        btn.onclick = () => selectAnswer(btn, q.answer);
        optionsBox.appendChild(btn);
      });
      
      // Update next button text for last question
      if (index === questions.length - 1) {
        nextBtn.textContent = "Submit Test";
      } else {
        nextBtn.textContent = "Next";
      }
    }

    function selectAnswer(button, correctAnswer) {
      const allButtons = document.querySelectorAll(".option-btn");
      allButtons.forEach(btn => btn.disabled = true);
      
      // Stop the timer when an answer is selected
      clearInterval(timer);

      if (button.innerText === correctAnswer) {
        button.classList.add("correct");
        score++;
      } else {
        button.classList.add("wrong");
        allButtons.forEach(btn => {
          if (btn.innerText === correctAnswer) btn.classList.add("correct");
        });
      }
    }

    function startTimer() {
      clearInterval(timer);
      timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        timerBar.style.width = (timeLeft / 30) * 100 + "%";
        
        if (timeLeft <= 0) {
          clearInterval(timer);
          // Auto move to next question when time is up
          nextQuestion();
        }
      }, 1000);
    }

    function nextQuestion() {
      clearInterval(timer);
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
      } else {
        showResult();
      }
    }

    nextBtn.addEventListener("click", nextQuestion);

    function showResult() {
      clearInterval(timer);
      quizBox.classList.add("hidden");
      resultBox.classList.remove("hidden");
      scoreText.innerText = `${score} out of ${questions.length}`;
      
      // Prefill the form with student name and results
      nameResult.value = studentName;
      messageArea.value = `Student Name: ${studentName}\nTest Score: ${score}/${questions.length}`;
    }

    // Email submission functionality
    submitBtn.addEventListener("click", () => {
      const email = "myconernext@gmail.com";
      if (!email) {
        email="myconernext@gmail.com";
        return;
      }
      
      const subject = "Nunya Academy Test Results";
      const body = messageArea.value;
      
      // Create mailto link
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      alert("Test Score submitted succesffully");

    })
