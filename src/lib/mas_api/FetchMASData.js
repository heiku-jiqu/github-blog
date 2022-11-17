export async function fetch_MAS_data() {
	let mas_api_url = 'https://eservices.mas.gov.sg/api/action/datastore/search.json';
	let params = {
		resource_id: '2940f379-100d-4f28-986a-8aee84014929'
	};
	let url_params = new URLSearchParams(params);
	let response = await fetch(`${mas_api_url}?${url_params}`);

	let json = await response.json();
	return json.result.records;
}
