import React, { Component } from 'react'
import {
    Card,
    Select,
    Input,
    Button,
    Icon,
    Table
} from 'antd'
import LinkButton from '../../components/link-button'
import {reqProdocts} from '../../api'
/**
 * 商品管理
 */
const Option = Select.Option;
export default class Product extends Component {
    state = {
        products: [],//商品列表
        loading: false,
        total:0,//商品的总数量
    }

    initcolumns = () => {
        this.columns = [
            {
                title: '商品名称',
                dataIndex: 'name'
            },
            {
                title: '商品描述',
                dataIndex: 'desc'
            },
            {
                title: '价格',
                dataIndex: 'price',
                //显示的数据不是数据本身的时候，就要写render，render的返回值就是可以显示的值
                render: (price) => '￥' + price
            },
            {
                title: '状态',
                width:'100px',
                dataIndex: 'status',
                render: (status) => {
                    let btntext = '下架'
                    let text = '在售'
                    if (status === 2) {
                        btntext = '上架'
                        text = '已下架'
                    }
                    return (
                        <span>
                            <button>{btntext}</button><br/>
                            <span>{text}</span>
                        </span>

                    )
                }
            },
            {
                title: '操作',
                width:100,
                render: (product) => (
                    <span>
                        <LinkButton>详情</LinkButton>
                        <LinkButton>更改</LinkButton>
                    </span>
                )

            }
        ]
    }

    //异步获取商品列表显示
    getProdocts = async(pageNum)=>{
        const result = await reqProdocts(pageNum,3)
        console.log(result)
        if(result.status===0){
            //取出数据
            const {total,list} = result.data 
            //更新状态
            this.setState({
                products:list,
                total
            })
        }
    }

    //挂载之前初始化列
    componentWillMount() {
        this.initcolumns()
    }

    //
    componentDidMount(){
        //获取第一页显示
        this.getProdocts(1)
    }
    render() {
        const { loading, products ,total} = this.state
        const title = (
            <span>
                <Select style={{ width: 200 }} value='2'>
                    <Option value='1'>请输入商品</Option>
                    <Option value='2'>请描述商品</Option>
                </Select>
                <Input type='text' placeholder='关键字' style={{ width: 200, margin: '0 10px' }} />
                <Button type='primary'>搜索</Button>
            </span>
        )
        const extra = (
            <Button type='primary'>
                <Icon type='plus'></Icon>
                <span>添加商品</span>
            </Button>
        )
        return (
            <Card title={title} extra={extra}>
                <Table
                    columns={this.columns}
                    dataSource={products}
                    rowKey='_id'
                    bordered//属性值为true时，可以省略
                    loading={loading}
                    pagination={{total, defaultPageSize: 4, showQuickJumper: true, onChange:this.getProdocts }}
                />

            </Card>
        )
    }
}
