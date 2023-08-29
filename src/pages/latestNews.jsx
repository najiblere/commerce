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
import { newsData } from '../data/new';

function LatestNews({isFooter=true}) {
  const [pageLoading, setPageLoading] = useRecoilState(generalPageLoading)

  const aboutContent = newsData


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
            <TopNav/>
            <div className='w-100 pt-70p mt-5'>
              <div className='w-100 mt-5'>
                <Fade bottom>
                  <div className='w-100'>
                    <div className='container'>
                      <div className='row'>
                        {
                            newsData?.map((val)=>(
                              <div className='col-md-2 my-3' key={val.id}>
                                <Link to={`/news/${val.id}`} /*onClick={/*()=> history.push({ pathname: `/news/${val.id}`, state: {title: val.title, content: val.content} })}*/>
                                    <div className='text-center'>
                                    <div>
                                        <img alt='com' src={val.image_url || '/images/fallback-sm.png'} className='rounded-15p object-cover h-48 w-24 shadow-sm img-fluid' />
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

export default LatestNews