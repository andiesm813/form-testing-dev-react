import { useCallback, useEffect, useState } from 'react';
import { CustomerDto } from '../models/NorthwindSwagger/customer-dto';
import { postCustomerDto } from '../services/northwind-swagger';

export const usePostCustomerDto = (data: any) => {
  const [customerDto, setCustomerDto] = useState<CustomerDto | undefined>();

  const requestCustomerDto = useCallback(() => {
    let ignore = false;
    postCustomerDto(data)
      .then((data) => {
        if (!ignore) {
          setCustomerDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [data]);

  useEffect(() => {
    requestCustomerDto();
  }, [data, requestCustomerDto]);

  return { requestNorthwindSwaggerCustomerDto: requestCustomerDto, northwindSwaggerCustomerDto: customerDto, setNorthwindSwaggerCustomerDto: setCustomerDto };
}
