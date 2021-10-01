import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Layout from '../../components/Layout';
import Register from '../../components/Register';
import api from '../../lib/api';

export default function addCell() {
  const router = useRouter();
  const [initialValue, setInitialValue] = useState(null);

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      api.get(`/phone/${id}`).then(({ data }) => {
        setInitialValue({
          id: data._id,
          code: data.code,
          model: data.model,
          brand: data.brand,
          price: data.price,
          startDate: dayjs(data.date).format('YYYY-MM-DD'),
          endDate: dayjs(data.endDate).format('YYYY-MM-DD'),
          color: data.color,
        });
      });
    }
  }, [router]);

  if (!initialValue) {
    return 'Carregando';
  }

  return (
    <Layout>
      <Register initialValue={initialValue} />
    </Layout>
  );
}
