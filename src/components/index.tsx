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

import arrow from 'assets/arrow.svg';
import arrowBack from 'assets/arrow-back.svg';
import { ReactElement } from 'react';

export interface IComponent {
	title: string;
	counter: number;
	element: ReactElement;
	toCopy: string;
}

export const components: IComponent[] = [
	{
		title: 'Card',
		counter: 1,
		element: (
			<div>
				<Card onClick={() => alert('Card clickeada con éxito')}>No Title but children</Card>
				<Card title="OK status" status="ok">
					OK
				</Card>
				<Card title="WARN status" status="warn" />
				<Card title="ERROR status" status="error" />
			</div>
		),
		toCopy: `
			<Card onClick={() => alert('Card clickeada con éxito')}>
				No Title but children
			</Card>
		`,
	},
	{
		title: 'Selector',
		counter: 2,
		element: (
			<div>
				<Selector
					options={['1', '2', '3', '4', '5']}
					selected="2"
					selector={[
						'Primera opción',
						'Segunda y mejor',
						'La de bronce',
						'Otra opción',
						'Última chance',
					]}
					onClick={optionSelected => alert(optionSelected)}
				/>
				<Selector
					options={['1', '2', '3', '4', '5']}
					selected="2"
					selector={[
						'Primera opción',
						'Segunda y mejor',
						'La de bronce',
						'Otra opción',
						'Última chance',
					]}
					row
				/>
			</div>
		),
		toCopy: `
			<Selector
				options={['1', '2', '3', '4', '5']}
				selected="2"
				selector={[
					'Primera opción',
					'Segunda y mejor',
					'La de bronce',
					'Otra opción',
					'Última chance',
				]}
				onClick={optionSelected => alert(optionSelected)}
			/>
		`,
	},
	{
		title: 'Button',
		counter: 3,
		element: (
			<div>
				<Button type="primary" onClick={() => console.log('Sended')} icon={arrow} async>
					Send
				</Button>
				<Button type="secondary" onClick={() => console.log('Changed')} icon={arrow} async>
					Are you sure?
				</Button>
				<Button
					type="terciary"
					onClick={() => console.log('Danger')}
					icon={arrowBack}
					flux="back"
					async
				>
					Danger
				</Button>
				<Button type="save" onClick={() => console.log('Saved')} icon={arrow} async>
					Save
				</Button>
				<Button type="transparet" onClick={() => console.log('Default')} async>
					Other action
				</Button>
			</div>
		),
		toCopy: `
			<Button type="primary" onClick={() => console.log('Sended')} icon={arrow} async>
				Send
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
				placeholder="Escribe algo, esto cambiará!"
				align="left"
				label="Texto"
				max={44}
			/>
		),
		toCopy: `
			<Text
				className="values"
				name="fullname"
				placeholder="Escribe algo, esto cambia internamente"
				align="left"
				label="Texto"
				// value="Cambiame"
				// onChange={(e) => algo()}
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
