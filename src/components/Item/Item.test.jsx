import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Item from './Item.jsx'

describe('Item', () => {
  test('Komponentti renderöityy merkinnän tiedoilla', () => {
    // Määritellään merkinnän tiedot.
    const data = {
        id:           "1",
        type:         "Kanala1",
        collect_date: "2025-02-09",
        s_amount:     300,
        m_amount:     8300,
        l_amount:     400,
        bad_amount:   77     
    }
    render(<Item data={data} />, {wrapper: BrowserRouter})
    
    // Määritetään lokaaliasetukset.
    const locale = "fi-FI"
  
    // Tyyppi
    const typeElement = screen.getByText(data.type)
    expect(typeElement).toBeInTheDocument()

    // Munien keräyspäivä
    const collect_date = new Date(data.collect_date).toLocaleDateString(locale)
    const dateElement = screen.getByText(collect_date)
    expect(dateElement).toBeInTheDocument() 

  })
})
