import { h } from "ink";

export const Tabs = (props) => {
	return (
		<For each='tabs' of={Array(props.count).fill('\u0009')}>
			<span>{tabs}</span>
		</For>
	)
}