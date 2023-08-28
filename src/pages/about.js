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

function About({isFooter=true}) {
  const [pageLoading, setPageLoading] = useRecoilState(generalPageLoading)
  const data = [
    {
        "id": 5,
        "content": "CEO ",
        "image_url": "",
        "type": "team",
        "title": "JOHN AG",
        "created_at": "2021-09-12T21:41:32.000+00:00",
        "updated_at": "2022-06-27T17:27:17.000+00:00"
    },
    {
        "id": 6,
        "content": "Director Growth & Marketing",
        "image_url": "",
        "type": "team",
        "title": "JANE BROWN,",
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
            <TopNav />
            <div className='w-100 pt-70p'>

              <div className='w-100'>
                <Fade bottom>
                  <div className='container aboutTop pt-5'>
                    <div className='text-center'>
                      <p className='fs-3 fw-900p' dangerouslySetInnerHTML={{__html: "ABOUT US"}} />
                    </div>
                        <div className='row'>
                          <div className='col-md-12'>
                            <div className=''>
                              <p className='text-center px-5 mx-5 '> 
                              The committee was originally established on December 14, 
                              1795, as the Committee on Commerce and Manufactures 
                              when the growing demands of the young nation required that Congress establish a permanent panel to exercise its constitutional authority to "regulate Commerce with foreign Nations, and among the several States
                              </p>
                            </div>
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

export default About