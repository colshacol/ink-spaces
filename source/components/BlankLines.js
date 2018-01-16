import { h } from "ink";

export const BlankLines = (props) => {
	return (
		<For each='line' of={Array(props.count).fill('\u000A')}>
			<span>{line}</span>
		</For>
	)
}