export async function fetch_govt_balance_data() {
	const data_gov_url = 'https://data.gov.sg/api/action/datastore_search';
	// Government Overall Fiscal Position (Ministry of Finance)
	const resource_id = '25299884-d68e-4f6d-a393-db113ce8ac6b';
	const params_obj = {
		resource_id,
		q: 'balance'
	};
	let url_search_params = new URLSearchParams(params_obj);

	const response = await fetch(`${data_gov_url}?${url_search_params}`);
	const response_json = await response.json();
	return response_json.result.records;
}
