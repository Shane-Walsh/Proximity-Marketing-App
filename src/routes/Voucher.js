import React, { Component } from 'react';
import '../style/Voucher.css';

const voucherifyClient = require('voucherify')

const client = voucherifyClient({
    applicationId: '2fec3394-7a05-4f36-b431-0129e74d904b',
    clientSecretKey: 'fb668b0b-b2cf-4c63-b28c-58efb561f588'
})

const style ={
    color: 'white',
}

class RedeemVoucher extends Component{

    componentDidMount() {

        //Check user
        client.vouchers.get("test_voucher_1")
            .then((result) => {
                console.log("Result: " + result)
            })
            .catch((error) => {
                console.error("Error: %s", error)
            })
/*
    //Validate Voucher
        client.validations.validateVoucher("test_voucher_1")
        client.validations.validateVoucher("test_voucher_1", {
            order: {
                amount: 5000,
                items: [
                    { product_id: "prod_f1r5Tpr0DuC7", quantity: 2},
                    { product_id: "test_prod_id_2", quantity: 1}
                ],
            },
            customer: {
                source_id: "test_customer_id_1"
            },
            metadata: {
                locale: "en-GB"
            }
        })

        //Redeem Voucher
        client.redemptions.redeem("test_voucher_1", {
            order: {
                amount: 5000,
                items: [
                    { product_id: "prod_f1r5Tpr0DuC7", quantity: 2},
                    { product_id: "test_prod_id_2", quantity: 1}
                ],
            },
            customer: {
                source_id: "test_customer_id_1"
            },
            metadata: {
                locale: "en-GB"
            }
        })
*/


    }

    render(){
        //***********  Voucherify **************//
        //Application Keys
        //
        //Application ID: 2fec3394-7a05-4f36-b431-0129e74d904b
        //Secret Key: fb668b0b-b2cf-4c63-b28c-58efb561f588

        //Client-side Keys
        //
        //Application ID: 2dc19d68-85a9-487b-9179-90600753c22f
        //Secret Key: d6921199-d3cb-4f5b-b4fd-ebe31dbc1657

        console.log('HERE IS VOUCHER!!');

        return(

            <div>
                <h4 style={style}>Voucher</h4>
            </div>
        );
    }
}

export default RedeemVoucher;