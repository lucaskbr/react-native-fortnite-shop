import 'intl';
import 'intl/locale-data/jsonp/en';

export const { format: formatPrice } = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
