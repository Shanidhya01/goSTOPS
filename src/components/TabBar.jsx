import React, { useState } from 'react';

const tabs = [
	{ label: "Rooms", target: "rooms-section" },
	{ label: "Amenities", target: "amenities-section" },
	{ label: "Location", target: "location-section" },
	{ label: "Guidelines", target: "guidelines-section" },
];

const TabBar = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (idx, target) => {
		setActiveTab(idx);
		const el = document.getElementById(target);
		if (el) {
			window.scrollTo({
				top: el.offsetTop - 80, // adjust for header height
				behavior: 'smooth'
			});
		}
	};

	return (
		<div className="sticky top-[80px] z-40 bg-white">
			<nav className="flex gap-8 mx-25 px-8 py-2 text-gray-500 justify-left">
				{tabs.map((tab, idx) => (
					<button
						key={tab.label}
						className={`relative pb-2 transition-colors ${
							activeTab === idx
								? 'text-gray-900'
								: 'text-gray-500'
						}`}
						onClick={() => handleTabClick(idx, tab.target)}
					>
						{tab.label}
						{activeTab === idx && (
							<span className="absolute left-0 right-0 -bottom-1 h-1 bg-gray-800 rounded-full"></span>
						)}
					</button>
				))}
			</nav>
		</div>
	);
};

export default TabBar;