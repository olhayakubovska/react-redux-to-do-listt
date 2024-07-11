import { useRef, useState } from 'react';
import { debounce } from './utils';
import styles from './search.module.css';

export const Search = ({ onSearch }) => {
	const [value, setValue] = useState('');

	const debouncedOnSearch = useRef(debounce(onSearch, 500)).current;

	const onChange = ({ target }) => {
		setValue(target.value);
		debouncedOnSearch(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		onSearch(value);
	};

	return (
		<form className={styles.search} onSubmit={onSubmit}>
			<input
				className={styles.input}
				type="text"
				value={value}
				placeholder="Поиск..."
				onChange={onChange}
			/>
		</form>
	);
};
