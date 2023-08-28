import React from 'react';
import { Call, SupportAgent } from '@mui/icons-material';
function SupportButton() {
  return (
    <footer style={{ position: 'fixed', left: 0, bottom: 20, width: '100%' }}>
      <div>
        <div className="row-md-10 text-right">
          <div className=" text-right" style={{display:'flex', flexDirection:'row', marginLeft:'80%'}}>
          <div style={{marginRight: 5}}>
          <button
              type="button"
              className="btn btn-light"
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyItems: 'center',
              }}
            >
              <Call />
            <span >+23413300359</span>
            </button>
            </div>
            {/*' '}
          {/*<a href="https://wayalinks.freshdesk.com/support/home">
            <button
              type="button"
              className="btn"
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyItems: 'center',
                background: '#FF4400',

              }}
            >
              <SupportAgent />
              <span>Support</span>
            </button>
          </a>*/}
        </div>
        </div>
      </div>
    </footer>
  );
}

export default SupportButton;
