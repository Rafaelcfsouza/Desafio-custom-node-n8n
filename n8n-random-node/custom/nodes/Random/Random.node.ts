import { IExecuteFunctions } from 'n8n-workflow';
import {
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class Random implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Random',
		name: 'random',
		icon: 'file:random.svg',
		group: ['transform'],
		version: 1,
		description: 'Gera número aleatório usando Random.org',
		defaults: {
			name: 'Random',
			color: '#00babc',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'Min',
				name: 'min',
				type: 'number',
				default: 1,
				required: true,
				description: 'Valor mínimo (inclusivo)',
			},
			{
				displayName: 'Max',
				name: 'max',
				type: 'number',
				default: 100,
				required: true,
				description: 'Valor máximo (inclusivo)',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			const min = this.getNodeParameter('min', i) as number;
			const max = this.getNodeParameter('max', i) as number;

			const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

			const response = await this.helpers.httpRequest({
				method: 'GET',
				url,
			});

			returnData.push({
				json: {
					randomNumber: parseInt(response, 10),
				},
			});
		}

		return [returnData];
	}
}