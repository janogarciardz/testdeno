import Countdown from "../islands/Countdown.tsx";

export default function Page() {
		const date = new Date();
		date.setMinutes(date.getMinutes() + 1);
		//date.setHours(date.getHours() + 1);

		return (
						<p>
							la bomba explota en <Countdown target={date.toISOString()} />.
						</p>
						);
}