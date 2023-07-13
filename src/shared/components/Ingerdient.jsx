import { Row, Col } from 'antd';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { ingredientsService } from '../services/ingredients.service';

const Ingerdient = () => {
	const [data, setData] = useState();
	const dataTest = [
		'vegetables',
		'spices and herbs',
		'cereals and pules',
		'meat',
		'dairy products',
		'fruits',
		'seafood',
		'sugar products',
		'Nuts and oilseeds'
	];
	const { user } = useSelector((state) => state.appSlice);

	useQuery('Ingerdients', () => ingredientsService.getAllIngredients(), {
		select(data) {
			setData((data) => [data, ...data.data.name]);
		},
		enabled: !user
	});
	return (
		<div className="w-full p-5 mt-96 md:mt-0">
			<h1 className="text-center mb-5 font-bold text-black md:text-white">Ingerdient</h1>
			<Row
				className="w-full text-black flex justify-center"
				align="middle"
				justify="space-between"
				gutter={[24, 24]}
			>
				{dataTest.map((item, index) => (
					<Col
						className="text-center font-bold uppercase mt-5 ml-5 p-5 bg-[#FFD9C0] hover:bg-[#FFB07F] rounded-lg cursor-pointer"
						key={index}
						sm={8}
						lg={4}
					>
						{item}
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Ingerdient;
