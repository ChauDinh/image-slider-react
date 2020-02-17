import React from "react";

import "./ImageGaleries.css";
import ImageComponent from "../ImageComponent/ImageComponent";
import Pagination from "../Pagination";

const ImageGalaries = () => {
	const [photos, setPhotos] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	let [currentPage, setCurrentPage] = React.useState(1);

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

	// Get the current photo
	const indexOfLastPhoto = currentPage * 1;
	const indexOfFistPhoto = indexOfLastPhoto - 1;
	const currentPhoto = photos.slice(indexOfFistPhoto, indexOfLastPhoto);

	return (
		<div className="ImageGalaries">
			<ImageComponent
				photo={currentPhoto[0]}
				loading={loading}
				key={currentPhoto.id}
			/>
			{indexOfFistPhoto < 1 ? null : (
				<button
					onClick={() =>
						setCurrentPage(--currentPage)
					}
				>
					prev
				</button>
			)}
			<p>1, 2, 3, 4, ..., 9, 10, 11, 12</p>
			{indexOfLastPhoto > photos.length - 1 ? null : (
				<button
					onClick={() =>
						setCurrentPage(++currentPage)
					}
				>
					next
				</button>
			)}

			<Pagination
				currentPage={currentPage}
				numberPhotos={photos.length}
			/>
		</div>
	);
};

export default ImageGalaries;
