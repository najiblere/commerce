import PageFooter from '../componentParts/footer'
import GenericJumbotron from '../componentParts/genericJumbotron'
import TopNav from '../componentParts/topNav'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import '../styles/home.scss'
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { getHome, } from '../states/home';
import { imageUrl } from '../services/axios';
import { Button, Divider, Image, Spin, Switch } from 'antd';
import {useEffect, useState} from 'react'
import NewsCard from '../componentParts/newsCard';
import generalPageLoading from '../states/general';
import PageLoading from '../componentParts/pageLoading';
import About from './about';
import ContentLinks from './contentLinks';
import { newsData } from '../data/new';
import  { Link } from 'react-router-dom';
import { CalendarOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';
import CalenderContent from './calenderContent';
import Logo from '../../src/assets/images/commerce.png'

function Home({history}) {
  const [homePageData, setHomePageData] = useState({
    homeTopData: [],
    homeProductData: [],
    homePosData: [],
    homeProductListData: [],
  })
  const data = useRecoilValueLoadable(getHome)
  const [pageLoading, setPageLoading] = useRecoilState(generalPageLoading)
  const home = data?.state === "hasValue" ? data?.contents : {}
  
  useEffect(() => {
  
    setPageLoading(false)
  }, [home])

  const {
    homeTopData,
    homePosData,
    homeProductData,
    homeProductListData
  } = homePageData

  return (
    <div className='w-100'>

      {
        pageLoading ? (
          <PageLoading />
          ) : (
          <div className='w-100' id='homesection'>
            <TopNav className='mb-4' />
            <div className="home-jumbotron pt-3" style={{ backgroundImage: 'url(/home-bg.png)' }}>
              <div className='container-fluid w-100 pt-5 px-lg-5'>
                <div className={` row`} >
                    <div className='col-md-6 text-center md-m'>
                    <Fade right>
                      <div className='pt-5'>
                        <img src={Logo} className="mt-5 p-0 w-100 " alt='jumbotron' />
                      </div>
                    </Fade>
                  </div>
                  <div className='col-md-6 pt-100p'>
                    <Fade left className='w-100'>
                      <div className=''>
                        <h1 className="text-dark my-lg-5" dangerouslySetInnerHTML={{__html:"Welcome to the Committee on Commerce."}} />
                        <p className='fs-4 fw-bold pe-md-5' dangerouslySetInnerHTML={{__html: "The Commerce Committee is at the forefront of all issues and policies powering Nigeria's economy, including our global competitive edge in technology, trade and industries.​"}} />
                      </div>
                      <div>
                        {/* <div className='col-md-12 text-lg-end'>
                          <a href={ '/#/appointments'} className='btn btn-lg btn-danger w-75 px-md-5 py-3 rounded-pill text-white'>
                            Speak with our expert
                          </a>
                        </div> */}
                      </div>
                    </Fade>
                  </div>
                  <div className='col-md-12 pt-100p'>
                    <Fade left className='w-100'>
                    <ContentLinks isFooter={false}/>
                    </Fade>
                  </div>
                  
                </div>
              </div>
            </div>

            {/*<div className='w-100'>
              <Fade bottom>
                <div className='py-4 w-100'>
                  {
                    homeProductData?.map(e=> (
                      <div className={`text-center py-3 d-${!e.status && "none"}`} key={e.id}>
                        <h3 className='fs-2 fw-900p m-0' dangerouslySetInnerHTML={{__html: "MISSION"}} />
                        <p className='lh-base pt-3 px-5 container-lg' dangerouslySetInnerHTML={{__html:
                            
                            "To lead a united ----------------"
                          }}
                        />
                        <div style={{width: "5%"}} className='mx-auto rounded p-1 bg-green' />
                      </div>
                    ))
                  }
                </div>
              </Fade>
            </div>*/}
            <CalenderContent/>
            <div className='w-100 row py-3' style={{background: '#00f100'}}>
              <div className='col-md-4 text-center md-m'>
                <CalendarOutlined style={{ fontSize: '300%'}}/>
                <p className="fs-1 text-white mb-2" >Established</p>
                <p className='fs-5 py-2 text-white' dangerouslySetInnerHTML={{
                  __html:  "Let's explore available opportunities." }} 
                />
                
              </div>    
              <div className='col-md-4 text-center md-m'>
                <UserOutlined style={{ fontSize: '300%'}} />
              <p className='fs-1 py-2 mb-1 text-white' >20</p>
                <p className="fs-5 text-white mb-2" >Members</p>
                
              </div>
              <div className='col-md-4 text-center md-m'>
                <MessageOutlined style={{ fontSize: '300%'}}/>
                <p className='fs-1 mb-1 py-2 text-white' > 6 </p>
                <p className="fs-5 text-white mb-2" >Specialized Subcommittee</p>
                
              </div>

            </div>
            <div className='w-100'>
              <Fade bottom>
                <div className='w-100 py-5 container'>
                  <div className='my-3 text-center'>
                    {
                      home?.news?.length >= 1 && (
                        <>
                          <p className='fs-2 fw-500p'>Latest News </p>
                          <p className='fs-2 fw-900p'>From the Committee</p>
                        </>
                      )
                    }
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

            <div className='w-100'>
                <div className={`position-relative w-100 bg-orange-gradient py-5`}>
                  <div>
                    <div>
                      <Zoom>
                        <div className="position-relative last-jumbotron pt-1 container my-5" style={{ backgroundImage: 'url(/grain.png)', background: '#00f900' }}>                        
                        <div className='row'>
                        <div className='container-fluid w-100 pt-5 px-lg-5 row'>
                        <div className='col-md-6 text-center md-m'>
                              <p className="fs-1 text-white mb-2" >Commerce Committee</p>
                              <p className='fs-5 py-2 text-white' dangerouslySetInnerHTML={{
                                __html:  "Let's explore available opportunities." }} 
                              />
                            </div>
                            <div className='col-md-4 text-center md-m'>
                              <p className="fs-1 text-white mb-2" >Office Address</p>
                              <p className='fs-4 mb-1 text-white'> Three Arms Zones</p>
                              <p className='fs-5 mb-1  py-0  text-white'> Abuja</p>
                              <p className='fs-5 py-0  text-white'> 08012345678</p>


                            </div>
                            </div>
                            {/* <div className='container'>
                              <div className='row'>
                                <div className='col-md-6 text-lg-end'>
                                  <a href={ '/#/appointments'} className='btn btn-lg btn-light w-75 px-md-5 py-3 rounded-pill text-[#00f900]'>Contact Us</a>
                                </div>
                              </div> 
                            </div> */}
                          </div>
                        </div>
                      </Zoom>
                    </div>
                     
                  </div>
                </div>
            </div>
            <PageFooter />
          </div>
        )
      }



    </div>
  )
}

export default Home