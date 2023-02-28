import React from 'react'
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';
function UploadReels() {
  return (
    <div className="upload_container">
          <Button variant="outlined"
              component="label"
              size="normal"
              fullWidth
              style={{
                  marginBottom: '10px',
                  color: "#cf2f74",
                  borderColor: "#cf2f74",
                  fontWeight: 500
              }}
              startIcon={<MovieIcon />}
          >
              <input hidden accept="image/*" multiple type="file" />
              UPLOAD VIDEO</Button>
              {/* loader */}
          <LinearProgress variant="determinate"  color="warning" value={70}></LinearProgress>    
    </div>
  )
}

export default UploadReels