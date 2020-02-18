import React, { useEffect, useRef, useState } from "react";

export function useInterval(callback, delay) {
	const saveCallback = useRef();

	// Remember the latest callback
	useEffect(() => {
		saveCallback.current = callback;
	}, [callback]);

	// Setup the interval
	useEffect(() => {
		function tick() {
			saveCallback.current();
		}

		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}
