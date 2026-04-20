// src/components/RevealOverlay.jsx
import { useEffect, useRef } from "react";

function RevealOverlay() {
	const canvasRef = useRef(null);

	const state = useRef("idle");
	const lerpX = useRef(0);
	const lerpY = useRef(0);
	const mouseX = useRef(0);
	const mouseY = useRef(0);
	const originX = useRef(0);
	const originY = useRef(0);
	const expandStart = useRef(null);
	const rafId = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		let W, H;

		function resize() {
			W = canvas.width = window.innerWidth;
			H = canvas.height = window.innerHeight;
			lerpX.current = W / 2;
			lerpY.current = H / 2;
			mouseX.current = W / 2;
			mouseY.current = H / 2;
		}
		resize();
		window.addEventListener("resize", resize);

		function easeInOutExpo(t) {
			if (t <= 0) return 0;
			if (t >= 1) return 1;
			return t < 0.5
				? Math.pow(2, 20 * t - 10) / 2
				: (2 - Math.pow(2, -20 * t + 10)) / 2;
		}

		function loop(ts) {
			ctx.clearRect(0, 0, W, H);

			if (state.current === "done") return; // done이면 loop 완전 종료

			if (state.current === "idle") {
				lerpX.current += (mouseX.current - lerpX.current) * 0.09;
				lerpY.current += (mouseY.current - lerpY.current) * 0.09;
			}

			const cx = state.current === "idle" ? lerpX.current : originX.current;
			const cy = state.current === "idle" ? lerpY.current : originY.current;
			const BASE_R = 72;
			let r = BASE_R;

			if (state.current === "expanding") {
				if (!expandStart.current) expandStart.current = ts;
				const t = Math.min((ts - expandStart.current) / 1000, 1);
				const eased = easeInOutExpo(t);
				const maxR =
					Math.sqrt(Math.max(cx, W - cx) ** 2 + Math.max(cy, H - cy) ** 2) *
					1.05;
				r = BASE_R + eased * (maxR - BASE_R);

				if (t >= 1) {
					ctx.clearRect(0, 0, W, H);
					state.current = "done";
					// canvas 자체를 숨겨서 클릭/마우스 이벤트 방해 안 하게
					canvas.style.display = "none";
					return;
				}
			} else {
				r = BASE_R * (1 + 0.04 * Math.sin(ts * 0.004));
			}

			ctx.fillStyle = "#E9EDF5";
			ctx.fillRect(0, 0, W, H);

			ctx.globalCompositeOperation = "destination-out";
			ctx.beginPath();
			ctx.arc(cx, cy, r, 0, Math.PI * 2);
			ctx.fill();
			ctx.globalCompositeOperation = "source-over";

			rafId.current = requestAnimationFrame(loop);
		}

		function handleMouseMove(e) {
			if (state.current !== "idle") return;
			mouseX.current = e.clientX;
			mouseY.current = e.clientY;
		}

		function handleClick() {
			if (state.current !== "idle") return;
			originX.current = lerpX.current;
			originY.current = lerpY.current;
			state.current = "expanding";
			expandStart.current = null;
		}

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("click", handleClick);
		rafId.current = requestAnimationFrame(loop);

		return () => {
			window.removeEventListener("resize", resize);
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("click", handleClick);
			cancelAnimationFrame(rafId.current);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: "fixed",
				inset: 0,
				width: "100%",
				height: "100%",
				zIndex: 9999,
				pointerEvents: "none",
			}}
		/>
	);
}

export default RevealOverlay;
