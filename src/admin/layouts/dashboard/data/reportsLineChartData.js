import React, { useEffect, useState } from 'react';
import FetchData from '../../fetchData';
import axios from 'axios';
const ReportsLineChartData = () => {
	const calculateLastWeekDates = () => {
		const currentDate = new Date();
		const lastWeekStartDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			currentDate.getDate() - 7
		);
		lastWeekStartDate.setDate(lastWeekStartDate.getDate() - lastWeekStartDate.getDay() + 1); // Adjust to Monday of last week

		const lastWeekDates = [];
		const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

		for (let i = 0; i < 7; i++) {
			const date = new Date(
				lastWeekStartDate.getFullYear(),
				lastWeekStartDate.getMonth(),
				lastWeekStartDate.getDate() + i
			);
			const formattedDay = date.toISOString().split('T')[0] + 'T00:00:00';
			const id = i + 1;

			lastWeekDates.push({ id, dayOfWeek: daysOfWeek[i], date: formattedDay, data: 0 });
		}

		return lastWeekDates;
	};

	const [lastWeekDates, setLastWeekDates] = useState(calculateLastWeekDates());

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get('https://localhost:7250/api/Recipeposts');
			const data = response.data;

			const updatedLastWeekDates = lastWeekDates.map((item) => {
				const recipeCount = data.reduce((count, recipe) => {
					if (recipe.create_time == item.date) {
						return count + 1;
					}
					return count;
				}, 0);

				return { ...item, data: recipeCount };
			});

			setLastWeekDates(updatedLastWeekDates);
		};

		fetchData();
	}, []);

	return {
		dataLine: {
			labels: lastWeekDates.map((item) => item.dayOfWeek),
			datasets: {
				label: 'Recipes',
				data: lastWeekDates.map((item) => item.data)
			}
		}
	};
};

export default ReportsLineChartData;
