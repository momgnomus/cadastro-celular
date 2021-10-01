import Layout from '../components/Layout';
import Register from '../components/Register';

export default function addCell() {
  return (
    <Layout>
      <Register
        initialValue={{
          model: '',
          brand: '',
          price: '',
          startDate: '',
          endDate: '',
          color: 'BLACK',
        }}
      />
    </Layout>
  );
}
