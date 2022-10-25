import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() 
{
	const [currentPage, SetCurrentPage] = useState('AboutMe');

	function RenderPage()
	{
		if (currentPage === 'AboutMe') return <AboutMe />;
		else if (currentPage === 'Portfolio') return <Portfolio />;
		else if (currentPage === 'Contact') return <Contact />;
		else return <Resume />;
	};

	const HandlePageChange = (page) => SetCurrentPage(page);

	return (
		<div>
			<NavigationBar currentPage={currentPage} HandlePageChange={HandlePageChange} />
			{RenderPage()}
		</div>
	);
}
