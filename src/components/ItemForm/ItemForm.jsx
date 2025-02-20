import styles from './ItemForm.module.scss'

function ItemForm(props) {

  return (
    <form>
    <div className={styles.itemform}>

    <div className={styles.itemform_row}>
            <div>
             
            <label htmlFor='type'>Kanala</label>
              <select name='type'>
                <option>Kanala1</option>
                <option>Kanala2</option>
                <option>Kanala3</option>
                <option>Kanala4</option>
              </select>


            </div>
          </div>
         

          <div className={styles.itemform_row}>


            <div>
              <label htmlFor='total_amount'>Kokomäärä</label>
              <input type='number' name='total_amount' step='1' />
            </div>

            <div>
              <label htmlFor='collect_date'>Päivämäärä</label>
              <input type='date' name='collect_date' />
            </div>

            <div>
              <label htmlFor='s_amount'>S-pienet</label>
              <input type='number' name='s_amount' step='1' />
            </div>

            <div>
              <label htmlFor='m_amount'>M-keskikokoiset</label>
              <input type='number' name='m_amount' step='1' />
            </div>

            <div>
              <label htmlFor='l_amount'>L-isot</label>
              <input type='number' name='l_amount' step='1' />
            </div>

            <div>
              <label htmlFor='bad_amount'>Huonoa munaa</label>
              <input type='number' name='bad_amount' step='1' />
            </div>



          </div>
          loput lomakerivit



    </div>
  </form>

  )

}

export default ItemForm
