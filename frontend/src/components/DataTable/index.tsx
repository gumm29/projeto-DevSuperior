import axios from 'axios';
import Paginacao from 'components/Paginacao';
import { SalePage } from 'model/sale'
import { useEffect, useState } from 'react'
import { formatLocalDate } from 'utils/format';
import { BASE_URL } from 'utils/requests';

const DataTable = () => {

  const [activePage, setActivePage] = useState(0)
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0
  })

  useEffect(() => {
    axios.get(`${BASE_URL}/saler?page=${activePage}&size=20&sort=date,desc`)
      .then(resp => setPage(resp.data))
  }, [activePage]);

  const changePage = (indice: number) => setActivePage(indice)

  return(
    <>
    <Paginacao page={page} onPageChange={changePage}/>
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {page.content?.map(item => (
            <tr key={item.id}>
              <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
              <td>{item.seller.name}</td>
              <td>{item.visited}</td>
              <td>{item.deals}</td>
              <td>{item.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default DataTable