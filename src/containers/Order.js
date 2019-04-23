import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { addOrder, updateOrder } from '../actions'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, CardTitle, } from 'reactstrap';

class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      notes: '',
    }
  }

  componentDidMount = () => {
    const { order } = this.props
    if (order) {
      this.setState(order)
    }
  }


  handleChange = (e) => {
    let change = {}

    if ('price' === e.target.name) {
      change[e.target.name] = parseInt(e.target.value)
      e.target.value = parseInt(e.target.value)
    } else {
      change[e.target.name] = e.target.value
    }

    this.setState(change);

  }

  check = () => {

    if (this.state.name.trim().length === 0) {
      return true;
    }
    if (isNaN(parseInt(this.state.price, 10))) {
      return true;
    }
    if (this.state.price < 0) {
      return true;
    }
    return false;
  }

  submit = () => {
    const { match, history, addOrder, updateOrder } = this.props

    const order = {
      name: this.state.name,
      price: this.state.price,
      notes: this.state.notes,
    }

    const key = match.params.key
    if (key) {
      updateOrder(order, key)
    } else {
      addOrder(order)
    }
    history.push('/')
  }


  render = () => {

    const { match } = this.props

    return (<Container className="mt-3">

      <Card>
        <CardBody>
          <Form >
            <CardTitle className="text-center mb-3" >
              <h3>{match.params.key ? '修改訂單' : '新增訂單'}</h3>
            </CardTitle>
            <FormGroup>
              <Label >品項</Label>
              <Input type="text" placeholder="請輸入品項" name="name"
                value={this.state.name} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label >價格</Label>
              <Input type="number" placeholder="請輸入價格" name="price" min={0} max={1000}
                value={this.state.price} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label >備註</Label>
              <Input type="textarea" placeholder="請輸入備註" name="notes"
                value={this.state.notes} onChange={this.handleChange} />
            </FormGroup>
            <Button color="primary" onClick={this.submit} disabled={this.check()} >送出</Button>
          </Form>
        </CardBody>
      </Card>
    </Container>)
  }
}

const mapStateToProps = (state, props) => {

  const { match } = props

  const order = state.get('orders').get(match.params.key)

  console.log(order)


  return {
    order
  }
}

Order = connect(mapStateToProps, { addOrder, updateOrder })(Order)
Order = withRouter(Order)

export default Order