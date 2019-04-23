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

  return (<Container className="mt-3">

    <Button color="primary" onClick={addOrder}>新增訂單</Button>

    {orders.toArray().map(([key, order]) => <Card key={key} className="mt-2" >
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
        <Button color="danger" onClick={() => { deleteOrder(key) }} >刪除</Button>
      </CardBody>
    </Card>)
    }
  </Container>)
}


const mapStateToProps = (state) => {
  return { orders: state.get('orders') }
}


Orders = connect(mapStateToProps, { deleteOrder })(Orders)

Orders = withRouter(Orders)

export default Orders