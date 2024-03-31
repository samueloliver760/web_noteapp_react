import { ThemeConsumer } from "../context/ThemeContext";
import dm from "../../images/dark.png";
import lm from "../../images/light.png";

function ToggleTheme() {
	return (
		<ThemeConsumer>
			{({theme, toggleTheme}) => {
				return <button onClick={toggleTheme}>{theme === 'light' ? <img alt = "dark" src={dm} width="30" height="30"/> : <img alt="light" src={lm} width="30" height="30"/>}&nbsp;&nbsp;&nbsp;&nbsp;</button>;
			}}
		</ThemeConsumer>
	);
}

export default ToggleTheme;