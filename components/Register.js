import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';

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

export default function Register() {
  return (
    <div>
      <header>
        <h1>Detalhes do produto</h1>
      </header>
      <Formik
        initialValues={{
          model: '',
          brand: '',
          price: '',
          startDate: '',
          endDate: '',
          color: 'BLACK',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const dados = {
              ...values,
              startDate: dayjs(values.startDate).format('DD/MM/YYYY'),
              endDate: dayjs(values.endDate).format('DD/MM/YYYY'),
            };
            console.log(dados);
            alert(JSON.stringify(dados, null, 2));
            setSubmitting(false);
          }, 400);
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
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="model">Modelo</label>
              <input
                className="border"
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
            <div>
              <label htmlFor="brand">Marca</label>
              <input
                className="border"
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
            <div>
              <label htmlFor="color">Cor</label>
              <select
                className="border"
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
            <div>
              <label htmlFor="price">Preço</label>
              <input
                className="border"
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
            <div>
              <label htmlFor="startDate">Inicio das vendas</label>
              <input
                className="border"
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
            <div>
              <label htmlFor="endDate">Fim das vendas</label>
              <input
                className="border"
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
            <Link href="/">
              <button className="border" type="button">
                Voltar
              </button>
            </Link>
            <button className="border" disabled={isSubmitting} type="submit">
              Salvar
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
