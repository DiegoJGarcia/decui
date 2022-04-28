import Button from './Button';
import Card from './Card';
import Input from './Input';
import Labeled from './Labeled';
import Modal from './Modal';
import Selector from './Selector';
import SideBar from '../layouts/SideBar';
import StatusIcon from './StatusIcon';
import Text from './Text';
import Header from 'layouts/Header';
import FlipCard from './FlipCard';
import Date from './Date';
import moment from 'moment';
import Block from './Block';
import Avatar from './Avatar';
import Rating from './Rating';

export interface IComponent<T> {
	title: string;
	counter: number;
	element: any;
	toCopy: any;
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
		toCopy: `
			<Card title="Ejemplo" status="ok" onClick={() => alert('Card clickeada con éxito')}>
				Título
				<span>Otro componente</span>
			</Card>
		`,
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
		toCopy: `
			<Selector
				options={['option-1', 'option-2', 'option-3', 'option-4']}
				selected="option-1"
				selector={['Primera opción', 'Segunda y mejor', 'La de bronce', 'Última chance']}
				onClick={() => alert('Button clickeado con éxito')}
				row={false}
			/>
		`,
	},
	{
		title: 'Button',
		counter: 3,
		element: (
			<Button className="extra-classname" onClick={() => alert('Button clicked')}>
				Copy
			</Button>
		),
		toCopy: `
			<Button className="extra-classname" onClick={() => alert('Button clicked')}>
				Copy	
			</Button>	
		`,
	},
	{
		title: 'Text',
		counter: 4,
		element: (
			<Text
				className="values"
				name="fullname"
				placeholder="Cuál es tu nombre?"
				align="left"
				label="Texto"
				value="Cambiame"
				onChange={(e: any) => alert(e.target.value)}
				max={44}
				maxWidth={270}
			/>
		),
		toCopy: `
			<Text
				className="values"
				name="fullname"
				placeholder="Cuál es tu nombre?"
				align="left"
				label="Texto"
				value="Cambiame"
				onChange={(e: any) => alert(e.target.value)}
				max={44}
				maxWidth={270}
			/>
		`,
	},
	{
		title: 'StatusIcon',
		counter: 5,
		element: <StatusIcon name="Status" experience={1} noLabel onClick={() => alert('clicked')} />,
		toCopy: `
			<StatusIcon
				name="Status"
				experience={1}
				noLabel
				onClick={() => alert('clicked')}
			/>
		`,
	},
	{
		title: 'Labeled',
		counter: 6,
		element: <Labeled key="labeled" active={true} onClick={() => alert('clicked')} label="HOME" />,
		toCopy: `
			<Labeled
				key="labeled"
				active={true}
				onClick={() => alert('clicked')}
				label="HOME"
			/>
		`,
	},
	{
		title: 'SideBar',
		counter: 7,
		element: (
			<SideBar
				top={<Button>Atras</Button>}
				activeSections={['Home', 'Extras']}
				handleSection={() => alert('clicked')}
			/>
		),
		toCopy: `
			<SideBar
				top={<Button>Atras</Button>}
				activeSections={['Home', 'Extras']}
				handleSection={() => alert('clicked')}
			/>
		`,
	},
	{
		title: 'Modal',
		counter: 8,
		element: (
			<Modal title="Hola modal" open={true}>
				The modal
			</Modal>
		),
		toCopy: `
			<Modal
				title='Hola modal'
				open={false}
			>
				The modal
			</Modal>
		`,
	},
	{
		title: 'Input',
		counter: 9,
		element: (
			<Input
				key="input"
				name="Input"
				value={'The input'}
				onChange={() => alert('clicked')}
				type="text"
				label="The input"
				required
				error=""
			/>
		),
		toCopy: `
				<Input
					key="input"
					name="Input"
					value={'The input'}
					onChange={() => alert('clicked')}
					type="text"
					label="The input"
					required
					error=""
				/>
			`,
	},
	{
		title: 'Header',
		counter: 10,
		element: <Header status="Bienvenido" />,
		toCopy: `
			<Header status="Bienvenido" />
		`,
	},
	{
		title: 'FlipCard',
		counter: 11,
		element: <FlipCard frontFace={true} front={<p>El frente</p>} back={<p>El backface</p>} />,
		toCopy: `
			<FlipCard
				frontFace={true}
				front={<p>El frente</p>}
				back={<p>El backface</p>}
			/>
		`,
	},
	{
		title: 'Date',
		counter: 12,
		element: (
			<Date label="Desde" name="starting_date" value={moment()} onChange={() => alert('clicked')} />
		),
		toCopy: `
			<Date
				label="Desde"
				name="starting_date"
				value={moment()}
				onChange={() => alert('clicked')}
			/>
		`,
	},
	{
		title: 'Block',
		counter: 13,
		element: <Block title="El bloque">EL BODY</Block>,
		toCopy: `
			<Block
				title="El bloque"
			>
				EL BODY
			</Block>
		`,
	},
	{
		title: 'Avatar',
		counter: 14,
		element: <Avatar small pic="" />,
		toCopy: `
			<Avatar
				small
				pic=''
			/>
		`,
	},
	{
		title: 'Rating',
		counter: 15,
		element: <Rating title="Rating" rate="+200" />,
		toCopy: `
			<Rating
				title="Rating"
				rate="+200"
			/>
		`,
	},
];
