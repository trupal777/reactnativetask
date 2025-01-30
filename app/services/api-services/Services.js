import {API_KEY} from '../../config';

// INFO: API call header configuration added here
export const headersData = async params => {
  // console.log('🚀 ~ headersData ~ params:', params);
  return {
    headers: {
      'Content-Type': params.type ? params.type : 'application/json',
      Authorization: params ? `Bearer ${params}` : '',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Authorization',
      'x-api-key': API_KEY,
    },
  };
};
