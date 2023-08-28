import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import { Alert, Divider } from 'antd';
import { useState } from 'react';
import Fade from 'react-reveal/Zoom';
import { useRecoilValueLoadable } from 'recoil';
import { sendData } from '../services/apiCalls';
import { getSocialLinks } from '../states/contact';
import { getSettings } from '../states/home';
import '../styles/footer.scss'

function PageFooter() {
  const data = useRecoilValueLoadable(getSocialLinks)
  const social = data.state === "hasValue" ? data.contents : {}
  const settingsApi = useRecoilValueLoadable(getSettings)
  const settings = settingsApi.state === "hasValue" ? settingsApi.contents : {}
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState({ show: false })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await sendData({ data: { email }, url: "subscribe" })
    if (res.status) {
      setResponse({ status: "success", message: res.message, show: true })
      setEmail("")
    } else {
      setResponse({ status: "warning", message: res.message || res, show: true })
    }
    setLoading(false)
  }
  return (
    <footer className='w-100'>
      {response?.show &&
        // <div class={`alert alert-${response.status}`} role="alert">
        //   {response.message}
        // </div>
        <Alert showIcon closable type={response.status === "success" ? "success" : "error"} message={response.message || "an error occurred please try again!"} />
      }
      <Fade right cascade>
        <div className='bottom container pt-4'>
          <Divider type='horizontal' className='bg-secondary' />
          <div className='row justify-content-between'>
            <p className='col-md-5'>
              Copyright &copy; NODEBITs {new Date().getFullYear()}  All rights reserved
            </p>
            <ul className='col-md-7'>
              <li>
                <a className="nav-link px-2" href="https://fb.com/commercecom_hor">
                  Facebook
                </a>
              </li>
              <li>
                <a className="nav-link px-2" href="https://twitter.com/commercecom_hor">
                  Twitter
                </a>
              </li>
              <li>
                <a className="nav-link px-2" href="#">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </footer>
  )
}

export default PageFooter