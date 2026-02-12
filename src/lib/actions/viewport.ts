let intersectionObserver: IntersectionObserver;

function ensureIntersectionObserver() {
	if (intersectionObserver) return;

	intersectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
			entry.target.dispatchEvent(new CustomEvent(eventName));
            
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                // Optional: remove class if you want animation to repeat
                // entry.target.classList.remove('in-view');
            }
		});
	});
}

export default function viewport(element: HTMLElement) {
	ensureIntersectionObserver();

	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	};
}
