import React from "react";

const Pagination = ({ currentPage, numberPhotos }) => {
	let totalPages = [];

	for (let i = 1; i <= numberPhotos; i++) {
		totalPages.push(i);
	}

	return (
		<div>
			{currentPage}
		</div>
	);
};

export default Pagination;
