import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      variant="primary"
      style={{
        margin: 'auto',
        display: 'block'
      }}
    ></Spinner>
  )
}

export default Loader