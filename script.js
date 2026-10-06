/* ========================================
   SABINA BIRTHDAY EXPERIENCE
   JAVASCRIPT
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loadingScreen = document.getElementById("loadingScreen");
    const loadingProgress = document.getElementById("loadingProgress");
    const loadingText = document.getElementById("loadingText");

    const mainContent = document.getElementById("mainContent");
    const startButton = document.getElementById("startButton");

    const secretButton = document.getElementById("secretButton");
    const closeSecret = document.getElementById("closeSecret");
    const secretSection = document.getElementById("secretSection");

    const cake = document.querySelector(".cake");
    const wishMessage = document.getElementById("wishMessage");

    const confettiContainer =
        document.getElementById("confettiContainer");

    let loadingValue = 0;
    let candlesBlown = 0;

    /* ========================================
       BODY SCROLL LOCK
    ======================================== */

    document.body.classList.add("no-scroll");


    /* ========================================
       LOADING SCREEN
    ======================================== */

    const loadingMessages = [
        "Sehrli muhit tayyorlanmoqda...",
        "Chiroyli tilaklar yig‘ilmoqda...",
        "Tort tayyorlanmoqda...",
        "Konfettilar tayyor...",
        "Deyarli tayyor...",
        "Sabina uchun ochilmoqda..."
    ];

    const loadingInterval = setInterval(() => {

        loadingValue += Math.floor(Math.random() * 7) + 4;

        if (loadingValue > 100) {
            loadingValue = 100;
        }

        loadingProgress.style.width =
            loadingValue + "%";

        const messageIndex =
            Math.min(
                Math.floor(loadingValue / 18),
                loadingMessages.length - 1
            );

        loadingText.textContent =
            loadingMessages[messageIndex];

        if (loadingValue >= 100) {

            clearInterval(loadingInterval);

            setTimeout(() => {

                loadingScreen.classList.add("finished");

                mainContent.classList.add("visible");

                document.body.classList.remove("no-scroll");

                createFloatingHearts(8);

            }, 700);
        }

    }, 130);


    /* ========================================
       START BUTTON
    ======================================== */

    startButton.addEventListener("click", () => {

        createConfetti(80);

        createFloatingHearts(14);

        startButton.innerHTML =
            "<span>💖</span> Bayram boshlandi!";

        startButton.style.pointerEvents = "none";

        setTimeout(() => {

            document.querySelector(".message-section")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

        }, 500);

    });


    /* ========================================
       CAKE / CANDLES
    ======================================== */

    if (cake) {

        cake.addEventListener("click", (event) => {

            const candles =
                document.querySelectorAll(".candle");

            /*
             * Shamlar hali qolgan bo‘lsa,
             * navbat bilan o‘chiramiz.
             */

            for (const candle of candles) {

                if (!candle.classList.contains("blown")) {

                    candle.classList.add("blown");

                    candlesBlown++;

                    break;
                }
            }

            if (candlesBlown === 1) {

                wishMessage.textContent =
                    "Bitta sham o‘chdi... Yana davom et! 🕯️✨";

            } else if (candlesBlown === 2) {

                wishMessage.textContent =
                    "Yana bittasi! Tilagingni unutma... 💫";

            } else if (candlesBlown === 3) {

                wishMessage.textContent =
                    "🎉 Barcha shamlar o‘chdi! Tilaging amalga oshsin! ❤️";

                createConfetti(100);

                createFloatingHearts(20);

                setTimeout(() => {

                    wishMessage.textContent =
                        "🎂 Sabinaning tilagi maxsus sir sifatida saqlanadi... 🤫";

                }, 3500);
            }

        });

    }


    /* ========================================
       SECRET MESSAGE
    ======================================== */

    secretButton.addEventListener("click", () => {

        secretSection.classList.add("open");

        createConfetti(45);

        createFloatingHearts(12);

        setTimeout(() => {

            secretSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 150);

    });


    /* ========================================
       CLOSE SECRET MESSAGE
    ======================================== */

    closeSecret.addEventListener("click", () => {

        secretSection.classList.remove("open");

        setTimeout(() => {

            document.querySelector(".final-section")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

        }, 100);

    });


    /* ========================================
       CONFETTI FUNCTION
    ======================================== */

    function createConfetti(amount = 50) {

        const symbols = [
            "◆",
            "●",
            "■",
            "♥",
            "✦"
        ];

        for (let i = 0; i < amount; i++) {

            const piece =
                document.createElement("span");

            piece.className =
                "confetti-piece";

            piece.textContent =
                symbols[
                    Math.floor(
                        Math.random() * symbols.length
                    )
                ];

            piece.style.left =
                Math.random() * 100 + "%";

            piece.style.width =
                (Math.random() * 6 + 5) + "px";

            piece.style.height =
                (Math.random() * 8 + 7) + "px";

            piece.style.fontSize =
                (Math.random() * 8 + 7) + "px";

            piece.style.setProperty(
                "--fall-duration",
                (Math.random() * 2.5 + 3) + "s"
            );

            piece.style.setProperty(
                "--drift",
                (Math.random() * 160 - 80) + "px"
            );

            piece.style.animationDelay =
                (Math.random() * 0.8) + "s";

            confettiContainer.appendChild(piece);

            setTimeout(() => {
                piece.remove();
            }, 6500);

        }

    }


    /* ========================================
       FLOATING HEARTS
    ======================================== */

    function createFloatingHearts(amount = 10) {

        const hearts = [
            "❤️",
            "💗",
            "💖",
            "💕",
            "💓"
        ];

        for (let i = 0; i < amount; i++) {

            const heart =
                document.createElement("span");

            heart.className =
                "floating-heart";

            heart.textContent =
                hearts[
                    Math.floor(
                        Math.random() * hearts.length
                    )
                ];

            heart.style.left =
                Math.random() * 100 + "%";

            heart.style.fontSize =
                (Math.random() * 12 + 12) + "px";

            heart.style.setProperty(
                "--float-duration",
                (Math.random() * 3 + 4) + "s"
            );

            heart.style.animationDelay =
                (Math.random() * 1.5) + "s";

            confettiContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 7500);

        }

    }


    /* ========================================
       RANDOM BACKGROUND PARTICLES
    ======================================== */

    const particles =
        document.querySelector(".particles");

    if (particles) {

        for (let i = 0; i < 25; i++) {

            const particle =
                document.createElement("span");

            particle.style.position = "absolute";

            particle.style.left =
                Math.random() * 100 + "%";

            particle.style.top =
                Math.random() * 100 + "%";

            particle.style.width =
                (Math.random() * 3 + 1) + "px";

            particle.style.height =
                particle.style.width;

            particle.style.borderRadius =
                "50%";

            particle.style.background =
                "rgba(255,255,255,0.35)";

            particle.style.boxShadow =
                "0 0 10px rgba(255,150,210,0.5)";

            particle.style.animation =
                `particleFloat ${
                    Math.random() * 6 + 5
                }s ease-in-out infinite`;

            particle.style.animationDelay =
                `${Math.random() * 4}s`;

            particles.appendChild(particle);
        }

    }


    /* ========================================
       ADD PARTICLE ANIMATION
    ======================================== */

    const particleStyle =
        document.createElement("style");

    particleStyle.textContent = `

        @keyframes particleFloat {

            0%, 100% {
                opacity: 0.15;
                transform: translateY(0) scale(1);
            }

            50% {
                opacity: 0.8;
                transform: translateY(-25px) scale(1.5);
            }

        }

    `;

    document.head.appendChild(particleStyle);


    /* ========================================
       SECTION REVEAL
    ======================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-card, .wish-card, .final-card"
        );

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(element => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "opacity 0.8s ease, transform 0.8s ease";

            observer.observe(element);

        });

    }


    /* ========================================
       LITTLE WELCOME EFFECT
    ======================================== */

    setTimeout(() => {

        if (!loadingScreen.classList.contains("finished")) {
            return;
        }

        createFloatingHearts(5);

    }, 2500);


    /* ========================================
       CONSOLE MESSAGE
    ======================================== */

    console.log(
        "%c💗 SABINA BIRTHDAY EXPERIENCE 💗",
        "font-size:20px;font-weight:bold;"
    );

    console.log(
        "Bu sayt Sabina uchun maxsus tayyorlangan."
    );

});