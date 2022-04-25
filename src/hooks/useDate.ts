import moment from 'moment';

type TypeDate = {
	start?: string;
	end?: string;
	time?: string | number;
};

const useDate = (startDate?: string, endDate?: string): TypeDate => {
	const start = moment(startDate).format('MMMM YYYY');
	const end =
		endDate === 'now' ? moment().format('MMMM YYYY') : moment(endDate).format('MMMM YYYY');

	const months = Number(moment(end).diff(start, 'M') + 1);
	const years = Number(Math.floor(months / 12));

	const xMonths = months - years * 12;

	const time =
		years > 0
			? `${years} ${years > 1 ? 'años' : 'año'}${
					xMonths !== 0 ? ` y ${xMonths} ${xMonths > 1 ? 'meses' : 'mes'}` : ''
			  }`
			: `${months} ${months > 1 ? 'meses' : 'mes'}`;

	return { start, end, time };
};

export default useDate;
