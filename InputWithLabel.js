import React from 'react';

const InputWithLabel = props => ({ id, label, type, value, onInputChange }) => (
	<>
		<label htmlFor={id}>{label}</label>
		<input id="id" type="type" value={value} onChange={onInputChange} />)
	</>
);

export default InputWithLabel;