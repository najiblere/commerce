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
import { Link, useParams } from "react-router-dom";
import { members } from "../data/members";
import { imageUrl } from "../services/axios";
import { FacebookFilled, FacebookOutlined, InstagramFilled, TwitterOutlined, YoutubeFilled } from "@ant-design/icons";
import LatestNews from "./latestNews";
import { newsData } from "../data/new";
import NewsCard from "../componentParts/newsCard";

function MemberDetails() {
    const { uname } = useParams();

  const dataC = useRecoilValueLoadable(getAllContacts)
  const contacts = dataC.state === "hasValue" && dataC.contents ? dataC.contents : []
  const dataS = useRecoilValueLoadable(getSocialLinks)
  const settings = dataS.state === "hasValue" ? dataS.contents : {}
  const [data, setData] = useState({ name: "", email: "", phone: "", subject: "", message: "", })
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState({ show: false })
  const [details, setDetails] = useState({});

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
const memberDetails = members?.filter(e=>e?.url === uname)[0];
console.log('de', memberDetails);
setDetails(memberDetails);
},[])

  return (
    <div id="contactPage">
        <div className="mb-5">
      <TopNav />
      </div>
     

      <div className='pt-5'>
      <div className=" pt-3 mt-5 text-center" style={{ backgroundImage: 'url(/home-bg.png)'}}>
      <h3 className='m-0'>Hon. {details?.title}</h3>
        </div>
        <div className="row pt-5 actual-content py-4 px-lg-4 justify-content-start">
          <div className='col-sm-10 col-md-4 text first pt-5'>
            <Fade right>
              <div className="">
                <div className="App">
                <div className='text-center'>
                    <img alt='member' src={details?.image_url } style={{height: 400}} className='rounded-15p shadow-sm img-fluid' />
                    
                </div>
                </div>
              </div>
              <div>
                <p className="fs-2 mt-3 mb-1">Contact</p>
                <p>Suit {details?.officeNo}</p>
                <p>{details?.phoneNumber}</p>
                <p className="fs-2 mb-1 ">Socials</p>
                <div className="'w-100 row py-3">
                <div className="col-md-2 text-center md-m">
                    <a href={`https://www.twitter.com/${details?.twitter}`} target="_blank">
                    <TwitterOutlined/>
                    </a>
                </div>
                <div className="col-md-2 text-center md-m">
                    <a href={details?.facebook ? `https://www.fb.com/${details?.facebook}`: '#'} target="_blank">
                    <FacebookFilled/>
                    </a>
                </div>
                <div className="col-md-2 text-center md-m">
                    <a href={details?.insta ? `https://www.instagram.com/${details?.insta}` : ''} target="_blank">
                    <InstagramFilled/>
                    </a>
                </div>
                <div className="col-md-2 text-center md-m">
                    <a href={details?.youtube ? `https://www.youtube.com/${details?.youtube}` : ''} target="_blank">
                    <YoutubeFilled/>
                    </a>
                </div>
                </div>
              </div>
            </Fade>
          </div>

    <div className='col-sm-10 col-md-8 text-start pt-5'>
          <div className="App">
            <p className="fs-1 fw-900p">Profile</p>
            <h6 className='fs-5 fw-bold my-2' dangerouslySetInnerHTML={{__html: details?.biography}} />
            <p className="fs-1 py-2 fw-900p">Bills</p>
            
            <ul>
                {details?.bills?.map(e =>
                <li>{e}</li>
                    )}
            </ul>
                

            <p className="fs-1 fw-900p">Motions</p>
            <ul>
                {details?.motion?.map(e =>
                <li>{e}</li>
                    )}
            </ul>
        </div> 
  </div>

        </div>
      </div>
      <div className='w-100'>
              <Fade bottom>
                <div className='w-100 py-5 container'>
                  <div className='my-3 text-center'>
                  
                        <>
                          <p className='fs-2 fw-500p'>News & Announcement </p>
                        </>
                  </div>
                  <div className='row'>
                    {
                      newsData?.map((val,i)=> i < 4 ? (
                        <div key={val.id} className={`col-md-3 my-2 minH-200p`}>
                          <Link to={`/news/${val.id}`} /*onClick={/*()=> history.push({ pathname: `/news/${val.id}`, state: {title: val.title, content: val.content} })}*/>
                            <div className='rounded-5 shadow-sm h-100'>
                              <NewsCard
                                img={val.image_url}
                                title={val.title}
                                text={val.content}
                              />
                            </div>
                        </Link>
                      </div>
                      ): '')
                      }
                  </div>
                  <div className='my-3 text-center'>
                <p className='fs-2 fw-900p btn' style={{background: '#00f900'}}>More News</p>
                </div>
                </div>
                
              </Fade>
            </div>
      <PageFooter />
    </div>
  )
}

export default MemberDetails