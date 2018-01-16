import { h } from "ink";

export const Spaces = (props) => {
	return (
		<For each='space' of={Array(props.count).fill('\u0020')}>
			<span>{space}</span>
		</For>
	)
}