import Card from './Card';
import Selector from './Selector';

export interface IComponent<T> {
	title: string;
	counter: number;
	element: any;
}

export const components: IComponent<any>[] = [
	{
		title: 'Card',
		counter: 1,
		element: (
			<Card title="Ejemplo" status="ok" onClick={() => alert('Card clickeada con éxito')}>
				Título
				<span>Otro componente</span>
			</Card>
		),
	},
	{
		title: 'Selector',
		counter: 2,
		element: (
			<Selector
				options={['option-1', 'option-2', 'option-3', 'option-4']}
				selected="option-1"
				selector={['Primera opción', 'Segunda y mejor', 'La de bronce', 'Última chance']}
				onClick={() => alert('Button clickeado con éxito')}
				row={false}
			/>
		),
	},
];
