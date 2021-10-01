import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { customAlphabet } from 'nanoid';
import api from '../lib/api';

const validationSchema = Yup.object({
  model: Yup.string()
    .min(2, 'Mínimo 2 caracteres')
    .max(255, 'Máximo 255 caracteres')
    .required('Preenchimento obrigatório'),
  brand: Yup.string()
    .min(2, 'Mínimo 2 caracteres')
    .max(255, 'Máximo 255 caracteres')
    .required('Preenchimento obrigatório'),
  price: Yup.number()
    .required('Preenchimento obrigatório')
    .positive('Número invalido'),
  color: Yup.string()
    .required('Preenchimento obrigatório')
    .oneOf(['BLACK', 'WHITE', 'GOLD', 'PINK']),
  startDate: Yup.date()
    .required('Preenchimento obrigatório')
    .min(new Date(2018, 12, 25), 'ok'),
  endDate: Yup.date()
    .required('Preenchimento obrigatório')
    .when('startDate', (startDate) => {
      if (startDate) {
        return Yup.date().min(startDate, 'ok');
      }
      return Yup.date();
    }),
});

export default function Register({ initialValue }) {
  const nanoid = customAlphabet('1234567890', 8);
  const router = useRouter();

  return (
    <div className="flex flex-col container items-center">
      <header className="font-semibold mb-2 text-lg">
        <h1>Detalhes do produto</h1>
      </header>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const dados = {
            code: nanoid(8),
            ...values,
            date: dayjs(values.startDate).format('DD/MM/YYYY'),
            endDate: dayjs(values.endDate).format('DD/MM/YYYY'),
          };
          if (dados.id) {
            api.patch(`/phone/${dados.id}`, dados).then(() => {
              setSubmitting(false);
              router.push('/');
            });
          } else {
            api.post('/phone', dados).then(() => {
              setSubmitting(false);
              router.push('/');
            });
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            className="md:grid md:grid-cols-2 space-y-2 md:space-y-0 gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label htmlFor="model">Modelo</label>
              <input
                className="border rounded-md p-1"
                type="text"
                name="model"
                id="model"
                placeholder="XT2041-1"
                value={values.model}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.model && touched.model && errors.model}
            </div>
            <div className="flex flex-col">
              <label htmlFor="brand">Marca</label>
              <input
                className="border rounded-md p-1"
                type="text"
                name="brand"
                id="brand"
                placeholder="Motorola"
                value={values.brand}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.brand && touched.brand && errors.brand}
            </div>
            <div className="flex flex-col">
              <label htmlFor="color">Cor</label>
              <select
                className="border rounded-md p-1"
                name="color"
                id="color"
                value={values.color}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="BLACK">Preto</option>
                <option value="WHITE">Branco</option>
                <option value="GOLD">Dourado</option>
                <option value="PINK">Rosa</option>
              </select>
              {errors.color && touched.color && errors.color}
            </div>
            <div className="flex flex-col">
              <label htmlFor="price">Preço</label>
              <input
                className="border rounded-md p-1"
                type="number"
                name="price"
                id="price"
                placeholder="1.400,00"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.price && touched.price && errors.price}
            </div>
            <div className="flex flex-col">
              <label htmlFor="startDate">Inicio das vendas</label>
              <input
                className="border rounded-md p-1"
                type="date"
                name="startDate"
                id="startDate"
                placeholder="15/03/2020"
                value={values.startDate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.startDate && touched.startDate && errors.startDate}
            </div>
            <div className="flex flex-col">
              <label htmlFor="endDate">Fim das vendas</label>
              <input
                className="border rounded-md p-1"
                type="date"
                name="endDate"
                id="endDate"
                placeholder="14/06/2020"
                value={values.endDate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.endDate && touched.endDate && errors.endDate}
            </div>
            <div className="col-end-3 flex justify-between px-3">
              <Link href="/">
                <button
                  id="color-button"
                  className="border rounded-md px-3"
                  type="button"
                >
                  Voltar
                </button>
              </Link>
              <button
                id="color-button"
                className="border rounded-md px-3"
                disabled={isSubmitting}
                type="submit"
              >
                Salvar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
