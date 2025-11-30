<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import * as THREE from "three";

    let container: HTMLDivElement;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let animationId: number;
    let particlesMesh: THREE.Points;
    let particlesGeometry: THREE.BufferGeometry;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX =
        typeof window !== "undefined" ? window.innerWidth / 2 : 0;
    const windowHalfY =
        typeof window !== "undefined" ? window.innerHeight / 2 : 0;

    onMount(() => {
        init();
        animate();

        window.addEventListener("resize", onWindowResize);
        document.addEventListener("mousemove", onDocumentMouseMove);
    });

    onDestroy(() => {
        if (typeof window !== "undefined") {
            window.removeEventListener("resize", onWindowResize);
            document.removeEventListener("mousemove", onDocumentMouseMove);
            if (renderer) {
                renderer.dispose();
            }
            if (scene) {
                scene.clear();
            }
            cancelAnimationFrame(animationId);
        }
    });

    function init() {
        // Scene setup
        scene = new THREE.Scene();
        // Fog to blend particles into the background
        scene.fog = new THREE.FogExp2(0x0a0a0a, 0.002);

        // Camera setup
        camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            2000,
        );
        camera.position.z = 1000;

        // Renderer setup
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        // Particles
        particlesGeometry = new THREE.BufferGeometry();
        const particleCount = 2000;

        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const color1 = new THREE.Color("#ef4444"); // Spider-Red
        const color2 = new THREE.Color("#3b82f6"); // Spider-Blue

        for (let i = 0; i < particleCount; i++) {
            // Position
            positions[i * 3] = (Math.random() * 2 - 1) * 2000;
            positions[i * 3 + 1] = (Math.random() * 2 - 1) * 2000;
            positions[i * 3 + 2] = (Math.random() * 2 - 1) * 2000;

            // Color (Mix between red and blue randomly)
            const mixedColor = Math.random() > 0.5 ? color1 : color2;
            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
        }

        particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3),
        );
        particlesGeometry.setAttribute(
            "color",
            new THREE.BufferAttribute(colors, 3),
        );

        // Material
        const material = new THREE.PointsMaterial({
            size: 4,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true,
        });

        particlesMesh = new THREE.Points(particlesGeometry, material);
        scene.add(particlesMesh);
    }

    function onWindowResize() {
        if (!camera || !renderer) return;

        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event: MouseEvent) {
        mouseX = (event.clientX - window.innerWidth / 2) * 0.5;
        mouseY = (event.clientY - window.innerHeight / 2) * 0.5;
    }

    function animate() {
        animationId = requestAnimationFrame(animate);
        render();
    }

    function render() {
        if (!camera || !scene || !particlesMesh) return;

        // Smooth camera movement based on mouse
        targetX = mouseX * 0.1;
        targetY = mouseY * 0.1;

        camera.position.x += (targetX - camera.position.x) * 0.05;
        camera.position.y += (-targetY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        // Rotate particles slowly
        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.0005;

        // Pulse effect (optional, subtle scaling)
        const time = Date.now() * 0.0005;
        particlesMesh.scale.x = 1 + Math.sin(time) * 0.05;
        particlesMesh.scale.y = 1 + Math.sin(time) * 0.05;

        renderer.render(scene, camera);
    }
</script>

<div
    bind:this={container}
    class="absolute inset-0 z-0 pointer-events-none"
></div>

<style>
    div {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
