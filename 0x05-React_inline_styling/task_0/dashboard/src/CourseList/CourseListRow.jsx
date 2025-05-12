import React from "react";

export default function CourseListRow({ isHeader=false, textFirstCell="", textSecondCell=null }) {
return (
	<tr style={{ backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab' }}>
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
