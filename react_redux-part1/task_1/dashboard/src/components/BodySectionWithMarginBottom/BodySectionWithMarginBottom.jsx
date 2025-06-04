import React from 'react';
import BodySection from '../BodySection/BodySection';
import './BodySectionWithMarginBottom.css'

class BodySectionWithMarginBottom extends React.Component {
	render() {
		const { title, children } = this.props;
		return (
			<>
			<div className='item-margin'>
				<BodySection title={title}>
					{children}
				</BodySection>
			</div>
			</>
		)
	}
}
export default BodySectionWithMarginBottom;
