import { useNavigate } from 'react-router-dom'

import Button from '../../shared/buttons'

import useForm from '../../shared/useform/useform'

import styles from './ItemForm.module.scss'



 // <input type='number' name='total_amount' step='1' onChange={handleChange} value={values.total_amount} />


function ItemForm(props) {

  const navigate = useNavigate()


  const submit = () => {
    let storedValues = Object.assign({}, values)
    storedValues.amount = parseFloat(storedValues.amount)
    storedValues.id = storedValues.id ? storedValues.id : crypto.randomUUID()
    props.onItemSubmit(storedValues)
    navigate(-1)
  }





  const initialState = props.formData ? props.formData : {
    type: "",
    collect_date: "",
    s_amount: 0,
    m_amount: 0,
    l_amount: 0,
    bad_amount: 0,
  }



  const {values, handleChange, handleSubmit } = useForm(submit, initialState, false)

  const handleCancel = () => {
    navigate(-1)
  }


  const handleDelete = () => {
    props.onItemDelete(values.id)
    navigate(-1)
  }

  return (
    <form onSubmit={handleSubmit}>

    <div className={styles.itemform}>

    <div className={styles.itemform_row}>
            <div>
             
            <label htmlFor='type'>Kanala</label>

            <select name='type' onChange={handleChange} value={values.type}>
                <option>Kanala1</option>
                <option>Kanala2</option>
                <option>Kanala3</option>
                <option>Kanala4</option>
              </select>

            </div>
          </div>
         

          <div className={styles.itemform_row}>


            <div>
              <label htmlFor='collect_date'>Päivämäärä</label>
              <input type='date' name='collect_date' onChange={handleChange} value={values.collect_date} />

            </div>

            <div>
              <label htmlFor='s_amount'>S-pienet</label>
              <input type='number' name='s_amount' step='1' onChange={handleChange} value={values.s_amount} />
            </div>

            <div>
              <label htmlFor='m_amount'>M-keskikokoiset</label>
              <input type='number' name='m_amount' step='1' onChange={handleChange} value={values.m_amount} />
            </div>

            <div>
              <label htmlFor='l_amount'>L-isot</label>
              <input type='number' name='l_amount' step='1' onChange={handleChange} value={values.l_amount} />
            </div>

            <div>
              <label htmlFor='bad_amount'>Huonoa munaa</label>
              <input type='number' name='bad_amount' step='1' onChange={handleChange} value={values.bad_amount} />
            
            </div>


          </div>

          <div className={styles.itemform_row}>
            <div>
              <Button onClick={handleCancel}>PERUUTA</Button>
            </div>

            <div>
           
            <Button primary
                      disabled={values.type &&
                                values.collect_date ? "" : "disabled"}
                      type='submit'>
                { props.formData ? "TALLENNA" : "LISÄÄ" }
              </Button>
           
           
            </div>
          </div>
          { props.onItemDelete ? 
            <div className={styles.itemform_row}>
              <div>
                <Button secondary onClick={handleDelete}>POISTA</Button>
              </div>
              <div></div>
            </div>
            : null }

    </div>
  </form>

  )

}

export default ItemForm
