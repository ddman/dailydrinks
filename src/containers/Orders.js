import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, Button } from 'reactstrap';
import { withRouter } from "react-router";
import { deleteOrder } from '../actions'


let Orders = ({ orders, history, deleteOrder }) => {

  const addOrder = () => {
    history.push('/order')
  }

  const goToOrder = (key) => {
    history.push(`/order/${key}`)
  }


  const confirmDelete = (key, order) => {
    if (window.confirm(`確認刪除 ${order.name}？`)) {
      deleteOrder(key)
    }
  }


  return (<Container className="mt-3">
    {!orders.length && <h3 >目前沒有訂單，來試試看新增訂單吧！</h3>}
    <Button color="primary" onClick={addOrder}>新增訂單</Button>

    {!!orders.length && orders.map(([key, order]) => <Card key={key} className="mt-2" >
      <CardBody>
        <h3>{order.name}  </h3>
        <h5>${order.price} </h5>
        {order.notes &&
          <pre className="p-2 bg-light text-dark"  >
            {order.notes}
          </pre>
        }
        <Button color="warning" onClick={() => { goToOrder(key) }} >修改</Button>
        {' '}
        <Button color="danger" onClick={() => { confirmDelete(key, order) }} >刪除</Button>
      </CardBody>
    </Card>)
    }


  </Container>)
}


const mapStateToProps = (state) => {
  return { orders: state.get('orders').toArray() }
}


Orders = connect(mapStateToProps, { deleteOrder })(Orders)

Orders = withRouter(Orders)

export default Orders