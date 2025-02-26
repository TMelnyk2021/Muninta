import { LabelList, Legend, Pie, PieChart } from 'recharts'

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

  const reducer = (resultData, item) => {

    const index = resultData.findIndex(arrayItem => arrayItem.type === item.type)
    if (index >= 0) {
      resultData[index].amount = resultData[index].amount + item.s_amount + item.m_amount + item.l_amount
    } else {
      resultData.push({type: item.type, amount: item.s_amount + item.m_amount + item.l_amount})
    }
    return resultData
  }

  const piedata = props.data.reduce(reducer, [])


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

      <h3>Munien kerääminen kanalasta</h3>
      <ResponsiveContainer height={350}>
      <PieChart>
          <Pie data={piedata} dataKey='amount' nameKey='type'>
            <LabelList dataKey='amount' 
                       position='inside' 
                       formatter={
                         value => numberFormat.format(value)
                       } /> 
          </Pie>
          <Legend />
          <Tooltip formatter={ value => numberFormat.format(value) } />
        </PieChart>

      </ResponsiveContainer>   

    </div>
  )
}

export default Stats
