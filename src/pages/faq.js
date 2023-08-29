import React, { useEffect, useState } from 'react'
import TopNav from '../componentParts/topNav'
import PageFooter from '../componentParts/footer'
import { Collapse, Select } from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { useRecoilState, useRecoilValueLoadable } from 'recoil'
import { getFaq } from '../states/home'
import generalPageLoading from '../states/general'
import PageLoading from '../componentParts/pageLoading'


function FaqPage() {

  const [pageLoading, setPageLoading] = useRecoilState(generalPageLoading)
  const data = useRecoilValueLoadable(getFaq)
  const faqData = data.state === "hasValue" ? data.contents : []

  useEffect(() => {
    setPageLoading( Array.isArray(faqData) || Object.values(faqData).length ? false : true)
  }, [faqData])

  const [faqFilter, setFaqFilter] = useState("merchant")

  const filterType = [
    {
      id: 1,
      img: "/images/merchant.png",
      title: "merchant"
    },
    {
      id: 2,
      img: "/images/merchant.png",
      title: "agent"
    },
    {
      id: 3,
      img: "/images/merchant.png",
      title: "aggregator"
    },
  ]


  return (
    <div className='w-100'>
      {
        pageLoading ? (
          <PageLoading />
        ) : (
          <div className='w-100'>
            <TopNav />
              <div className='w-100'>
                <div className='aboutTop bg-orange pt-100p pb-5' style={{ backgroundImage: 'url(/grain.png)', backgroundBlendMode: "darken", backgroundRepeat: "no-repeat", justifyContent: "flex-end"}} >
                  <div className='w-100 text-center'>
                    <div className='text-white pt-5'>
                      <p className='fs-1 fw-bold text-white'>
                        Support and FAQ
                      </p>
                    </div>
                  </div>
                </div>

                <div className='w-100 py-5'>
                  <div className=''>
                    <div hidden className='d-flex justify-content-center'>
                      <div className='mx-3'>
                        <p className='fs-3 fw-bold'>Hello, I am...</p>
                      </div>
                      <div className='mx-3'>
                        <Select value="merchant" size="large" className="bg-white" onChange={(val)=> setFaqFilter(val)}>
                          {
                            filterType.map((val)=> (
                              <Select.Option key={val.id} value={val.title}>
                                <div className='d-flex justify-content-between'>
                                  <div className='px-2'>
                                    <img alt='com' src={val.img} className='bg-orange rounded-circle p-1' />
                                  </div>
                                  <div className='px-2'>
                                    <p className='fw-bold text-capitalize'>{val.title}</p>
                                  </div>
                                </div>
                              </Select.Option>
                            ))
                          }
                        </Select>
                      </div>
                    </div>
                    <div className='container'>
                      <div className='d-flex justify-content-between my-5'>
                        <div>
                          <p className='fs-4 fw-bold'>Browse FAQs</p>
                        </div>
                        <div hidden>
                          <button onClick={()=> setFaqFilter("all")} className='btn btn-link text-orange text-decoration-underline'>View all FAQs</button>
                        </div>
                      </div>

                      <Collapse
                        accordion
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <span className='text-white fw-bold fs-5'>{isActive ? <MinusOutlined color="white" /> : <PlusOutlined color='white'/>}</span>}
                        className="site-collapse-custom-collapse text-white bg-orange border-orange"
                        expandIconPosition="right"
                      >
                        {
                          faqData && faqData.length ? (
                            faqData?.filter(val=> faqFilter === "all" ? val.title : val.type === faqFilter).map((val)=> (
                              <Collapse.Panel header={<b className='text-white ps-md-5 fs-4'>{val.title}</b>} key={val.id} className="site-collapse-custom-panel my-3 bg-orange p-0">
                                <div className='w-100 h-100 bg-white px-md-5'>
                                  <p dangerouslySetInnerHTML={{__html: val.content}} />
                                </div>
                              </Collapse.Panel>
                            ))
                          ) : ""
                        }
                      </Collapse>

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

export default FaqPage