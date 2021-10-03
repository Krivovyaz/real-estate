import React from 'react'
import styled from 'styled-components';
import faqPhoto from '../photo/faq-back.jpg';
import './stylesForMainPages/FAQPage.css';
import { Link } from 'react-router-dom';

function FAQPage() {

    const questions = [
        {
            id: 'tab2',
            question: "Can I redeem my investment?",
            content: [
            "Yes. The non-professional Investor has the right to withdraw from the investment within 7 days or, if he/she is a consumer according to the Consumer Code, within 14 days after the order.",
            "One can withdraw by electronic communication to the ***@ e-mail address or by clicking on the 'trash can' button in your profile after logging in.To change your bank account on the virtual cabinet at first you need to make a deposit from the new bank account . This will enable us to verify your bank account. If the verified account belongs to the investor, the new bank account details are automatically saved on the virtual platform. When making future withdrawals, you can choose to which linked bank account you wish to conduct withdrawals."]
        },
        {
            id: 'tab3',
            question: "Does Estate Together guarantee my loans?",
            content: [
            "Estate Together does not guarantee your loans."]
        },
        {
            id: 'tab4',
            question: "How and when is the ROI returned?",
            content: [
            "Once the estate transaction is completed (after all residential units have been sold in accordance with the Business Plan), the exit for investors will take place. It represents the elimination of the invested capital and the profit. That profit, already taxed at a rate of 26% (see here the different types of taxation applicable), will be paid together with the invested capital - through a single bank transfer - directly into the bank account previously indicated by the investor in the 'My personal data' section of his personal area."]
        },
        {
            id: 'tab5',
            question: "How does the taxation work?",
            content: [
            "In any case, we recommend that you contact your accountant for detailed information about the applicability of these provisions to your specific tax situation."]
        },
        {
            id: 'tab6',
            question: "Can I cancel an investment?",
            content: [
            "Yes. The non-professional Investor has the right to withdraw from the investment within 7 days or, if he/she is a consumer according to the Consumer Code, within 14 days after the order. One can withdraw by electronic communication to the ***@ e-mail address or by clicking on the 'trash can' button in your profile after logging in. To change your bank account on the virtual cabinet at first you need to make a deposit from the new bank account . This will enable us to verify your bank account. If the verified account belongs to the investor, the new bank account details are automatically saved on the virtual platform. When making future withdrawals, you can choose to which linked bank account you wish to conduct withdrawals."]
        },
        {
            id: 'tab7',
            question: "How can I change my bank account?",
            content: [
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias impedit architecto fugit, ea. A corporis, doloribus sunt ex. Expedita, modi. Ducimus placeat dolore nisi, natus maiores sunt minima ea quasi?"]
        },
        {
            id: 'tab8',
            question: "Who can invest on Estate Together?",
            content: [
            "You must be at least 18 years old and have a bank account in any of the EEA member states in order to lend through Estate Together. We also have to perform certain 'know your customer' checks before you can start investing with us."]
        },
        {
            id: 'tab9',
            question: "What is the minimum investment amount?",
            content: [
            "The minimum investment amount is €50."]
        }
    ]
return (
        <Container>
            <div className='faq-background'> 
            <div className='title-block'>
                <h1>Help</h1>
                <div className="question">
                        <AskQuestion>Ask a question</AskQuestion>
                </div>
            </div> 
            <img src={faqPhoto}></img>
            </div>
            <div className='faq-body'>
                <div className='faq-container'> 
                    <div className='accordion'> 
                        <div className='tab'> 
                            <input type="checkbox" id="tab1" name="tab-group"></input>
                            <label for="tab1" class="tab-title">What payment options are accepted by Estate Together? <i class="fas fa-angle-down"></i></label>
                            <section class="tab-content"> <hr></hr>
                                <p>Users are welcome to make their deposits to Estate Together via:</p>
                                <ol>
                                <li>SEPA payments</li>
                                <li>LHV bank link</li>
                                <li>But also through third party service providers such as Transferwise, Lemonway and Paysera.</li>
                                </ol>
                                <p>A user's first deposit is the means to verify the bank account, hence the first deposit needs to be done from the investor's personal bank account. <br></br>Estate Together is not a bank, thus we do not fall under the scope of banking laws and regulations. We reduce this risk to our investors by conducting thorough due diligence and by taking asset security on every loan, in case the borrower is unable to repay their loan. <br></br>Estate Together does not guarantee your loans.</p>
                            </section>
                        </div>
 
                         {
                            questions.map((item) => {
                                return (
                                    <div className='tab'> 
                                        <input type="checkbox" id={item.id} name="tab-group"></input>
                                        <label for={item.id} class="tab-title">{item.question}<i class="fas fa-angle-down"></i></label>
                                        <section class="tab-content"> <hr></hr>
                                            {
                                                item.content.map((par) => {
                                                    return(
                                                        <p>{par}</p>
                                                    )
                                                })
                                            }
                                        </section>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default FAQPage

const Container = styled.div``
const AskQuestion = styled.div``