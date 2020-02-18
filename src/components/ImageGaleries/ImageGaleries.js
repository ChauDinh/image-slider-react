import React from "react";

import "./ImageGaleries.css";
import ImageComponent from "../ImageComponent/ImageComponent";
import Pagination from "../Pagination";
import { useInterval } from "../useInterval";

const ImageGalaries = () => {
	const [photos, setPhotos] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	let [currentPage, setCurrentPage] = React.useState(0);
	let [isPlaying, setIsPlaying] = React.useState(false);

	React.useEffect(() => {
		const fetchPhotos = async () => {
			setLoading(true);
			await fetch(
				"https://jsonplaceholder.typicode.com/photos?_limit=20"
			)
				.then(res => res.json())
				.then(res => {
					setPhotos(res);
					setLoading(false);
				})
				.catch(err => console.error(err));
		};

		fetchPhotos();
	}, []);

	React.useEffect(() => {
		if (isPlaying) {
			let timeoutId = setTimeout(() => {
				setCurrentPage(
					(currentPage + 1) % photos.length
				);
			}, 2000);

			return () => clearTimeout(timeoutId);
		}
	}, [currentPage, isPlaying]);

	// Get the current photo
	const currentPhoto = photos.slice(currentPage);

	return (
		<div className="ImageGalaries">
			<ImageComponent
				photo={currentPhoto[0]}
				loading={loading}
				key={currentPhoto.id}
			/>

			<div className="button-control">
				<button
					onClick={() => {
						setCurrentPage(
							currentPage > 0
								? currentPage -
										1
								: (currentPage -
										1 +
										photos.length) %
										photos.length
						);
						setIsPlaying(false);
					}}
				>
					prev
				</button>

				<Pagination
					currentPage={currentPage + 1}
					numberPhotos={photos.length}
				/>
				<button
					onClick={() => {
						setCurrentPage(
							(currentPage + 1) %
								photos.length
						);
						setIsPlaying(false);
					}}
				>
					next
				</button>
				{isPlaying ? (
					<button
						onClick={() =>
							setIsPlaying(false)
						}
					>
						◼︎
					</button>
				) : (
					<button
						onClick={() =>
							setIsPlaying(true)
						}
					>
						▶︎
					</button>
				)}
			</div>
		</div>
	);
};

export default ImageGalaries;
