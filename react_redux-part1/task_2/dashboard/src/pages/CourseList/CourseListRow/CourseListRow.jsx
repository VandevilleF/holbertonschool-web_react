import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell, style }) {
  const rowStyle = css(isHeader ? styles.headerRow : styles.dataRow);
  const cellStyle = css(styles.cell);
  if (isHeader) {
    if (textSecondCell === null || textSecondCell === undefined) {
      return (
        <tr className={css(styles.headerRow)}>
          <th className={cellStyle} colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr className={css(styles.headerRow)}>
          <th className={cellStyle}>{textFirstCell}</th>
          <th className={cellStyle}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={css(styles.dataRow)}>
        <td className={cellStyle}>{textFirstCell}</td>
        <td className={cellStyle}>{textSecondCell}</td>
      </tr>
    );
  }
}

const styles = StyleSheet.create({
	headerRow: {
		backgroundColor: '#deb5b545',
	},
	dataRow: {
		backgroundColor: '#f5f5f5ab',
	},
	headecell: {
		backgroundColor: '#deb5b545',
		border: '1px solid black',
		borderCollapse: 'collapse'
	},
	cell: {
		border: '1px solid black',
		borderCollapse: 'collapse'
	},
})

export default CourseListRow;
