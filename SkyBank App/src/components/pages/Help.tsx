import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMain = styled.main`
  h3 {
    color: var(--textColor1);
    transition: all 0.4s;
  }
  background-color: var(--color3);
  transition: all 0.4s;
  color: #fff;
  .topics-container {
    color: var(--textColor1);
    margin: auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 50px;
    row-gap: 50px;
    padding: 20px;
    transition: all 0.4s;
    h3 {
      text-align: center;
    }
    div {
      padding: 10px 10px 20px 50px;
      background-color: var(--color1);
      border-radius: 20px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
      h3 {
        padding: 20px;
        text-align: left;
        color: var(--textColor1);
        transition: all 0.4s;
      }
      ul {
        list-style-type: none;
        padding: 0;
        text-align: left;
        li {
          line-height: 1.5rem;
          a {
            text-decoration: none;
            color: var(--textColor2);
            transition: all 0.4s;
          }
        }
      }
    }
    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
  .faq-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: 50px;
    text-align: left;
    padding: 20px;
    background-color: var(--color1);
    color: var(--textColor1);
    .faq {
      padding: 30px;
      border-bottom: 2px solid #ddd;
    }
    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
`;

const Help = () => {
  return (
    <StyledMain>
      <h1>SkyBank Help Center</h1>

      <section className='topics'>
        <h2>Help Topics</h2>
        <div className='topics-container'>
          <div>
            <h3>Security & Privacy</h3>
            <ul>
              <li>
                <Link to='/signin'>Alerts setup</Link>
              </li>
              <li>
                <Link to='/signin'>Dispute charge</Link>
              </li>
              <li>
                <Link to='/signin'>Forgot ID/password</Link>
              </li>
              <li>
                <Link to='/signin'>Security center</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Card Management</h3>
            <ul>
              <li>
                <Link to='/signin'>Activate card</Link>
              </li>
              <li>
                <Link to='/signin'>Credit car PIN</Link>
              </li>
              <li>
                <Link to='/signin'>Lock/Unlock debit card</Link>
              </li>
              <li>
                <Link to='/signin'>Redeem rewards</Link>
              </li>
              <li>
                <Link to='/signin'>Replace card</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Account Management</h3>
            <ul>
              <li>
                <Link to='/signin'>Account balance</Link>
              </li>
              <li>
                <Link to='/signin'>Account number</Link>
              </li>
              <li>
                <Link to='/signin'>Reorder checks</Link>
              </li>
              <li>
                <Link to='/signin'>Routing number</Link>
              </li>
              <li>
                <Link to='/signin'>Statements and documents</Link>
              </li>
              <li>
                <Link to='/signin'>Update contact info</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Digital Services</h3>
            <ul>
              <li>
                <Link to='/signin'>Digital banking guided demos</Link>
              </li>
              <li>
                <Link to='/signin'>Digital wallet - pay using your phone</Link>
              </li>
              <li>
                <Link to='/signin'>Enroll in online/mobile banking</Link>
              </li>
              <li>
                <Link to='/signin'>Mobile and online banking features</Link>
              </li>
              <li>
                <Link to='/signin'>Paperless statements</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Payments & Transfers</h3>
            <ul>
              <li>
                <Link to='/signin'>Bill Pay</Link>
              </li>
              <li>
                <Link to='/signin'>Direct deposit</Link>
              </li>
              <li>
                <Link to='/signin'>Transfer money</Link>
              </li>
              <li>
                <Link to='/signin'>Wire transfers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Tools</h3>
            <ul>
              <li>
                <Link to='/signin'>Exchange foreign currency</Link>
              </li>
              <li>
                <Link to='/signin'>FICO® score</Link>
              </li>
              <li>
                <Link to='/signin'>Goals tool</Link>
              </li>
              <li>
                <Link to='/signin'>Life services</Link>
              </li>
              <li>
                <Link to='/signin'>Spending and budgeting</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='faq-section'>
        <h3>FAQs</h3>
        <div className='faq-container'>
          <div className='faq'>
            <h3 className='question'>
              I'm having trouble accessing my account online. What should I do?
            </h3>
            <div className='answer'>
              <p>
                To regain online access, select 'Forgot Password?' Follow the
                prompts and provide the requested information. If your online
                access continues to be locked, please{' '}
                <Link to='/contact'>Contact Us by Phone.</Link>
              </p>
            </div>
          </div>
          <div className='faq'>
            <h3 className='question'>
              How do I manage a dispute on my account?
            </h3>
            <div className='answer'>
              <p>
                TTo manage a dispute on your credit card account, visit the
                Dispute Center at any time. You can also view all open and
                closed disputes or cancel an existing dispute.
              </p>
              <p>
                To manage a dispute on your ATM/Debit card account, please
                Contact Us through Chat or call us at 1-888-248-4226; Text
                Telephone (TTY): 1-800-945-0258. A representative will help you
                with your claim.
              </p>
            </div>
          </div>
          <div className='faq'>
            <h3 className='question'>Where can I find my transactions?</h3>
            <div className='answer'>
              <p>
                Find your recent transactions in the bottom half of the Account
                Details page. Use the filters to view your transactions by
                category, time period and cardmember in Spend Summary.
              </p>
            </div>
          </div>
          <div className='faq'>
            <h3 className='question'>How do I activate a card?</h3>
            <div className='answer'>
              <p>Activate your card online.</p>
            </div>
          </div>
          <div className='faq'>
            <h3 className='question'>What if my card was lost or stolen?</h3>
            <div className='answer'>
              <p>
                Deactivate your card, check your recent account activity,
                dispute unrecognized charges.
              </p>
            </div>
          </div>
          <div className='faq'>
            <h3 className='question'>
              What do I need to apply for a SkyBank account online?
            </h3>
            <div className='answer'>
              <p>To apply for an account online, you need to:</p>
              <ul>
                <li>Be a U.S. citizen or resident alien</li>
                <li>Be at least 18 years old</li>
                <li>Answer questions to authenticate your identity</li>
                <li>Agree to the Terms and Conditions of the account</li>
              </ul>
              <p>
                If you meet these eligibility requirements, you will need to
                provide your:
              </p>
              <ul>
                <li>Social Security Number (SSN)</li>
                <li>U.S. address</li>
                <li>
                  Personal information such as date of birth, occupation and
                  phone number. If applying for a loan or line of credit, you
                  will also be asked to supply information about your source of
                  income. Please be aware that SkyBank will verify the
                  information you provide before approving your application.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </StyledMain>
  );
};

export default Help;

//Test to push again
