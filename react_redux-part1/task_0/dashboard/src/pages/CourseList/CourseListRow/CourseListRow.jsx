export default function CourseListRow({ isHeader=false, textFirstCell="", textSecondCell=null }) {
return (
	<tr className={isHeader ? 'header_row' : 'data-row'}>
		{isHeader ? (
			textSecondCell === null ? (
				<th className='cell' colSpan="2">{textFirstCell}</th>
			) : (
				<>
					<th className='cell' style={{ width: '70%'}}>{textFirstCell}</th>
					<th className='cell'>{textSecondCell}</th>
				</>
			)
		) : (
			<>
				<td className='cell'>{textFirstCell}</td>
				<td className='cell'>{textSecondCell}</td>
			</>
		)}
	</tr>
	);
}

