import PageFooter from '../componentParts/footer'
import GenericJumbotron from '../componentParts/genericJumbotron'
import TopNav from '../componentParts/topNav'
import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';
import '../styles/about.scss'
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import generalPageLoading from '../states/general';
import { useEffect } from 'react';
import PageLoading from '../componentParts/pageLoading';
import { Link } from 'react-router-dom';

function ContentLinks({isFooter=true}) {
  const [pageLoading, setPageLoading] = useRecoilState(generalPageLoading)
  const data = [
    {
        "id": 1,
        "content": "",
        "url": "/committees",
        "image_url": "/images/news/n4.png",
        "type": "team",
        "title": "SUBCOMMITTEES",
        "created_at": "2021-09-12T21:41:32.000+00:00",
        "updated_at": "2022-06-27T17:27:17.000+00:00"
    },
    {
        "id": 2,
        "content": "",
        "url": "/members/munir",
        "image_url": "/images/chair.png",
        "type": "team",
        "title": "HON. AHMED MUNIR, THE CHAIR",
        "created_at": "2022-06-27T16:00:44.000+00:00",
        "updated_at": "2022-06-27T16:00:44.000+00:00"
    },
    {
        "id": 2,
        "content": "",
        "url": "/oversight",
        "image_url": "/images/chair.png",
        "type": "team",
        "title": "Oversigth & Investigations",
        "created_at": "2022-06-27T16:00:44.000+00:00",
        "updated_at": "2022-06-27T16:00:44.000+00:00"
    },
    {
        "id": 3,
        "content": "",
        "url": "/members/deputy",
        "image_url": "/images/news/n2.png",
        "type": "team",
        "title": "HON. X Y, THE DEPUTY CHAIR",
        "created_at": "2022-06-27T16:00:44.000+00:00",
        "updated_at": "2022-06-27T16:00:44.000+00:00"
    },
    {
        "id": 4,
        "content": "",
        "url": "/memberS",
        "image_url": "/images/news/n4.png",
        "type": "team",
        "title": "MEET THE COMMITEE MEMBERS",
        "created_at": "2022-06-27T16:00:44.000+00:00",
        "updated_at": "2022-06-27T16:00:44.000+00:00"
    },
    {
        "id": 5,
        "content": "",
        "image_url": "/images/news/n4.png",
        "url": "/mission",
        "type": "team",
        "title": "MISSION AND HISTORY",
        "created_at": "2022-06-27T16:00:44.000+00:00",
        "updated_at": "2022-06-27T16:00:44.000+00:00"
    },
    {
        "id": 5,
        "content": "",
        "image_url": "/images/news/n4.png",
        "url": "/policies",
        "type": "team",
        "title": "POLICY DOCUMENTS",
        "created_at": "2022-06-27T16:00:44.000+00:00",
        "updated_at": "2022-06-27T16:00:44.000+00:00"
    }
]
  const contacts = [
    {
        "id": 7,
        "value": "info@nedux.ca",
        "visible": 1,
        "position": 2,
        "image_url": "",
        "created_at": "2022-08-11T16:07:53.000+00:00",
        "updated_at": "2022-08-11T16:07:53.000+00:00",
        "type": "EMAIL",
        "key": "Email Address"
    },
    {
        "id": 6,
        "value": "",
        "visible": 1,
        "position": 1,
        "image_url": "",
        "created_at": "2022-08-11T16:03:51.000+00:00",
        "updated_at": "2022-08-11T16:03:51.000+00:00",
        "type": "ADDRESS",
        "key": "Office Address"
    }
]
  const aboutContent = data


  useEffect(() => {
    setPageLoading( Array.isArray(aboutContent) || Object.values(aboutContent).length ? false : true)
  }, [aboutContent])


  return (
    <div className='w-100'>
      {
        pageLoading ? (
          <PageLoading />
        ) : (
          <div className='w-100'>
            <div className='w-100 pt-70p'>
              <div className='w-100'>
                <Fade bottom>
                  <div className='w-100'>
                    <div className='container'>
                      <div className='row'>
                        {
                            data?.map((val)=>(
                              <div className='col-md-3 my-3' key={val.id}>
                                <Link to={`${val.url}`} /*onClick={/*()=> history.push({ pathname: `/news/${val.id}`, state: {title: val.title, content: val.content} })}*/>
                                    <div className='text-center'>
                                    <div>
                                        <img alt='waya' src={val.image_url || '/images/fallback-sm.png'} className='rounded-15p object-cover h-30 w-30 shadow-sm img-fluid' />
                                        <h6 className='fs-5 fw-bold my-2' dangerouslySetInnerHTML={{__html: val.title}} />
                                        
                                    </div>
                                    </div>
                                </Link>
                              </div>
                            ))
                        }
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            {isFooter ?
            <PageFooter /> : ''
            }
          </div>
        )
      }

    </div>
  )
}

export default ContentLinks