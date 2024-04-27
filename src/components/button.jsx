import React, { useState } from 'react';

function Button() {
	const [count, setCount] = useState(0);
	function buttonClick() {
		setCount(count + 1);
	}
	function buttonMinus() {
		setCount(count - 1);
	}
	return (
		<>
			<button onClick={buttonClick}>Plus</button>
			{count}
			<button onClick={buttonMinus}>Minus</button>
		</>
	);
}

export default Button;
