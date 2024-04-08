document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element is in viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Define your animations and elements here
    var animations = [
        { element: '.animated-section_animate__backInUp', animationClass: ['animate__animated', 'animate__fadeIn'] },
        { element: '.animate_section_pulse', animationClass: ['animate__animated', 'animate__pulse'] },
        // Add more elements and animations as needed
    ];

    function handleScroll() {
        animations.forEach(function(animation) {
            var elements = document.querySelectorAll(animation.element);
            elements.forEach(function(element) {
                if (isInViewport(element)) {
                    // Add each class individually
                    animation.animationClass.forEach(function(className) {
                        element.classList.add(className);
                    });
                } else {
                    // Remove each class individually
                    animation.animationClass.forEach(function(className) {
                        element.classList.remove(className);
                    });
                }
            });
        });
    }

    // Listen for scroll event
    window.addEventListener('scroll', handleScroll);

    // Trigger the animation on page load
    handleScroll();
});