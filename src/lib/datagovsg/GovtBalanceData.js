export async function fetch_govt_balance_data() {
	const data_gov_url = 'https://data.gov.sg/api/action/datastore_search';
	const resource_id = '98856a60-33cd-482a-9dc4-1ed52e562d5d';
	const params_obj = {
		resource_id,
		q: 'balance'
	};
	let url_search_params = new URLSearchParams(params_obj);

	const response = await fetch(`${data_gov_url}?${url_search_params}`);
	const response_json = await response.json();
	return response_json.result.records;
}
