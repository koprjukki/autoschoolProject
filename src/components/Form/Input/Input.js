import React from "react";
import InputMask from "react-input-mask";
console.log(InputMask);

export const Input = ({
	labelHeading,
	isRequired,
	name,
	value,
	onChange,
	mask,
	placeholder,
}) => (
	<label>
		<br />
		{labelHeading}
		<InputMask
			mask={mask}
			name={name}
			value={value}
			onChange={onChange}
			required={isRequired}
			placeholder={placeholder}
		></InputMask>
		<br />
	</label>
);
