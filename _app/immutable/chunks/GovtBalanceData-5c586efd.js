async function c(){const a="https://data.gov.sg/api/action/datastore_search",s={resource_id:"25299884-d68e-4f6d-a393-db113ce8ac6b",q:"balance"};let e=new URLSearchParams(s);return(await(await fetch(`${a}?${e}`)).json()).result.records}export{c as f};