import { CustomerDto } from '../models/NorthwindSwagger/customer-dto';
import { FetchApi } from './fetch-api';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

export async function postCustomerDto(data: any): Promise<CustomerDto | undefined> {
  if (!data) {
    return Promise.resolve(undefined);
  }
  const body = JSON.stringify(data);
  const headers = {
    Authorization: 'Bearer <auth_value>',
    'Content-Type': 'application/json; charset=utf-8'
  };
  return await FetchApi.fetchApiResponse<CustomerDto | undefined>(`${API_ENDPOINT}/Customers`, undefined, 'POST', body, headers);
}
