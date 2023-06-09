import { Form } from "@formio/react"
import { Col, Row } from "react-bootstrap"
import { atomOneDark, CopyBlock } from "react-code-blocks"

const WizardForm = () => {
  return(
    <>
      <Row>
        <Col>
          <h2>Wizard Forms</h2>
          <p>Form.io provides a way to build multi-page forms and easily embed them within your application using the following code.</p>
          <CopyBlock text={`<Form src={'https://utmcclwqkibeivu.form.io/assessmentformtest'} />`} theme={atomOneDark} language="jsx" codeBlock={true}/>
          <div className="py-3">
            <Form src="https://examples.form.io/wizard"/>
          </div>
        </Col>
      </Row>
    </>
  )
}
export default WizardForm