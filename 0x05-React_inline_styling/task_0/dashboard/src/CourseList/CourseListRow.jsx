import React from "react";

export default function CourseListRow({ isHeader=false, textFirstCell="", textSecondCell=null }) {
	const headerBG = { backgroundColor: '#deb5b545' };
	const cellBG = { backgroundColor: '#f5f5f5ab' };
return (
	<tr style={ isHeader ? headerBG : cellBG }>
		{isHeader ? (
			textSecondCell === null ? (
				<th colSpan="2">{textFirstCell}</th>
			) : (
				<>
					<th style={{ width: '70%'}}>{textFirstCell}</th>
					<th>{textSecondCell}</th>
				</>
			)
		) : (
			<>
				<td>{textFirstCell}</td>
				<td>{textSecondCell}</td>
			</>
		)}
	</tr>
);
}
