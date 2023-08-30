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
import { members } from '../data/members';

function Members({isFooter=true}) {
  const [pageLoading, setPageLoading] = useRecoilState(generalPageLoading)
  const aboutContent = members

  useEffect(() => {
    setPageLoading( Array.isArray(aboutContent) || Object.values(aboutContent).length ? false : true)
  }, [aboutContent])


  return (
    <div className='w-100'>
        <TopNav  className='mb-4' />
      {
        pageLoading ? (
          <PageLoading />
        ) : (
          <div className='w-100 mt-5'>
            <div className="mb-5">
              <TopNav />
              </div>
            <div className='w-100 pt-70p'>
              <div className='w-100'>
                <Fade bottom>
                  <div className='w-100'>
                    <div className='container'>
                      <div className='row'>
                        {
                            members?.map((val)=>(
                              <div className='col-md-3 my-3' key={val.id}>
                                <Link to={`/members/${val.url}`} /*onClick={/*()=> history.push({ pathname: `/news/${val.id}`, state: {title: val.title, content: val.content} })}*/>
                                    <div className='text-center'>
                                        <img alt='members' src={val.image_url || '/images/fallback-sm.png'} style={{width: 150, height: 150}} className='rounded-15p object-cover h-30 w-30 shadow-sm img-fluid' />
                                        <h6 className='fs-5 fw-bold my-2' dangerouslySetInnerHTML={{__html: val.title}} />
                                        <p className='mb-0'>{val?.constituency} Federal Constituency</p>
                                        <p>{val?.state} </p>

                                        
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

export default Members