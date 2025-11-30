export default function tilt(node: HTMLElement, options: { max?: number; scale?: number; speed?: number; glare?: boolean; 'max-glare'?: number } = {}) {
    const settings = {
        max: 15,
        scale: 1.05,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
        ...options
    };

    let width = 0;
    let height = 0;
    let left = 0;
    let top = 0;
    let transitionTimeout: any;

    // Glare element
    let glareElement: HTMLElement;
    let glareWrapper: HTMLElement;

    if (settings.glare) {
        glareWrapper = document.createElement('div');
        glareWrapper.style.position = 'absolute';
        glareWrapper.style.top = '0';
        glareWrapper.style.left = '0';
        glareWrapper.style.width = '100%';
        glareWrapper.style.height = '100%';
        glareWrapper.style.overflow = 'hidden';
        glareWrapper.style.borderRadius = 'inherit';
        glareWrapper.style.pointerEvents = 'none';
        
        glareElement = document.createElement('div');
        glareElement.style.position = 'absolute';
        glareElement.style.top = '50%';
        glareElement.style.left = '50%';
        glareElement.style.pointerEvents = 'none';
        glareElement.style.backgroundImage = 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)';
        glareElement.style.width = '200%';
        glareElement.style.height = '200%';
        glareElement.style.transform = 'rotate(180deg) translate(-50%, -50%)';
        glareElement.style.transformOrigin = '0% 0%';
        glareElement.style.opacity = '0';

        glareWrapper.appendChild(glareElement);
        node.appendChild(glareWrapper);
    }

    function updateElementPosition() {
        const rect = node.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        left = rect.left;
        top = rect.top;
    }

    function onMouseEnter() {
        updateElementPosition();
        node.style.transition = 'none';
        if (glareElement) glareElement.style.transition = 'none';
    }

    function onMouseMove(e: MouseEvent) {
        if (transitionTimeout) clearTimeout(transitionTimeout);

        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        const tiltX = (settings.max / 2 - x * settings.max).toFixed(2);
        const tiltY = (y * settings.max - settings.max / 2).toFixed(2);

        // Tilt
        node.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`;

        // Glare
        if (settings.glare && glareElement) {
            const angle = Math.atan2(e.clientX - (left + width / 2), -(e.clientY - (top + height / 2))) * (180 / Math.PI);
            glareElement.style.transform = `rotate(${angle}deg) translate(-50%, -50%)`;
            glareElement.style.opacity = (settings['max-glare'] * 1).toString(); // Simplified opacity logic
        }
    }

    function onMouseLeave() {
        node.style.transition = `transform ${settings.speed}ms cubic-bezier(.03,.98,.52,.99)`;
        node.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

        if (glareElement) {
            glareElement.style.transition = `opacity ${settings.speed}ms cubic-bezier(.03,.98,.52,.99)`;
            glareElement.style.opacity = '0';
        }
    }

    node.addEventListener('mouseenter', onMouseEnter);
    node.addEventListener('mousemove', onMouseMove);
    node.addEventListener('mouseleave', onMouseLeave);

    // Initial style
    node.style.transformStyle = 'preserve-3d';
    node.style.willChange = 'transform';

    return {
        destroy() {
            node.removeEventListener('mouseenter', onMouseEnter);
            node.removeEventListener('mousemove', onMouseMove);
            node.removeEventListener('mouseleave', onMouseLeave);
            if (glareWrapper) glareWrapper.remove();
        }
    };
}
