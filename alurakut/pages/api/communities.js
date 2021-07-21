import { SiteClient } from 'datocms-client';

export default async function receiverRequests(request, response) {
  if (request.method === 'POST') {
    const TOKEN = 'e15fe759356a5227e823756de1434d';
    const client = new SiteClient(TOKEN);

    const record = await client.items.create({
      itemType: '975771', // ID do Model "Communities"
      ...request.body,
      // title: 'Comunidade Teste 1',
      // imageUrl: 'https://github.com/lucasfdcampos.png',
      // creatorSlug: 'lucasfdcampos',
    });

    response.json({
      dados: 'Algum dado qualquer',
      registro: record,
    });

    return;
  }

  response.status(404).json({
    message: 'Ainda nao temos nada no GET, mas no POST tem.',
  });
}
