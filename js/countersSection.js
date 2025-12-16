(function () {
    function animateCounter(elementId, target, duration = 2000, addPlus = false) {
        const counter = document.getElementById(elementId);
        let start = 0;
        const frameRate = 50;
        const totalFrames = duration / frameRate;

        const timer = setInterval(() => {
            start += target / totalFrames;
            if (start >= target) start = target;
            counter.textContent = Math.floor(start);
            if (start >= target) {
                clearInterval(timer);
                if (addPlus) counter.textContent += '+';
            }
        }, frameRate);
    }

    const duration = 2000;
    const counters = [
        { id: 'counter1', target: 1000, addPlus: true },
        { id: 'counter2', target: 9, addPlus: false },
        { id: 'counter3', target: 60, addPlus: false }
    ];

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = counters.find(c => c.id === entry.target.id);
                if (counter) {
                    animateCounter(counter.id, counter.target, duration, counter.addPlus);
                    observer.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => {
        const el = document.getElementById(c.id);
        if (el) observer.observe(el);
    });
})();
