import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow/CourseListRow';
import WithLogging from '../../components/HOC/WithLogging';

const styles = StyleSheet.create({
  couseList: {
		width: '90vw',
		margin: 'auto',
		border: '1px solid black',
		borderCollapse: 'collapse'
	},
});

function CourseList({ courses = [] }) {
  return (
    <div>
      <table id="CourseList" className={css(styles.couseList)}>
        <thead>
          {courses.length > 0 ? (
            <>
              <CourseListRow
                textFirstCell="Available courses"
                isHeader={true}
              />
              <CourseListRow
                textFirstCell="Course name"
                textSecondCell="Credit"
                isHeader={true}
              />
            </>
          ) : (
            <CourseListRow
              isHeader={true}
              textFirstCell="No course available yet"
            />
          )}
        </thead>
        {courses.length > 0 && (
          <tbody>
            {courses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default WithLogging(CourseList);
