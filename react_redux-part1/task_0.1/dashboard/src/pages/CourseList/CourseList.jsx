import React from "react";
import CourseListRow from "./CourseListRow/CourseListRow";
import WithLogging from "../../components/HOC/WithLogging";
import './CourseList.css'

class CourseList extends React.Component {
	render() {
		const { courses=[] } = this.props;
		return (
			<table className='course'>
				{courses.length > 0 ? (
					<>
						<thead>
							<CourseListRow isHeader={true} textFirstCell="Available courses" />
							<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
						</thead>
						<tbody>
							{courses.map((course) => (
								<CourseListRow
									key={course.id}
									textFirstCell={course.name}
									textSecondCell={course.credit}
								/>
							))}
						</tbody>
					</>
					) : (
						<tbody>
							<CourseListRow isHeader={true} textFirstCell="No course available yet" />
						</tbody>
						)}
			</table>
		);
	}
}

const CourseListWithLogging = WithLogging(CourseList);
export default CourseListWithLogging;
