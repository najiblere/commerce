import { InlineWidget } from "react-calendly";
import { PopupButton } from "react-calendly";

import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'
import Fade from 'react-reveal/Fade';
import '../styles/contact.scss'
import { useRecoilValueLoadable } from 'recoil';
import { getAllContacts, getContactContent } from '../states/contact';
import { useState } from 'react';
import { sendData } from '../services/apiCalls';
import { Alert } from 'antd';
import { getSocialLinks } from '../states/contact';
import { useEffect } from 'react';

function Contact() {
  const dataC = useRecoilValueLoadable(getAllContacts)
  const contacts = dataC.state === "hasValue" && dataC.contents ? dataC.contents : []
  const dataS = useRecoilValueLoadable(getSocialLinks)
  const settings = dataS.state === "hasValue" ? dataS.contents : {}
  const [data, setData] = useState({ name: "", email: "", phone: "", subject: "", message: "", })
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState({ show: false })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await sendData({ data, url: "messages" })
    if (res.status) {
      setResponse({ status: "success", message: res.message, show: true })
      setData({ name: "", email: "", phone: "", subject: "", message: "", })
    } else {
      setResponse({ status: "warning", message: res.message || res, show: true })
    }
    setLoading(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(data => ({ ...data, [name]: value }))
  }


  const contactsBackup=[
    {
      id: 1,
      key: 'Head Office',
      value: '69 Seefeldstrasse, Zurich, Switzerland',
      type: 'ADDRESS'
    },
    {
      id: 2,
      key: 'African Hub Office',
      value: '5, Ogunsiji Close, By Adeboye Solanke Avenue, Off Allen Avenue, Ikeja, Lagos.',
      type: 'ADDRESS'
    },
    {
      id: 3,
      value: 'info@wayapaychat.com',
      type: 'EMAIL'
    },
  ]

useEffect(()=>{
},[])

  return (
    <div id="contactPage">
      <TopNav />
      <div className='pt-5'>
        <div className="row pt-5 actual-content py-4 px-lg-4 justify-content-start">
          <div className='col-sm-10 col-md-12 text first pt-5'>
            <Fade right>
              <div className="">
                <h3 className='m-0'>Schedule Appointment with our Experts</h3>
                {/* <PopupButton
                  url="https://calendly.com/appointments-zc"

                  rootElement={document.getElementById("root")}
                  text="Click here to schedule!"
  />*/}   
                <div className="App">
                  <InlineWidget url="https://calendly.com/appointments-zc" />
                </div>
              </div>
            </Fade>
          </div>

          {/*<div className='col-sm-10 col-md-6 text-start pt-5'>
          <div className="App">
            <InlineWidget url="https://calendly.com/kabirnajib0" />
  </div> 
  </div>*/}

        </div>
      </div>
      <PageFooter />
    </div>
  )
}

export default Contact