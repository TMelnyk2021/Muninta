import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import styles from './Stats.module.scss'

function Stats(props) {

  const locale = "fi-FI"

  const numberFormat = new Intl.NumberFormat(locale)
  
  const linedata = props.data.map(
    (item) => ({
      date: new Date(item.collect_date).getTime(),
      amount: item.m_amount
    })
  )


  return (
    <div className={styles.stats}>

   <h2>Tilastot</h2>

   <h3>Kerätyt M-keskikokoisetmunat aikajanalla</h3>
   <ResponsiveContainer height={350}>
        <LineChart data={linedata}>
          <Line dataKey='amount' />
          <XAxis type='number'
                 dataKey='date'
                 domain={['dataMin','dataMax']}
                 tickFormatter={
                   value => new Date(value).toLocaleDateString(locale)
                 } />
          <YAxis />
          <Tooltip labelFormatter={
                     value => new Date(value).toLocaleDateString(locale)
                   }
                   formatter={
                     value => [numberFormat.format(value),"munaa"]
                   } />
        </LineChart>
      </ResponsiveContainer>


    </div>
  )
}

export default Stats
