import React, { FC, useState } from 'react';
import './Date.scss';

// import arrowBack from 'view/images/icons/arrow-back.svg';
// import arrow from 'view/images/icons/arrow.svg';

import moment, { Moment } from 'moment';

const Months: Record<string, string> = {
	january: 'Enero',
	february: 'Febrero',
	march: 'Marzo',
	april: 'Abril',
	may: 'Mayo',
	june: 'Junio',
	july: 'Julio',
	august: 'Agosto',
	september: 'Septiembre',
	october: 'Octubre',
	november: 'Noviembre',
	december: 'Diciembre',
};

const MonthsList: string[] = Object.keys(Months);

type DateProps = {
	name?: string;
	value?: Moment | string;
	onChange: (e: Record<string, unknown>) => void;
	onClick?: () => void;
	disabled?: boolean;
	step?: string;
	label?: string;
};

const Date: FC<DateProps> = ({ onChange, name, value }) => {
	const [date, setDate] = useState<Record<string, string | number>>({
		month: moment(value).format('MMMM').toLowerCase(),
		year: moment(value).format('YYYY'),
		min: Number(moment(value).format('YYYY')) - 100,
		max: Number(moment(value).format('YYYY')),
	});

	const change = (subName: string, value: string) => {
		const newDateFixed = { ...date, [subName]: value };
		setDate(newDateFixed);
		const newDate = moment(
			subName === 'month' ? `${value}-${newDateFixed.year}` : `${newDateFixed.month}-${value}`,
		).format('MMMM YYYY');
		onChange({ target: { name: name, value: newDate } });
		return;
	};

	return (
		<div className="date_container">
			<div className="date">
				<div className="date_years">
					<img
						className="date_years_arrow"
						onClick={() =>
							Number(date.year) > date.min && change('year', String(Number(date.year) - 1))
						}
						// src={arrowBack}
						alt="arrowBack"
					/>
					<div className="date_years_item">
						<div className="date_years_item_year">{date.year}</div>
						<div>{`${Months[date?.month][0]}${Months[date?.month][1]}${
							Months[date?.month][2]
						}`}</div>
					</div>
					<img
						className="date_years_arrow"
						onClick={() =>
							Number(date.year) < date.max && change('year', String(Number(date.year) + 1))
						}
						// src={arrow}
						alt="arrowBack"
					/>
				</div>

				<div className="date_months">
					{MonthsList.map((month: string, i: number) => (
						<div
							key={month}
							onClick={() => change('month', month)}
							className={`date_months_item${
								date?.month === month ? ' date_months_item--selected' : ''
							}`}
							style={{ gridArea: month }}
						>
							<div className="date_months_item--number">{i + 1}</div>
							<div className="date_months_item--name">{`${Months[month][0]}${Months[month][1]}${Months[month][2]}`}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Date;
