import React, { Component } from 'react'

import {
    Card,
    Icon,
    Form,
    Select,
    Button,
    Input
} from 'antd'
import LinkButton from '../../components/link-button'
import memoryutils from '../../utils/memoryutils'
import PicturesWall from './picturesWall'
//获取所有分类
import { reqCategroys } from '../../api';


const Item = Form.Item
const Option = Select.Option
class ProductAddUpdate extends Component {
    state = {
        categorys: []
    }

    // 点击按钮进行表单统一验证
    handleSubmit = (e) => {
        // 阻止事件的默认行为(提交表单)
        e.preventDefault()
        //统一表单验证
        this.props.form.validateFields((err, values) => {
            console.log(values)
            if (!err) {
                //发送添加商品的请求

            }
        })
    }

    getCategorys = async () => {
        const result = await reqCategroys();
        if (result.status === 0) {
            const categorys = result.data
            //更新状态
            this.setState({
                categorys
            })
        }

    }
    /*
     对价格进行自定义验证
     */
    validatePrice = (rule, value, callback) => {
        if (value === '') {
            callback();
        } else if (value <= 0) {
            callback('价格必须大于0')
        } else {
            callback()
        }
    }

    componentWillMount() {
        //将product，isUpdate都放到this身上，方便取
        this.product = memoryutils.product//product可能有值，可能为{}
        this.isUpdate = !!this.product._id//将一个数据强制转换为对应的布尔值
    }
    componentDidMount() {
        //获取所有分类更新
        this.getCategorys()

    }

    render() {
        const { categorys } = this.state;
        const { getFieldDecorator } = this.props.form
        const {product,isUpdate} = this

        const title = (
            <span>
                <LinkButton>
                    <Icon type='arrow-left' onClick={() => { this.props.history.goBack() }} />
                </LinkButton>
                <span>{isUpdate ? '修改商品' : '添加商品'}</span>
            </span>
        )
        //指定Form表单中I tem的布局
        const formLayout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 8 }
        }
        return (
            <Card title={title} >
                <Form {...formLayout} onSubmit={this.handleSubmit}>
                    <Item label="商品名称">
                        {getFieldDecorator('name', {
                            initialValue: product.name,
                            rules: [{ required: true, message: '商品名称必须输入' }],
                        })(<Input type='text' placeholder='请输入商品名称' />)}
                    </Item>
                    <Item label="商品描述">
                        {getFieldDecorator('desc', {
                            initialValue: product.desc,
                            rules: [{ required: true, message: '商品描述必须输入' }],
                        })(<Input type='text' placeholder='请输入商品描述' />)}
                    </Item>
                    <Item label="商品价格">
                        {getFieldDecorator('price', {
                            initialValue: product.price,
                            rules: [
                                { required: true, message: '必须输入价格!' },
                                { validator: this.validatePrice }
                            ],
                        })(<Input type='number' placeholder='请输入商品价格' addonAfter="元" />)}
                    </Item>
                    <Item label="商品分类">
                        {getFieldDecorator('categoryId', {
                            initialValue: product.categoryId || '',//又可能product没值，这是让其匹配未选择
                            rules: [
                                { required: true, message: '必须输入商品分类!' }
                            ],
                        })(
                            <Select>
                                <Option value=''>未选择</Option>
                                {
                                    categorys.map(c => <Option value={c._id} key={c._id}>{c.name}</Option>)
                                }
                            </Select>
                        )}
                    </Item>
                    <Item label="商品图片">
                        <PicturesWall/>
                    </Item>
                    <Item label="商品详情">
                        <span>商品详情组件</span>
                    </Item>
                    <Item >
                        <Button type='primary' htmlType='submit'>提交</Button>
                    </Item>
                </Form>
            </Card>
        )
    }
}
export default Form.create()(ProductAddUpdate)